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
  function handleStartAddingProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  let content;

  if (projectState.selectedProjectId===null){
    content = <NewProject></NewProject>
  }
  else if (projectState.selectedProjectId===undefined){
    content = <NoProjectSelected onStartAddingProject={handleStartAddingProject}></NoProjectSelected>
  }

  return (
    <>
    <main className="h-screen my-8 flex gap-8"> 
      <ProjectSidebar onStartAddingProject={handleStartAddingProject}></ProjectSidebar>
      {content}
    </main>
    </>
  );
}

export default App;
