import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectsSidebar";

// my-8 is margin 2 rem
function App() {
  const [projectState, setProjectState] = useState(
    {
      selectedProjectId: undefined,
      projects: []
    }
  )

  // selectedProjectId: null null means we are adding a new project, undefined means we are doing nothing
  // ...prevState by spreading we are getting all the existing key-value pairs
  // we connect two components: NewProject and NoProjectSelected using handleStartAddingProject() function
  // here we are managing all projects thats where we want to add this new project
  function handleStartAddingProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  // projects: [...prevState.projects, ] we are adding newProject with existing projects in an array
  function handleAddProject(projectData){
      setProjectState(prevState => {
        const newProject ={
          ...projectData,
          id: Math.random()
        }
        return {
          ...prevState,
          selectedProjectId: undefined,
          // to display NoProjectSelected component, we got to set 'selectedProjectId' back to 'undefined'
          projects: [...prevState.projects, newProject],
        }
      })
  }

      // set it back to undefined so cancel will take back to 'NoProjectSelected'
  function handleCancelAddProject(){
          setProjectState(prevState => {
              return {
                ...prevState,
                selectedProjectId: undefined,
              }
            })      
      }
  

//  console.log(projectState)

  let content;

  if (projectState.selectedProjectId===null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}></NewProject>
  }
  else if (projectState.selectedProjectId===undefined){
    content = <NoProjectSelected onStartAddingProject={handleStartAddingProject}></NoProjectSelected>
  }

  return (
    <>
    <main className="h-screen my-8 flex gap-8"> 
      <ProjectSidebar 
          onStartAddingProject={handleStartAddingProject} 
          projects={projectState.projects}></ProjectSidebar>
      {content}
    </main>
    </>
  );
}

export default App;
