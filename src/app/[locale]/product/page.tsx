import { ITodo, TodoService } from "@/services/todo";
import Link from "next/link";

export default async function Page() {
  const todoService = new TodoService();
  const todos: ITodo[] = await todoService.getTodos();
  return (
    <div>
      hehe
      <ul>
        {todos.map((item: ITodo) => (
          <li key={item.id}>
            <Link href={`/product/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
