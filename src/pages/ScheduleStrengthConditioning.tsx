import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ScheduleStrengthConditioning = () => {
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
              Schedule Strength & Conditioning
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In tennis, you can only go as far as your fitness takes you. Let's build your foundation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Tell me about your fitness goals
                </h2>
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src="[STRENGTH_CONDITIONING_FORM_URL]"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-lg border border-border"
                  >
                    Loading form...
                  </iframe>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Select your time
                </h2>
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src="[STRENGTH_CONDITIONING_CALENDAR_URL]"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="rounded-lg border border-border"
                  >
                    Loading calendar...
                  </iframe>
                </div>
              </div>
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

export default ScheduleStrengthConditioning;