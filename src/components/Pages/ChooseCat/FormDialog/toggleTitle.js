export const useToggleTitle = (open) => {
  const isDialogOpen = open === "addCat" || open === "editCat";
  let title =
    open === "addCat" ? "Добавление котика" : "Изменение информации о котике";
  let dialogContent =
    open !== "editCat"
      ? "Пожалуйста укажите всю информацию о вашем питомце"
      : "Обращаем ваше внимание, изменения в карточке котика отменить нельзя!";

  return { title, dialogContent, isDialogOpen };
};
