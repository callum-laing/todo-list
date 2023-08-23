Notes below for creating the project object/class and the task object/class.

From what I'm seeing, it's suggested that you might have a Project:

class Project {
name,
tasks
}

and, within that, you might need to add things to that Projects list of tasks. What gets added? A Task object, might look like:

class Task {
name,
description,
dueDate,
isComplete
}

Or something similar. So you need to take the input from a form, when the add todo is clicked, build an instance of that Task object, and then add it to a particular project's array of task.
