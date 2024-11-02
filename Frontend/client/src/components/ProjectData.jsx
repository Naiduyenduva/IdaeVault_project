import { useState } from "react";

function ProjectData() {

    const initialFormData = {
        title: '',
        description: '',
        techStack: '',
        keyFeatures: ''
      };

      const [formData, setFormData] = useState(initialFormData);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value 
      });
    };  

    const handleSubmit = async (e) => {
      e.preventDefault(); 
      try {
        const token = localStorage.getItem('token'); // Adjust if using cookies or other storage
        const response = await fetch('https://idaevault.onrender.com/idea', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token': token
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          alert('idea added successfully')
          setFormData(initialFormData);
        } else {
          console.log("Failed to add idea");
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
  
    return (
        <div className="project-data">
          <h1 className="s-title">Post your project idea</h1>
          <form onSubmit={handleSubmit}>
            <label>Title</label><br/>
            <input 
              type="text" 
              name="title" 
              required={true}
              value={formData.title}
              onChange={handleChange}
            /><br/>

            <label>description</label><br/>
            <input 
              type="text" 
              name="description" 
              required={true}
              value={formData.description}
              onChange={handleChange}
              /><br/>
    
            <label>techstack</label><br/>
            <input 
              type="text" 
              name="techStack" 
              required={true}
              value={formData.techStack}
              onChange={handleChange}
            /><br/>
    
    
              <label>Features</label><br/>
              <input 
                type="text" 
                name="keyFeatures"
                required={true} 
                value={formData.keyFeatures}
                onChange={handleChange}
                /><br/>
            <button type="submit">Add</button>
          </form>
        </div>
    );
  }
  
  export default ProjectData;