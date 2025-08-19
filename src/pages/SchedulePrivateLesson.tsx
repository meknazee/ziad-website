import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SchedulePrivateLesson = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          back to home
        </Link>

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Schedule a Private Tennis Lesson
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to take your game to the next level? Fill out the form below and select your preferred time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-[4/3] w-full">
              <iframe
                src="https://calendar.app.google/KJjySDZgFa6hVBiv7"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-lg border border-border"
              >
                Loading booking system...
              </iframe>
            </div>
          </div>

          <div className="text-center text-muted-foreground">
            <p>Questions? Feel free to reach out directly via the contact section.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePrivateLesson;