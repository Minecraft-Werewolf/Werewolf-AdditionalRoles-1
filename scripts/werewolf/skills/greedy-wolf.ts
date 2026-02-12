import type { GameEventHandlerMap } from "@mc-werewolf/game-module";
import { world } from "@minecraft/server";
import { WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS } from "../constants/translate";

export const greedyWolfSkillHandlers: GameEventHandlerMap = {
    "greedy-wolf-berserk": async (ev) => {
        const { playerData: pd, playersData: psd, werewolfGameData: we } = ev;
        const player = world.getPlayers().find((p) => p.id === pd.playerId);
        if (!player) return false;
        pd.isBerserk = true;
        player.sendMessage({
            translate: WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.GREDDY_WOLF_SKILL_BERSEAK_MESSAGE,
        });
        player.playSound("random.orb");
        return true;
    },
};
