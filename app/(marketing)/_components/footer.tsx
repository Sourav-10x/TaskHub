import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div
      className="fixed bottom-0 w-full h-14 px-4 border-t shadow-sm bg-white flex items-center"
      data-testid="footer_wrapper"
    >
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 flex items-center">
          <Button size="sm" variant="ghost" data-testid="footer_policy_button">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost" data-testid="footer_terms_button">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
