/**
 * Vending machine background skins
 * Files must exist in: public/machines/
 *
 * Naming convention:
 * machine_1.png
 * machine_2.png
 * machine_3.png
 * ...
 */

export const machineSkins = [
  "/machines/machine_1.png",
  "/machines/machine_2.png",
  "/machines/machine_3.png",
  "/machines/machine_4.png"
];

/**
 * Returns the machine skin for a given level number
 * Changes skin every 5 levels
 */
export function getMachineSkin(levelNumber) {
  const index =
    Math.floor((levelNumber - 1) / 5) % machineSkins.length;

  return machineSkins[index];
}
