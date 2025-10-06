export default class ImportIcon {
  async changeIcon(imgContainer, weatherInfo) {
    try {
      const iconModule = await import(`../icon/${weatherInfo.icon}.png`);
      imgContainer.src = iconModule.default;
    } catch (err) {
      console.error("Icon not found:", err);
      imgContainer.alt = "Icon not available";
    }
  }
}
