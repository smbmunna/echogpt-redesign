interface GreetingsProps{
    userName: string; 
}


export default function Greetings({userName}: GreetingsProps) {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
        {userName
          ? `How can I help you, ${userName}?`
          : "How can I help you today?"}
      </h1>
      <p className="text-sm text-[var(--muted)] max-w-md mx-auto">
        Ask a question, analyze code, upload documents, or explore ideas to
        kickstart your workflow.
      </p>
    </div>
  );
}
