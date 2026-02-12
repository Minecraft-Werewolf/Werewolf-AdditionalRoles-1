import { DefinitionRegistry, type GameEventHandlerMap } from "@mc-werewolf/game-module";
import { greedyWolfSkillHandlers } from "./greedy-wolf";

export const roleSkillHandlers: Record<string, GameEventHandlerMap> = {
    "greedy-wolf": greedyWolfSkillHandlers,
};

DefinitionRegistry.roleSkillHandlers.register(roleSkillHandlers);
