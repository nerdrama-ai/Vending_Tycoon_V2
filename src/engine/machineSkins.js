export const machineSkins = [
  "/machines/machine_1.png",
  "/machines/machine_2.png",
  "/machines/machine_3.png"
];

export function getMachineSkin(level) {
  return machineSkins[Math.floor((level - 1) / 5) % machineSkins.length];
}
