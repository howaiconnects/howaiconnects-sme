import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building, MapPin } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const LinkedInProfile = () => {
  const { userProfile } = useAuth();

  if (!userProfile || userProfile.provider !== 'linkedin_oidc') {
    return null;
  }

  const hasLinkedInData = userProfile.linkedin_id || userProfile.linkedin_profile_url;

  if (!hasLinkedInData) {
    return null;
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#0077b5]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Profile Header */}
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={userProfile.avatar_url || undefined} alt={userProfile.full_name || 'Profile'} />
            <AvatarFallback>
              {userProfile.full_name?.split(' ').map(n => n[0]).join('') || 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-semibold">{userProfile.full_name}</h3>
            {userProfile.linkedin_headline && (
              <p className="text-muted-foreground">{userProfile.linkedin_headline}</p>
            )}
            {userProfile.linkedin_company && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Building className="h-4 w-4" />
                {userProfile.linkedin_company}
                {userProfile.linkedin_position && ` • ${userProfile.linkedin_position}`}
              </div>
            )}
          </div>
          {userProfile.linkedin_profile_url && (
            <Button variant="outline" size="sm" asChild>
              <a 
                href={userProfile.linkedin_profile_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View Profile
              </a>
            </Button>
          )}
        </div>

        {/* Professional Summary */}
        {userProfile.linkedin_summary && (
          <div className="space-y-2">
            <h4 className="font-medium">About</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {userProfile.linkedin_summary}
            </p>
          </div>
        )}

        {/* Profile Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium">Contact Information</h4>
            <div className="space-y-1 text-sm">
              {userProfile.email && (
                <p><span className="font-medium">Email:</span> {userProfile.email}</p>
              )}
              {userProfile.linkedin_id && (
                <p><span className="font-medium">LinkedIn ID:</span> {userProfile.linkedin_id}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Account Details</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">
                  {userProfile.provider === 'linkedin_oidc' ? 'LinkedIn' : userProfile.provider}
                </Badge>
                <span className="text-muted-foreground">Sign-in method</span>
              </div>
              <p><span className="font-medium">Role:</span> {userProfile.role}</p>
              <p><span className="font-medium">Member since:</span> {new Date(userProfile.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInProfile;