import {
    DefinitionRegistry,
    type RoleDefinition,
    type RoleGroupDefinition,
} from "@mc-werewolf/game-module";
import { WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS } from "./constants/translate";

export const roleGroups: RoleGroupDefinition[] = [];

export const roles: RoleDefinition[] = [
    {
        id: "nekomata",
        name: { translate: WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.ROLE_NAME_NEKOMATA },
        description: {
            translate: WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.ROLE_DESCRIPTION_NEKOMATA,
        },
        factionId: "villager",
        sortIndex: 101,
    },
    {
        id: "lone-wolf",
        name: { translate: WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.ROLE_NAME_LONEWOLF },
        description: {
            translate: WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.ROLE_DESCRIPTION_LONEWOLF,
        },
        factionId: "werewolf",
        roleGroup: {
            id: "werewolves",
            name: {
                translate: WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.ROLE_GROUP_NAME_WEREWOLVES,
            },
            color: "§4",
        },
        sortIndex: 102,
    },
    {
        id: "cultist",
        name: { translate: WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.ROLE_NAME_CULTIST },
        description: {
            translate: WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.ROLE_DESCRIPTION_CULTIST,
        },
        factionId: "werewolf",
        roleGroup: {
            id: "werewolves",
            name: {
                translate: WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.ROLE_GROUP_NAME_WEREWOLVES,
            },
            color: "§4",
        },
        isExcludedFromSurvivalCheck: true,
        divinationResult: "villager",
        clairvoyanceResult: "villager",
        sortIndex: 103,
    },
];

// vanillaPack -> 0番台
// AdditionalRoles -> 100×アドオン名番台

DefinitionRegistry.roleGroups.register(roleGroups);
DefinitionRegistry.roles.register(roles);
