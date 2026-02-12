import { DefinitionRegistry, type GameEventContext } from "@mc-werewolf/game-module";
import { world } from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";

export const onTickUpdate = (ev: GameEventContext): void => {
    const { playerData, playersData, ingameConstants } = ev;
    const players = world.getPlayers();
    players.forEach((player) => {
        const playerData = playersData.find((pd) => pd.playerId === player.id);
        if (!playerData) return;

        if (playerData.isBerserk) {
            player.addEffect(MinecraftEffectTypes.Strength, 10, {
                amplifier: 255,
                showParticles: false,
            });
        }
    });
};

export const onSecondUpdate = (ev: GameEventContext): void => {
    const { playerData, playersData, ingameConstants } = ev;
};

DefinitionRegistry.updateHandlers.register({ onTickUpdate, onSecondUpdate });
