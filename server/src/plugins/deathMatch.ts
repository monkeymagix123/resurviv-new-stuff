import { GameObjectDefs } from "../../../shared/defs/gameObjectDefs";
import type { GunDef } from "../../../shared/defs/gameObjects/gunDefs";
import { isItemInLoadout } from "../../../shared/defs/gameObjects/unlockDefs";
import { WeaponSlot } from "../../../shared/gameConfig";
import { ObjectType } from "../../../shared/net/objectSerializeFns";
import { Config } from "../config";
import { GamePlugin } from "../game/pluginManager";

export default class DeathMatchPlugin extends GamePlugin {
    protected override initListeners(): void {
        this.on("playerJoin", ({ player: data }) => {
            data.scope = "4xscope";
            data.boost = 100;
            data.weaponManager.setCurWeapIndex(WeaponSlot.Primary);

            switch (data.outfit) {
                case "outfitToilet": {
                    data.setOutfit("outfitToilet", true);
                    break;
                }
                case "outfitDarkGloves": {
                    data.chest = "";
                    data.helmet = "";
                    break;
                }
                case "outfitNotEnough": {
                    data.helmet = "";
                    data.backpack = "backpack00";
                    data.addPerk("trick_size");
                    break;
                }
            }
        });

        this.on("playerKill", (data) => {
            // this.game.playerBarn.emotes.push(
            //     new Emote(0, data.player.pos, "ping_death", true)
            // );

            // clear inventory to prevent loot from dropping;
            data.player.inventory = {};
            data.player.backpack = "backpack00";
            data.player.scope = "1xscope";
            data.player.helmet = "";
            data.player.chest = "";

            // don't drop the melee weapon if it's selected from the loadout
            if (isItemInLoadout(data.player.weapons[WeaponSlot.Melee].type, "melee")) {
                data.player.weapons[WeaponSlot.Melee].type = "fists";
            }

            if (isItemInLoadout(data.player.outfit, "outfit")) {
                data.player.outfit = "outfitBase";
            }

            data.player.weaponManager.setCurWeapIndex(WeaponSlot.Melee);

            {
                const primary = data.player.weapons[WeaponSlot.Primary];
                if (isItemInLoadout(primary.type, "gun")) {
                    primary.type = "";
                    primary.ammo = 0;
                    primary.cooldown = 0;
                }

                const secondary = data.player.weapons[WeaponSlot.Secondary];
                if (isItemInLoadout(secondary.type, "gun")) {
                    secondary.type = "";
                    secondary.ammo = 0;
                    secondary.cooldown = 0;
                }
            }

            // give the killer nades and gun ammo and inventory ammo
            if (data.source?.__type === ObjectType.Player) {
                const killer = data.source;
                if (killer.inventory["frag"] == 0) {
                    killer.weapons[WeaponSlot.Throwable].type = "frag";
                }

                killer.inventory["frag"] = Math.min(killer.inventory["frag"] + 3, 12);
                killer.inventory["mirv"] = Math.min(killer.inventory["mirv"] + 1, 4);
                if (Config.modes[1].mapName === "snow")
                    killer.inventory["snowball"] = Math.min(
                        killer.inventory["snowball"] + 4,
                        10,
                    );
                killer.inventoryDirty = true;
                killer.weapsDirty = true;

                function loadAmmo(slot: WeaponSlot) {
                    const weapon = killer.weapons[slot];
                    if (weapon.type) {
                        const gunDef = GameObjectDefs[weapon.type] as GunDef;
                        killer.weapons[slot] = {
                            ...weapon,
                            ammo: calculateAmmoToGive(
                                weapon.type,
                                weapon.ammo,
                                gunDef.maxClip,
                            ),
                        };
                    }
                }

                loadAmmo(WeaponSlot.Primary);
                loadAmmo(WeaponSlot.Secondary);
            }
        });
    }
}

const customReloadPercentage: Record<string, number> = {
    sv98: 30,
    pkp: 30,
};
function calculateAmmoToGive(type: string, currAmmo: number, maxClip: number): number {
    const amount = customReloadPercentage[type] ?? 50;
    return Math.floor(Math.min(currAmmo + (maxClip * amount) / 100, maxClip));
}
