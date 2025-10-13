'use client'

import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import ReactPlayer from 'react-player'
import { FaTimes } from 'react-icons/fa'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  useEffect(() => {
    // Pour éviter l'erreur SSR avec react-modal
    Modal.setAppElement('body')
  }, [])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      closeTimeoutMS={300}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Fermer"
      >
        <FaTimes size={24} />
      </button>
      
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-full max-w-5xl aspect-video">
          <ReactPlayer
            url={videoUrl}
            playing
            controls
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload'
                }
              }
            }}
          />
        </div>
      </div>

      <style jsx global>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 1200px;
          max-height: 90vh;
          outline: none;
        }

        .ReactModal__Overlay {
          opacity: 0;
          transition: opacity 300ms ease-in-out;
        }

        .ReactModal__Overlay--after-open {
          opacity: 1;
        }

        .ReactModal__Overlay--before-close {
          opacity: 0;
        }
      `}</style>
    </Modal>
  )
}
