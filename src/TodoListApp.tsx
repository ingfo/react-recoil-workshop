import { Box, Container, Heading } from "@chakra-ui/react"
import TodoList from "./components/TodoList";

function TodoListApp() {

  return (
    <Container maxW="container.lg">
      <Box p={5} shadow="md" borderWidth="1px" mt={8}>
        <Heading as="h1" size="lg">Recoil eksempel</Heading>
        <Heading as="h2" size="md">Lær recoil med en enkel todo liste app!</Heading>
        <TodoList />
      </Box>
    </Container>
  );
}

export default TodoListApp
