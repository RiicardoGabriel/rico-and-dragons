export type EnergyType = 'mana' | 'stamina' | string;

interface Energy {
  type_: EnergyType;
  amount: number;
}

export default Energy;