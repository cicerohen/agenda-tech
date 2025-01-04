import { CalendarIcon } from "@radix-ui/react-icons";

export function Header() {
  return (
    <header className="bg-primary px-4 h-20">
      <div className="lg:container lg:mx-auto h-20 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <CalendarIcon className="h-10 w-10 text-primary-foreground opacity-40" />
          <div>
            <h1 className="text-primary-foreground font-bold flex items-center">
              <span>Agenda Tech</span>
            </h1>
            <p className="text-xs text-primary-foreground">
              Portal de eventos de tecnologia
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* <a href="#" className="text-primary-foreground">
            <InstagramLogoIcon className="h-8 w-8 " />
          </a> */}
        </div>
      </div>
    </header>
  );
}
