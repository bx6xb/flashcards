import { Button } from './components/ui/button'
import { Dropdown } from './components/ui/dropdown'
import { Input } from './components/ui/input'

export function App() {
  return (
    <div>
      <Button as="a" variant="primary">
        Hello
      </Button>
      <Button variant="primary">Hello</Button>
      <Input type="password" icon={{ iconId: 'eye', side: 'right' }} />
      <div style={{ padding: '20px 0 0 200px' }}>
        <Dropdown />
      </div>
    </div>
  )
}
