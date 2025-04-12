import { allowedGuns } from "../../deathmatch/loadoutItems";
import { GameObjectDefs } from "../gameObjectDefs";
import { CrosshairDefs } from "./crosshairDefs";
import { HealEffectDefs } from "./healEffectDefs";
import { PassDefs } from "./passDefs";

const _allowedHealEffects = Object.keys(HealEffectDefs);
const _allowedMeleeSkins = [
    "fists",
    "knuckles_rusted",
    "knuckles_heroic",
    "karambit_rugged",
    "karambit_prismatic",
    "karambit_drowned",
    "bayonet_rugged",
    "bayonet_woodland",
    "huntsman_rugged",
    "huntsman_burnished",
    "bowie_vintage",
    "bowie_frontier",
];
export const privateOutfits = [
    "outfitToilet",
    "outfitGreenEyes",
    "outfitOwnr",
    "outfitShinyGold",
    "outfitPreacher",
    "outfitBoutique",
    "outfitNotEnough",
    "outfitDev",
    "outfitTheSurvivor",
];

const allowedOutfits = [
    "outfitBase",
    "outfitTurkey",
    "outfitMod",
    "outfitWheat",
    "outfitNoir",
    "outfitRedLeaderAged",
    "outfitBlueLeaderAged",
    "outfitSpetsnaz",
    "outfitWoodsCloak",
    "outfitElf",
    "outfitImperial",
    "outfitLumber",
    "outfitVerde",
    "outfitPineapple",
    "outfitTarkhany",
    "outfitWaterElem",
    "outfitHeaven",
    "outfitMeteor",
    "outfitIslander",
    "outfitAqua",
    "outfitCoral",
    "outfitKhaki",
    "outfitParma",
    "outfitParmaPrestige",
    "outfitCasanova",
    "outfitPrisoner",
    "outfitJester",
    "outfitWoodland",
    "outfitRoyalFortune",
    "outfitKeyLime",
    "outfitCobaltShell",
    "outfitCarbonFiber",
    "outfitDarkGloves",
    "outfitDarkShirt",
    "outfitDesertCamo",
    "outfitCamo",
    "outfitRed",
    "outfitWhite",
    "outfitGreeLeafes",
    "outfitRoseWater",
    "outfitOceanEyes",
    "outfitLargeSky",
    "outfitZESKLunar",
    "outfitXander",
    "outfitLaines",
    "outfitNewYearsNomercy",
    "outfitOgnahimmawin",
    "outfit3xt3rm1nat0r",
    "outfitTheRussian",
];
const _allowedEmotes = [
    "emote_thumbsup",
    "emote_sadface",
    "emote_happyface",
    "emote_surviv",
    "emote_gg",
    "emote_question",
    "emote_tombstone",
    "emote_joyface",
    "emote_sobface",
    "emote_thinkingface",
    "emote_flagus",
    "emote_flagthailand",
    "emote_flaggermany",
    "emote_flagfrance",
    "emote_flagsouthkorea",
    "emote_flagbrazil",
    "emote_flagcanada",
    "emote_flagspain",
    "emote_flagrussia",
    "emote_flagmexico",
    "emote_flagpoland",
    "emote_flaguk",
    "emote_flagcolombia",
    "emote_flagukraine",
    "emote_flagturkey",
    "emote_flagphilippines",
    "emote_flagczechia",
    "emote_flagperu",
    "emote_flagaustria",
    "emote_flagargentina",
    "emote_flagjapan",
    "emote_flagvenezuela",
    "emote_flagvietnam",
    "emote_flagswitzerland",
    "emote_flagnetherlands",
    "emote_flagchina",
    "emote_flagtaiwan",
    "emote_flagchile",
    "emote_flagaustralia",
    "emote_flagdenmark",
    "emote_flagitaly",
    "emote_flagsweden",
    "emote_flagecuador",
    "emote_flagslovakia",
    "emote_flaghungary",
    "emote_flagromania",
    "emote_flaghongkong",
    "emote_flagindonesia",
    "emote_flagfinland",
    "emote_flagnorway",
    "emote_heart",
    "emote_sleepy",
    "emote_flex",
    "emote_angryface",
    "emote_upsidedownface",
    "emote_teabag",
    "emote_alienface",
    "emote_flagbelarus",
    "emote_flagbelgium",
    "emote_flagkazakhstan",
    "emote_egg",
    "emote_police",
    "emote_dabface",
    "emote_flagmalaysia",
    "emote_flagnewzealand",
    "emote_logosurviv",
    "emote_logoegg",
    "emote_logoswine",
    "emote_logohydra",
    "emote_logostorm",
    "emote_flaghonduras",
    "emote_logocaduceus",
    "emote_impface",
    "emote_monocleface",
    "emote_sunglassface",
    "emote_headshotface",
    "emote_potato",
    "emote_leek",
    "emote_eggplant",
    "emote_baguette",
    "emote_chick",
    "emote_flagbolivia",
    "emote_flagcroatia",
    "emote_flagindia",
    "emote_flagisrael",
    "emote_flaggeorgia",
    "emote_flaggreece",
    "emote_flagguatemala",
    "emote_flagportugal",
    "emote_flagserbia",
    "emote_flagsingapore",
    "emote_flagtrinidad",
    "emote_flaguruguay",
    "emote_logoconch",
    "emote_pineapple",
    "emote_coconut",
    "emote_crab",
    "emote_whale",
    "emote_logometeor",
    "emote_salt",
    "emote_disappointface",
    "emote_logocrossing",
    "emote_fish",
    "emote_campfire",
    "emote_chickendinner",
    "emote_cattle",
    "emote_icecream",
    "emote_cupcake",
    "emote_donut",
    "emote_logohatchet",
    "emote_acorn",
    "emote_trunk",
    "emote_forest",
    "emote_pumpkin",
    "emote_candycorn",
    "emote_pilgrimhat",
    "emote_turkeyanimal",
    "emote_heartface",
    "emote_logochrysanthemum",
    "emote_santahat",
    "emote_snowman",
    "emote_snowflake",
    "emote_flagmorocco",
    "emote_flagestonia",
    "emote_flagalgeria",
    "emote_flagegypt",
    "emote_flagazerbaijan",
    "emote_flagalbania",
    "emote_flaglithuania",
    "emote_flaglatvia",
    "emote_flaguae",
    "emote_flagdominicanrepublic",
    "emote_logocloud",
    "emote_logotwins",
];

/**
 * Checks if an item is present in the player's loadout
 */
export const isItemInLoadout = (item: string, category: string) => {
    if (!UnlockDefs.unlock_default.unlocks.includes(item)) return false;

    const def = GameObjectDefs[item];
    if (!def || def.type !== category) return false;

    return true;
};

export interface UnlockDef {
    readonly type: "unlock";
    name: string;
    unlocks: string[];
    free?: boolean;
}

export const UnlockDefs: Record<string, UnlockDef> = {
    unlock_default: {
        type: "unlock",
        name: "standard-issue",
        unlocks: [
            // "outfitBase",
            // "fists",
            // "heal_basic",
            // "boost_basic",
            // "crosshair_default",
            // "crosshair_001",
            // "crosshair_005",
            // "crosshair_007",
            // "crosshair_086",
            // "crosshair_027",
            // "crosshair_080",
            // "crosshair_098",
            // "crosshair_101",
            // "crosshair_158",
            // "crosshair_094",
            // "crosshair_118",
            // "crosshair_136",
            // "crosshair_160",
            // "crosshair_176",
            // "emote_thumbsup",
            // "emote_sadface",
            // "emote_happyface",
            // "emote_surviv",
            // "emote_gg",
            // "emote_question",
            // "emote_tombstone",
            // "emote_joyface",
            // "emote_sobface",
            // "emote_thinkingface",
            // "emote_flagus",
            // "emote_flagthailand",
            // "emote_flaggermany",
            // "emote_flagfrance",
            // "emote_flagsouthkorea",
            // "emote_flagbrazil",
            // "emote_flagcanada",
            // "emote_flagspain",
            // "emote_flagrussia",
            // "emote_flagmexico",
            // "emote_flagpoland",
            // "emote_flaguk",
            // "emote_flagcolombia",
            // "emote_flagukraine",
            // "emote_flagturkey",
            // "emote_flagphilippines",
            // "emote_flagczechia",
            // "emote_flagperu",
            // "emote_flagaustria",
            // "emote_flagargentina",
            // "emote_flagjapan",
            // "emote_flagvenezuela",
            // "emote_flagvietnam",
            // "emote_flagswitzerland",
            // "emote_flagnetherlands",
            // "emote_flagchina",
            // "emote_flagtaiwan",
            // "emote_flagchile",
            // "emote_flagaustralia",
            // "emote_flagdenmark",
            // "emote_flagitaly",
            // "emote_flagsweden",
            // "emote_flagecuador",
            // "emote_flagslovakia",
            // "emote_flaghungary",
            // "emote_flagromania",
            // "emote_flaghongkong",
            // "emote_flagindonesia",
            // "emote_flagfinland",
            // "emote_flagnorway",
            // "emote_heart",
            // "emote_sleepy",
            // "emote_flex",
            // "emote_angryface",
            // "emote_upsidedownface",
            // "emote_teabag",
            // "emote_alienface",
            // "emote_flagbelarus",
            // "emote_flagbelgium",
            // "emote_flagkazakhstan",
            // "emote_egg",
            // "emote_police",
            // "emote_dabface",
            // "emote_flagmalaysia",
            // "emote_flagnewzealand",
            // "emote_logosurviv",
            // "emote_logoegg",
            // "emote_logoswine",
            // "emote_logohydra",
            // "emote_logostorm",
            // "emote_flaghonduras",
            // "emote_logocaduceus",
            // "emote_impface",
            // "emote_monocleface",
            // "emote_sunglassface",
            // "emote_headshotface",
            // "emote_potato",
            // "emote_leek",
            // "emote_eggplant",
            // "emote_baguette",
            // "emote_chick",
            // "emote_flagbolivia",
            // "emote_flagcroatia",
            // "emote_flagindia",
            // "emote_flagisrael",
            // "emote_flaggeorgia",
            // "emote_flaggreece",
            // "emote_flagguatemala",
            // "emote_flagportugal",
            // "emote_flagserbia",
            // "emote_flagsingapore",
            // "emote_flagtrinidad",
            // "emote_flaguruguay",
            // "emote_logoconch",
            // "emote_pineapple",
            // "emote_coconut",
            // "emote_crab",
            // "emote_whale",
            // "emote_logometeor",
            // "emote_salt",
            // "emote_disappointface",
            // "emote_logocrossing",
            // "emote_fish",
            // "emote_campfire",
            // "emote_chickendinner",
            // "emote_cattle",
            // "emote_icecream",
            // "emote_cupcake",
            // "emote_donut",
            // "emote_logohatchet",
            // "emote_acorn",
            // "emote_trunk",
            // "emote_forest",
            // "emote_pumpkin",
            // "emote_candycorn",
            // "emote_pilgrimhat",
            // "emote_turkeyanimal",
            // "emote_heartface",
            // "emote_logochrysanthemum",
            // "emote_santahat",
            // "emote_snowman",
            // "emote_snowflake",
            // "emote_flagmorocco",
            // "emote_flagestonia",
            // "emote_flagalgeria",
            // "emote_flagegypt",
            // "emote_flagazerbaijan",
            // "emote_flagalbania",
            // "emote_flaglithuania",
            // "emote_flaglatvia",
            // "emote_flaguae",
            // "emote_flagdominicanrepublic",
            // "emote_logocloud",
            // "emote_logotwins",

            ...new Set([
                ...allowedOutfits,
                ..._allowedMeleeSkins,
                ..._allowedEmotes,
                ..._allowedHealEffects,
                ...Object.keys(CrosshairDefs),
                ...PassDefs.pass_survivr1.items.map((item) => item.item),
                ...allowedGuns,
            ]),
        ],
    },
    unlock_new_account: {
        type: "unlock",
        name: "new-account",
        free: true,
        unlocks: ["outfitDarkShirt"],
    },
};
