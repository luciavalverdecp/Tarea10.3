document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("item");
  const addTaskButton = document.getElementById("agregar");
  const clearTasksButton = document.getElementById("limpiar");
  const taskList = document.getElementById("contenedor");

  function cargarItem() {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    taskList.innerHTML = "";

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      taskList.appendChild(li);
    });
  }

  function guardarItem(item) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
  }

  function borrarItems() {
    localStorage.removeItem("items");
    cargarItem();
  }

  addTaskButton.addEventListener("click", () => {
    const item = taskInput.value;
    if (item) {
      guardarItem(item);
      taskInput.value = "";
      cargarItem();
    }
  });

  clearTasksButton.addEventListener("click", () => {
    borrarItems();
  });

  cargarItem();
});
