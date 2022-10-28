import style from '../styles/UploadModal.module.css'


const UploadModal = ({
  description: title,
  musicUrl,
  newMusic,
  setTitle,
  setMusicUrl,
  setShowUploadMusic,
}) => {
  
  const createNewClicked = () => {
    newMusic()
  }

  return (
    <div className={style.wrapper}>
      <div className={style.modalTitle}>Upload Music</div>

      <div className={style.inputField}>
        <div className={style.inputTitle}>Title</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Music Url</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type='text'
            value={musicUrl}
            onChange={e => setMusicUrl(e.target.value)}
          />
        </div>
      </div>
      <div className={style.modalButtons}>
        <button
          onClick={() => setShowUploadMusic(false)}
          className={`${style.button} ${style.cancelButton}`}
        >
          Cancel
        </button>
        <button
          onClick={createNewClicked}
          className={`${style.button} ${style.createButton}`}
        >
          Create New
        </button>
      </div>
    </div>
  )
}

export default UploadModal
