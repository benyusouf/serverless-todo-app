import { TodoItem } from "../models/TodoItem";
import { ToDoRepository } from "../infrastructure/ToDoRepository";
import { parseUserId } from "../auth/utils";
import { CreateTodoRequest } from "../requests/CreateTodoRequest";
import { UpdateTodoRequest } from "../requests/UpdateTodoRequest";
import { TodoUpdate } from "../models/TodoUpdate";

const uuidv4 = require('uuid/v4');
const repo = new ToDoRepository();

export async function getToDos(jwtToken: string): Promise<TodoItem[]> {
    const userId = parseUserId(jwtToken);
    return repo.getToDos(userId);
}

export function createToDo(createTodoRequest: CreateTodoRequest, jwtToken: string): Promise<TodoItem> {
    const userId = parseUserId(jwtToken);
    return repo.createToDo({
        userId: userId,
        todoId: uuidv4(),
        createdAt: new Date().getTime().toString(),
        done: false,
        ...createTodoRequest,
    });
}

export function updateToDo(updateTodoRequest: UpdateTodoRequest, todoId: string, jwtToken: string): Promise<TodoUpdate> {
    const userId = parseUserId(jwtToken);
    return repo.updateToDo(updateTodoRequest, todoId, userId);
}

export function deleteToDo(todoId: string, jwtToken: string): Promise<string> {
    const userId = parseUserId(jwtToken);
    return repo.deleteToDo(todoId, userId);
}

export function getSignedUrl(todoId: string): Promise<string> {
    return repo.getSignedUrl(todoId);
}