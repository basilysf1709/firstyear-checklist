import React from 'react';

const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.754-1.334-1.754-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.604-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const GitHubSupport = () => {
  return (
    <div className="w-full bg-gray-200 mx-auto text-center p-6 border border-gray-200 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-2">Support Our Project</h2>
      <p className="text-gray-600 mb-4">
        If you appreciate our work, give us a star on GitHub and consider contributing!
      </p>
      <a 
        href="https://github.com/your-username/your-repo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800"
      >
        <GitHubIcon />
        <span className="ml-2">Star on GitHub</span>
      </a>
    </div>
  );
};

export default GitHubSupport;
