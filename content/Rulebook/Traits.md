# Model & Weapon Traits
## A

- [[Adept]]
- [[Aggressive]]
- [[Agile]]
- [[Aloof]]
- [[Ammo]]
- [[Armour]]
- [[Assassin]]
- [[Aware]]
## B
- [[Banzai!]]
- [[Bear Stands Alone]]
- [[Believer]]
- [[Bleed]]
- [[Blood of Orochi]]
- [[Bodyguard]]
- [[Booted]]
- [[Bravery]]
- [[Brutal]]
## C
- [[Camouflage]]
- [[Cavalry]]
- [[Channel]]
- [[Chain Weapon]]
- [[Charging Bonus]]
- [[Cloudwalk]]
- [[Command]]
- [[Construct]]
- [[Co-ordinated Attack]]
- [[Cowardly]]
- [[Courage]]
- [[Cultist]]
## D
- [[Defensive]]
- [[Disguise]]
- [[Disease]]
- [[Disturb Flow]]
- [[Dodge]]
- [[Dread]]
- [[Durable]]
## E-F
- [[Endurance]]
- [[Entangling]]
- [[Evasive]]
- [[Fear]]
- [[Fearless]]
- [[Feint]]
- [[Fire]]
- [[Flank]]
- [[Fortune]]
## G-I
- [[Group]]
- [[Hatred]]
- [[Heal]]
- [[Huge]]
- [[Immune]]
- [[Immovable]]
- [[Impenetrable Defence]]
- [Impetuous](Rulebook/traits/Impetuous)
- [[Indomitable]]
- [[Insignificant]]
- [[Intangible]]
- [[Intimidate]]
## J-L
- [[Jump Up]]
- [[Kami]]
- [[Kata]]
- [[Ki Block]]
- [[Last Stand]]
- [[Leadership]]
- [[Leech]]
- [[Lightweight]]
- [[Lightfooted]]
- [[Lightning Reflexes]]
## M-P
- [[Mantra]]
- [[Mettle]]
- [[Oni Rage]]
- [[Order]]
- [[Overwhelm]]
- [[Pack]]
- [[Parry]]
- [[Pierce]]
- [[Poison]]
- [[Protected]]
- [[Prowess]]
## R
- [[Ranged Defence]]
- [[Rapid Fire]]
- [[Reach]]
- [[Regenerate]]
- [[Reload]]
- [[Resistance]]
- [[Rise]]
## S
- [[Sacrifice]]
- [[Scout]]
- [[Sharp]]
- [[Sixth Sense]]
- [[Slow]]
- [[Soulless]]
- [[Spirit]]
- [[Split Attack]]
- [[Steadfast]]
- [[Strategy]]
- [[Strong]]
- [[Stupid]]
- [[Swarm]]
## T-Z
- [[Tactician]]
- [[Terror]]
- [[Tiny]]
- [[Tireless]]
- [[Tough]]
- [[Unblockable]]
- [[Unstable]]
- [[Vengeance]]
- [[Virtue]]
- [[Weak]]
- [[Willpower]]

# Terrain Traits

Difficult
Can be moved through but each inch counts as 2 inches moved for any movement whilst within the Terrain element for models making a Walk, Melee, Run, or Charge.
If Enhancing terrain has a sheer drop, this is usually Difficult terrain.
Being pushed, Slammed or Thrown from Huge Enhancing terrain leaves a model Prone, and after any Damage Roll, the Damage is not halved.

"action-walk", "action-melee", "action-run", "action-charge", "terrain-passage", "state-prone", "trait-terrain_enhancing", "trait-terrain_Difficult", "concept-damage"
"revision": 1

Destructible
A model in base contact with this terrain and not in an Enemy ZoC can declare a Wait action and spend 2Ki to remove it from the table.

"concept-zoc", "concept-enemy", "action-wait"
"revision": 0

Impassable
Cannot be moved through.

"terrain-passage"
"revision": 0

Normal
No effect on movement.

"terrain-passage"
"revision": 0

Ideal
While making a Walk, Run or Charge, if a model crosses Ideal Terrain at any point then it can add an extra 2” to its total move distance.

"terrain-passage"
"revision": 0

Clear
No effect on LoS.

"terrain-visibility", "concept-los"
"revision": 0

Blocking
No LoS can be drawn through any part of the Terrain element that is considered Blocking.
If any Los is blocked to the target by Blocking terrain (Assuming there is a clear LoS past the terrain) then the target benefits from Cover if it is within 1” of the terrain piece.

"terrain-visibility", "concept-cover", "concept-los"
"revision": 0

Obscuring
If any Line of Sight to any part of a target’s base is drawn through Obscuring terrain, then the target benefits from cover if it is within 1” of the terrain piece.

"terrain-visibility", "concept-cover", "concept-los"
"revision": 0

Enhancing
Models on hilly terrain or otherwise elevated gain Reach on their Melee Weapons for melee exchanges where a non-Cloudwalk opponent did not begin its activation on the same terrain as they hold the high ground.
In addition, they ignore models and terrain smaller than the Enhancing terrain for LoS (Though such terrain can still provide cover if a LoS passes through them).

"trait-reach","trait-cloudwalk", "concept-los", "melee_exchange"
"revision": 0