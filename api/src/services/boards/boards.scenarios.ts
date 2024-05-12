import type { Prisma, Board } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BoardCreateArgs>({
  board: {
    one: { data: { nameEn: 'String6622438', nameKr: 'String7021288' } },
    two: { data: { nameEn: 'String4707011', nameKr: 'String8873248' } },
  },
})

export type StandardScenario = ScenarioData<Board, 'board'>
