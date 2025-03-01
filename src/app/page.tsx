import { ModeToggle } from "@/components/mode-toggle";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-96">
      <Button>hello sadik</Button>
      <ModeToggle />
      </div>
      <Footer />
    </div>
  );
}
