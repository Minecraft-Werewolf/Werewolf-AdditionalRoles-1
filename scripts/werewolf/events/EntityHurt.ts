import { EntityComponentTypes, EntityHurtAfterEvent, Player } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { InGameEntityHurt } from "@mc-werewolf/game-module";
import { WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS } from "../constants/translate";

InGameEntityHurt.afterEvent<EntityHurtAfterEvent>((ev, ctx) => {
    const { damage, damageSource, hurtEntity } = ev;

    if (hurtEntity.typeId !== MinecraftEntityTypes.Player) return;
    const hurtPlayer = hurtEntity as Player;
    const hurtPlayerData = ctx.werewolfGameData.playersData.find(
        (playerData) => playerData.player.id === hurtPlayer.id,
    );
    if (!hurtPlayerData) return;
    if (hurtPlayerData.role === null) return;

    if (!damageSource.damagingEntity) return;
    if (damageSource.damagingEntity.typeId !== MinecraftEntityTypes.Player) return;

    const hitPlayer = damageSource.damagingEntity as Player;
    const hitPlayerData = ctx.werewolfGameData.playersData.find(
        (playerData) => playerData.player.id === hitPlayer.id,
    );
    if (!hitPlayerData) return;
    if (hitPlayerData.role === null) return;
    if (hurtPlayerData.role.id === "nekomata") {
        if (hurtEntity.id === hitPlayer.id) return;
        if (Math.random() < 0.5) {
            hitPlayer.applyDamage(999);

            const hitPlayerHealthComponent = hitPlayer.getComponent(EntityComponentTypes.Health);

            if (hitPlayerHealthComponent?.currentValue === 0) {
                hurtPlayer.sendMessage({
                    translate:
                        WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.NEKOMATA_SKILL_DRAGDOWN_MESSAGE,
                    with: [hitPlayer.nameTag],
                });

                hitPlayer.sendMessage({
                    translate:
                        WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.NEKOMATA_SKILL_DRAGDOWN_TARGET_MESSAGE,
                    with: [hurtPlayer.nameTag],
                });
            } else {
                hurtPlayer.sendMessage({
                    translate:
                        WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.NEKOMATA_SKILL_DRAGDOWN_PROTECTED_TARGET_MESSAGE,
                    with: [hitPlayer.nameTag],
                });

                hitPlayer.sendMessage({
                    translate:
                        WEREWOLF_ADDITIONALROLES_ONE_TRANSLATE_IDS.NEKOMATA_SKILL_DRAGDOWN_PROTECTED_MESSAGE,
                    with: [hurtPlayer.nameTag],
                });
            }
        }
    }

    if (hitPlayerData.role.id === "greedy-wolf") {
        const hitSelfPlayerData = ctx.playersData.find(
            (playerData) => playerData.playerId === hitPlayer.id,
        );
        if (hitSelfPlayerData === undefined) return;

        hitSelfPlayerData.isBerserk = false;
        hitPlayer.playSound("mob.wolf.hurt");
    }
});
