```javascript
// in App.js
import { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';

function MyComponent() {
  const { data, isLoading } = useQuery({ queryKey: ['data'], queryFn: () => fetch('/api/data').then((res) => res.json()) });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MyComponent/>
    </Suspense>
  );
}
export default App; 
```