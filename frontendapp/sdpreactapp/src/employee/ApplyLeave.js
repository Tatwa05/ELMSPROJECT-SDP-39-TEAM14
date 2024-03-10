const styles = {
    container: {
      marginTop: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '15px', // Increased spacing between form groups
    },
    label: {
      marginRight: '10px',
      width: '150px',
      fontSize: '18px', // Increased font size for labels
      fontWeight: '600', // Semi-bold
    },
    input: {
      flex: '1',
      width: '100%',
      padding: '15px', // Increased padding for inputs
      borderRadius: '15px',
      boxSizing: 'border-box',
      fontSize: '18px', // Increased font size for inputs
    },
    button: {
      backgroundColor: '#008000',
      color: 'white',
      border: 'none',
      borderRadius: '15px',
      padding: '12px 16px', // Adjusted padding for the button
      fontSize: '16px',
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '26px',
      textAlign: 'center',
      width: '15%',
    },
  };
  
  export default function ApplyLeave() {
    return (
      <div style={styles.container}>
        <table style={styles.table}>
          <tbody>
            <tr style={styles.formGroup}>
              <td style={styles.label}>Select Leave type:</td>
              <td>
                <input
                  type="text"
                  id="leavetype"
                  style={styles.input}
                  required
                  placeholder="Leave type"
                />
              </td>
            </tr>
            <br></br>
  
            <tr style={styles.formGroup}>
              <td style={styles.label}>From Date:</td>
              <td>
                <input
                  type="date"
                  id="date"
                  style={styles.input}
                  required
                />
              </td>
            </tr>
            <br></br>
  
            <tr style={styles.formGroup}>
              <td style={styles.label}>To Date:</td>
              <td>
                <input
                  type="date"
                  id="date"
                  style={styles.input}
                  required
                />
              </td>
            </tr>
            <br></br>
  
  
            <tr style={styles.formGroup}>
              <td style={styles.label}>Reason:</td>
              <td>
                <input
                  type="text"
                  id="reason"
                  style={styles.input}
                  required
                  placeholder="Reason"
                />
              </td>
            </tr>
          </tbody>
        </table>
  <br></br>
  {/* <br></br> */}
  <br></br>
  
        <button type="submit" style={styles.button} className="button">
          Apply Leave
        </button>
      </div>
    );
  }
  