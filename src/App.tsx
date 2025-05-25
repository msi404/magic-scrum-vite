import { Container } from '@/shared/ui/container'
import { Card, CardContent } from '@/shared/ui/card'
import { TaskBoard } from '@/shared/ui/task-board'

import './App.css'

function App() {

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
    <div className="container mx-auto px-4 py-4 flex items-center gap-3">
      <span className="text-3xl">🪄</span>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Magic Scrum
      </h3>
    </div>
  </header>
    <Container>
    <Card className="space-y-4 overflow-hidden w-[1130px] mx-auto max-w-full shadow-xl border">
      <CardContent>
        <TaskBoard />
      </CardContent>
    </Card>
      </Container>
      </>
  )
}

export default App
