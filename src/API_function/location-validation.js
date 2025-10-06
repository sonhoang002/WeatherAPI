export default class LocationValidation {
  validation(location, errorField, formContainer) {
    if (location.validity.valueMissing) {
      formContainer.classList.add("error");
      errorField.textContent = "Missing Location!";
      return true;
    } else {
      formContainer.classList.remove("error");
      errorField.textContent = "";
      return false;
    }
  }
}
