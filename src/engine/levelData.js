/**
 * Level design philosophy:
 * - Early levels: low variety, easy matches
 * - Mid levels: more variety, harder planning
 * - Later levels: full set, higher match requirements
 *
 * matches = total tiles to clear (not moves)
 */

export const levels = [
  // ======================
  // LEVELS 1–5
  // Items: chocolate, drink
  // Very easy onboarding
  // ======================
  {
    id: 1,
    matches: 12,
    items: ["chocolate", "drink"]
  },
  {
    id: 2,
    matches: 14,
    items: ["chocolate", "drink"]
  },
  {
    id: 3,
    matches: 16,
    items: ["chocolate", "drink"]
  },
  {
    id: 4,
    matches: 18,
    items: ["chocolate", "drink"]
  },
  {
    id: 5,
    matches: 20,
    items: ["chocolate", "drink"]
  },

  // ======================
  // LEVELS 6–10
  // Add: chips
  // Difficulty jump via variety
  // ======================
  {
    id: 6,
    matches: 24,
    items: ["chocolate", "drink", "chips"]
  },
  {
    id: 7,
    matches: 26,
    items: ["chocolate", "drink", "chips"]
  },
  {
    id: 8,
    matches: 28,
    items: ["chocolate", "drink", "chips"]
  },
  {
    id: 9,
    matches: 30,
    items: ["chocolate", "drink", "chips"]
  },
  {
    id: 10,
    matches: 32,
    items: ["chocolate", "drink", "chips"]
  },

  // ======================
  // LEVELS 11–15
  // Add: can
  // Real match-3 difficulty
  // ======================
  {
    id: 11,
    matches: 36,
    items: ["chocolate", "drink", "chips", "can"]
  },
  {
    id: 12,
    matches: 38,
    items: ["chocolate", "drink", "chips", "can"]
  },
  {
    id: 13,
    matches: 40,
    items: ["chocolate", "drink", "chips", "can"]
  },
  {
    id: 14,
    matches: 42,
    items: ["chocolate", "drink", "chips", "can"]
  },
  {
    id: 15,
    matches: 44,
    items: ["chocolate", "drink", "chips", "can"]
  },

  // ======================
  // LEVELS 16–20
  // Add: bar (full set)
  // End of first world
  // ======================
  {
    id: 16,
    matches: 48,
    items: ["chocolate", "drink", "chips", "can", "bar"]
  },
  {
    id: 17,
    matches: 50,
    items: ["chocolate", "drink", "chips", "can", "bar"]
  },
  {
    id: 18,
    matches: 52,
    items: ["chocolate", "drink", "chips", "can", "bar"]
  },
  {
    id: 19,
    matches: 54,
    items: ["chocolate", "drink", "chips", "can", "bar"]
  },
  {
    id: 20,
    matches: 56,
    items: ["chocolate", "drink", "chips", "can", "bar"]
  }
];
