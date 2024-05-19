export const validateForm = (categoryId, name, price, discount) => {
    const errors = {};
  
    // Yoxlama üçün tələb olunan sahələrin doldurulub-doldurulmadığını yoxlayır
    !categoryId && (errors.categoryId = "Category is required");
    !name && (errors.name = "Name is required");
    !price && (errors.price = "Price is required");
  
    // Əgər discount daxil edilibsə, onun rəqəm olub-olmadığını və ya müvafiq formatda olub-olmadığını yoxlayır
    if (discount && (isNaN(discount) || discount <= 0)) {
      errors.discount = "Discount must be a positive number";
    }
  
    // Əgər rəqəm formatında Price daxil edilibsə, onun rəqəm olub-olmadığını yoxlayır
    if (isNaN(price) || price <= 0) {
      errors.price = "Price must be a positive number";
    }
  
    // Əgər əvvəlcədən error varsa, onları göstərir
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return false; // Əgər səhvlər varsa, forma göndərilməsinin qarşısını alır
    }
  
    // Əgər yoxlama səhvsiz keçibsə, forma göndərilə bilər
    return true;
  };
  