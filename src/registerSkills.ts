import { router } from "@kairo-js/router";
import {
    werewolf,
    type ApplyActionsResult,
    type SkillContext,
    type SkillResult,
} from "@mc-werewolf/module";

const ADDON_ID = "werewolf-additionalroles-1";

type PlayerKilledEvent = {
    readonly playerId: string;
    readonly killerId?: string;
    readonly context?: SkillContext;
};

werewolf.defineSkills([
    {
        id: "additionalroles-1:greedyBerserk",
        name: `${ADDON_ID}.skill.name.greedy-wolf.berserk`,
        roleId: "greedy-wolf",
        target: {
            type: "self",
            count: 0,
        },
        handler: {
            apiName: "additionalroles-1:resolveGreedyBerserk",
        },
        uses: 1,
        priority: 0,
        tags: ["attack", "status"],
    },
]);

router.beforeEvents.startup.subscribe((ev) => {
    ev.addonApi.register(
        "additionalroles-1:resolveGreedyBerserk",
        resolveGreedyBerserk,
    );
    ev.addonEvents.on<PlayerKilledEvent>(
        "werewolf-gamemanager",
        "werewolf:playerKilled",
        handlePlayerKilled,
    );
});

function resolveGreedyBerserk(context: SkillContext): SkillResult {
    return {
        actions: [
            {
                type: "setStatus",
                targetId: context.actorId,
                statusId: "additionalroles-1:greedyBerserk",
                value: {
                    active: true,
                    activatedAtTick: router.currentTick,
                },
            },
            {
                type: "sendMessage",
                toPlayerId: context.actorId,
                message: "werewolf-additionlroles-1.skill.greedy-wolf.berserk.message",
            },
        ],
    };
}

function handlePlayerKilled(event: PlayerKilledEvent): void {
    const killedRole = event.context?.game?.players[event.playerId]?.roleId;
    if (killedRole !== "nekomata" || !event.killerId || Math.random() >= 0.5) {
        return;
    }

    void router.request<ApplyActionsResult>(
        "werewolf-gamemanager",
        "werewolf:applyActions",
        {
            actions: [
                {
                    type: "kill",
                    targetId: event.killerId,
                    reason: "additionalroles-1:nekomataDragdown",
                },
                {
                    type: "sendMessage",
                    toPlayerId: event.killerId,
                    message: `${ADDON_ID}.skill.nekomata.dragdown.target.message`,
                },
            ],
            context: event.context,
        },
    ).catch((error) => {
        console.error("[werewolf-additionalroles-1] Nekomata dragdown failed:", error);
    });
}
