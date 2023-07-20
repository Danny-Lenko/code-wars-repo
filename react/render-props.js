// Render props is a pattern in React that involves passing a function as a prop to a component, enabling the component to control what to render by invoking that function and passing data or functions back to the parent component. Render props promote component reusability and provide a flexible way to share behavior between components. Here are some common use cases for render props with examples:

// Conditional Rendering:
// Render props can be used to conditionally render content based on certain conditions or states. The parent component can control what to render by passing a render function that evaluates the conditions.

// Example:

// jsx

const ConditionalRenderer = ({ condition, render }) => {
  return <>{condition ? render() : null}</>;
};

// Usage of ConditionalRenderer:
<ConditionalRenderer
  condition={true}
  render={() => <p>Condition is true!</p>}
/>
// Data Fetching:
// Render props are useful for handling data fetching and async operations. The parent component can pass a function that initiates the data fetching, and the child component can handle loading states, errors, and render the fetched data.

// Example:

// jsx

const DataLoader = ({ fetchData, render }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [fetchData]);

  return render({ data, loading, error });
};

// Usage of DataLoader:
<DataLoader
  fetchData={() => fetch('https://api.example.com/data')}
  render={({ data, loading, error }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return <p>Data: {data}</p>;
  }}
/>
// Component Composition:
// Render props are often used for component composition, where one component enhances the behavior or appearance of another component by providing additional render capabilities.

// Example:

// jsx

const HoverEffect = ({ render }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {render(isHovered)}
    </div>
  );
};

// Usage of HoverEffect:
<HoverEffect
  render={(isHovered) =>
    isHovered ? <p>Hovered!</p> : <p>Not Hovered</p>
  }
/>
// Customization and Abstraction:
// Render props can be used to allow customization of a component's behavior without having to modify the component itself. This is useful when you want to provide different implementations for certain aspects of the component.

// Example:

// jsx

const ClickCounter = ({ onIncrement, count }) => {
  const handleClick = () => {
    onIncrement();
  };

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
};

// Usage of ClickCounter:
<ClickCounter
  count={5}
  onIncrement={() => console.log('Incremented!')}
/>
// These examples demonstrate how render props can be used to achieve various functionalities and behaviors in React components. Render props provide a powerful way to create flexible and reusable components by allowing the parent components to control what to render inside the child components.