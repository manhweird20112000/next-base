import { ITodo, TodoService } from "@/services/todo";

const getDetailTodo = async (todoId: number) => {
  const todoService = new TodoService();

  const todo: ITodo = await todoService.getDetailTodo(todoId);
  return todo;
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;

  const todo: ITodo = await getDetailTodo(Number(id));

  return {
    title: todo.title,
  };
}

export default async function Page({ params }: PageProps) {
  const todo = await getDetailTodo(Number((await params).id));
  return <>Product detail {todo.title}</>;
}
