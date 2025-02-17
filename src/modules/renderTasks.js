import { activateButtons } from "./buttons";

const renderTasks = (tasks) => {
  const contentDiv = document.getElementById("mainContent");

  const taskListContainer = document.createElement("div");
  taskListContainer.classList.add("taskList-container");
  contentDiv.appendChild(taskListContainer);

  if (tasks.length > 0) {
    tasks.forEach((task) => {
      const taskContainer = document.createElement("div");
      taskContainer.setAttribute("id", task.id);
      taskContainer.classList.add("task-container");
      taskListContainer.appendChild(taskContainer);
      task.status === "done" ? taskContainer.classList.add("complete") : null;

      const taskCategory = document.createElement("div");
      taskCategory.classList.add("task-category");
      taskCategory.classList.add("hidden");
      taskCategory.textContent = task.category;
      taskContainer.appendChild(taskCategory);

      const titleWrapper = document.createElement("div");
      titleWrapper.classList.add("title-wrapper");
      taskContainer.appendChild(titleWrapper);

      const taskTitleHeading = document.createElement("div");
      taskTitleHeading.classList.add("task-title-heading");
      taskTitleHeading.textContent = "Title:";
      titleWrapper.appendChild(taskTitleHeading);

      const taskTitle = document.createElement("div");
      taskTitle.classList.add("task-title");
      taskTitle.textContent = task.title;
      titleWrapper.appendChild(taskTitle);

      if (task.description) {
        const descriptionWrapper = document.createElement("div");
        descriptionWrapper.classList.add("description-wrapper");
        descriptionWrapper.classList.add("hidden");
        taskContainer.appendChild(descriptionWrapper);

        const taskDescriptionHeading = document.createElement("div");
        taskDescriptionHeading.classList.add("task-description-heading");
        taskDescriptionHeading.textContent = "Description:";
        descriptionWrapper.appendChild(taskDescriptionHeading);

        const taskDescription = document.createElement("div");
        taskDescription.classList.add("task-description");
        taskDescription.textContent = task.description;
        descriptionWrapper.appendChild(taskDescription);
      }

      const dueDateWrapper = document.createElement("div");
      dueDateWrapper.classList.add("dueDate-wrapper");
      taskContainer.appendChild(dueDateWrapper);

      const dueDateHeading = document.createElement("div");
      dueDateHeading.classList.add("dueDateHeading");
      dueDateHeading.textContent = "Due:";
      dueDateWrapper.appendChild(dueDateHeading);

      const dueDate = document.createElement("div");
      dueDate.classList.add("dueDate");
      dueDate.textContent = task.dueDate;
      dueDateWrapper.appendChild(dueDate);

      const priorityWrapper = document.createElement("div");
      priorityWrapper.classList.add("priority-wrapper");
      priorityWrapper.classList.add("hidden");
      taskContainer.appendChild(priorityWrapper);

      const priorityHeading = document.createElement("div");
      priorityHeading.classList.add("priority-heading");
      priorityHeading.textContent = "Priority:";
      priorityWrapper.appendChild(priorityHeading);

      const priority = document.createElement("div");
      priority.classList.add("priority");
      priority.textContent = task.priority;
      if (task.priority === "high") {
        priority.classList.add("high-priority");
      } else if (task.priority === "medium") {
        priority.classList.add("medium-priority");
      } else {
        priority.classList.add("low-priority");
      }
      priorityWrapper.appendChild(priority);

      if (task.notes) {
        const notesWrapper = document.createElement("div");
        notesWrapper.classList.add("notes-wrapper");
        notesWrapper.classList.add("hidden");
        taskContainer.appendChild(notesWrapper);

        const notesHeading = document.createElement("div");
        notesHeading.classList.add("notes-heading");
        notesHeading.textContent = "Notes:";
        notesWrapper.appendChild(notesHeading);

        const notes = document.createElement("div");
        notes.classList.add("notes");
        notes.textContent = task.notes;
        notesWrapper.appendChild(notes);
      }

      const expandTask = document.createElement("div");
      expandTask.classList.add("expand-button");
      expandTask.textContent = "▼";
      taskContainer.appendChild(expandTask);

      const wrapper = document.createElement("div");
      wrapper.classList.add("task-options-wrapper");
      taskContainer.appendChild(wrapper);

      const marktCompleteBtn = document.createElement("div");
      marktCompleteBtn.classList.add("mark-complete-button");
      marktCompleteBtn.textContent = "done";
      wrapper.appendChild(marktCompleteBtn);

      const editBtn = document.createElement("div");
      editBtn.classList.add("edit-button");
      editBtn.textContent = "edit";
      wrapper.appendChild(editBtn);

      const deleteBtn = document.createElement("div");
      deleteBtn.classList.add("delete-button");
      deleteBtn.textContent = "remove";
      wrapper.appendChild(deleteBtn);
    });
  } else if (tasks.length <= 0) {
    const showPlaceholder = document.createElement("div");
    showPlaceholder.textContent = "nothing in this category...";
    taskListContainer.appendChild(showPlaceholder);
  }
  activateButtons();
};

export default renderTasks;
