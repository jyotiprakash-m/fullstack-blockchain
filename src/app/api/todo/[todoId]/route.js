import { NextResponse } from "next/server";

export async function PUT(request, context) {
  return NextResponse.json(
    {
      error: `Called Put ${context.params.todoId}`,
      todoId: context.params.todoId,
    },
    { status: 200 }
  );
}

export async function DELETE(request, context) {
  return NextResponse.json(
    {
      error: `Called Put ${context.params.todoId}`,
      todoId: context.params.todoId,
    },
    { status: 200 }
  );
}
