import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

const YourFormComponent = () => {
  const [items, setItems] = useState([]); // Placeholder for your API response

  // Simulate API call on component mount
  useEffect(() => {
    // API call
    const fetchItems = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const formik = useFormik({
    initialValues: {
      applied_to: 'some',
      applicable_items: [],
    },
    onSubmit: async (values) => {
      try {
        // backend code
        console.log('applied_to:', values.applied_to);
        console.log('applicable_items:', values.applicable_items);

        // Simulate API call for applying to items
        const response = await fetch('your-apply-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const result = await response.json();
        console.log('Apply to items result:', result);
      } catch (error) {
        console.error('Error applying to items:', error);
      }
    },
  });

  return (
    <div style={{ textAlign: 'left', margin: '10% 20%' }}>
      {/* Heading */}
      <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Add Tax</span>
        <span style={{ fontSize: '16px' }}>X</span>
      </h1>

      {/* Text portions */}

      <div style={{ display: 'flex', margin: '10px', }}>
        <div style={{ margin: '10px 10px 10px 0' }}>
          <input type="text" id="text" name="text" style={{ padding: "6px" }} />
        </div>
        <div style={{ margin: '10px 0' }}>
          <input type="symbel" id="symbel" name="symbel" style={{ padding: "6px" }} />
        </div>
      </div>



      {/* Radio buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '10px 0' }}>

        <label>
          <input type="radio" name="applyType" value="all" />
          Apply to all items in collection
        </label>
        <label>
          <input type="radio" name="applyType" value="specific" />
          Apply to specific items
        </label>
      </div>




      {/* Line break */}
      <hr style={{ margin: '20px 0' }} />

      {/* Search bar */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <input type="text" placeholder="Search items" style={{ marginBottom: '10px', padding: '6px', paddingLeft: '30px', position: 'relative', boxSizing: 'border-box' }} />
        <img src="https://www.svgrepo.com/show/7109/search.svg" alt="Search" style={{ position: 'absolute', left: '5px', top: '40%', transform: 'translateY(-50%)', cursor: 'pointer', width: '15px', height: '15px' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>

        {/*Check boxes*/}
        <label style={{ backgroundColor: "gray" }}>
          <input type="checkbox" value="Bracelets" />
          Bracelets
        </label>
        <label>
          <input type="checkbox" value="Jasinthe Bracelet" />
          Jasinthe Bracelet
        </label>
        <label>
          <input type="checkbox" value="Jasinthe Bracelet" />
          Jasinthe Bracelet
        </label>
        <label>
          <input type="checkbox" value="Inspire Bracelet" />
          Inspire Bracelet
        </label>
        <label style={{ backgroundColor: "GrayText" }}>
          <input type="checkbox" value="null" />

        </label>
        <label>
          <input type="checkbox" value="Zero amount item with question" />
          Zero amount item with question
        </label>
        <label>
          <input type="checkbox" value="Normal item with questions" />
          Normal item with questions
        </label>
        <label>
          <input type="checkbox" value="normal item" />
          normal item
        </label>
      </div>

      {/* Checkboxes */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        {items.map((item) => (
          <label key={item.id} style={{ backgroundColor: formik.values.applicable_items.includes(item.id) ? 'brown' : 'transparent', padding: '5px', margin: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              value={item.id}
              checked={formik.values.applicable_items.includes(item.id)}
              onChange={formik.handleChange}
              style={{ marginRight: '5px' }}
            />
            {item.name}
          </label>
        ))}
      </div>

      {/* Line break */}
      <hr style={{ margin: '20px 0' }} />

      {/* Apply tax text */}
      <div style={{ backgroundColor: 'orange', padding: '10px', color: 'white', float: 'right' }}>
        Apply tax to 6 item(s)
      </div>
    </div>
  );
};

export default YourFormComponent;

