import React from 'react'
import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-4 border-t border-gray-300 dark:border-gray-700">
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/ravix2001"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ravipandit2001"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <div className="container-custom mt-2">
          <div className="text-center">
            <p className="text-gray-600 dark:text-white">
              © 2025 Ravi Pandit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
