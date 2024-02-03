import { FC, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
interface OAuthButtonsProps { }

const oauthProviders = [
  { name: "Google", strategy: "google", icon: "/icons/google-logo.svg" },
  { name: "Auth0", strategy: "auth0", icon: "/icons/auth0-icon.svg" },
] satisfies {
  name: string;
  icon: string;
  strategy: string;
}[];

const OAuthButtons: FC<OAuthButtonsProps> = ({ }) => {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  async function oauthSignIn(provider: string) {
    try {
      setIsLoading(provider);
      signIn(provider);
    } catch (error) {
      setIsLoading(null);
      console.log(error);
      const unknownError = "Something went wrong, please try again.";
      toast.error(unknownError);
    }
  }
  return (
    <>
      {oauthProviders.map((provider) => (
        <Button
          key={provider.name}
          variant="outline"
          onClick={() => void oauthSignIn(provider.strategy)}
          aria-label={`Sign in with ${provider.name}`}
          disabled={isLoading === provider.strategy}
        >
          {isLoading === provider.strategy && (
            <Loader2 className="w-4 h-4 animate-spin mr-3" />
          )}
          {!isLoading && (
            <Image
              width={30}
              height={30}
              src={`${provider.icon}`}
              alt={provider.name}
              className="mr-2"
            />
          )}
          Continue with {provider.name}
        </Button>
      ))}
    </>
  );
};

export default OAuthButtons;
