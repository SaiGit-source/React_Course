import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

// my-8 is margin 2 rem
function App() {
  const [projectState, setProjectState] = useState(
    {
      selectedProjectId: undefined,
      projects: [],
      tasks: []
    }
  )

  function handleAddTask(taskText){
    setProjectState(prevState => {
      const taskId = Math.random()
      const newTask ={
        text: taskText,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      }
    })

  }

  // console.log(projectState)

  function handleDeleteTask(id){
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=>task.id!==id)
      }
    })      

  }

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

  // the idea here is to we are setting only the selectedProjectId to Id instead of null 
  // then this id could be matched in the next map() or for loop
  function handleSelectProject(id){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
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
// project.id!==prevState.selectedProjectId) i am keeping only the items that's not equal to ID to be set to delete  
  function handleDeleteProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: prevState.projects.filter((project)=>project.id!==prevState.selectedProjectId)
      }
    })      

  }
  // we are finding an element in an array by ID
  const selectedProject = projectState.projects.find(project => project.id===projectState.selectedProjectId )

  let content = <SelectedProject project={selectedProject}
                                 onDelete={handleDeleteProject}
                                 onAddTask={handleAddTask}
                                 onDeleteTask={handleDeleteTask}
                                 tasks={projectState.tasks}></SelectedProject>;

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
          projects={projectState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectState.selectedProjectId}>  
      </ProjectSidebar>
      {content}
    </main>
    </>
  );
}

export default App;
