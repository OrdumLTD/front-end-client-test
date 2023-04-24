import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout(props) {
  return (
    <main className="flex flex-col h-screen ">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex">
            <Sidebar />
          </div>
          <div className="flex flex-1 flex-col">
            <Header />
            <div className="flex flex-1 overflow-y-auto overflow-hidden paragraph ">
              <div className="ml-8 md:ml-20">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
