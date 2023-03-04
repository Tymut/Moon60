#pragma once

#include "config_common.h"

/* key matrix size */
// Rows are doubled-up
#define MATRIX_ROWS  10
#define MATRIX_COLS  6
#define MATRIX_ROW_PINS \
    { D4, C6, D7, E6, B4 }  // Left to right
    
// wiring of each half  
#define MATRIX_COL_PINS \
    { F4, F5, F6, F7, B1, B3 }  // Up to down

#define DIODE_DIRECTION COL2ROW
#define DEBOUNCE 5

#define USB_SUSPEND_WAKEUP_DELAY 0

#define LOCKING_SUPPORT_ENABLE

#define USE_SERIAL
#define SOFT_SERIAL_PIN D2

#define MASTER_RIGHT

#define SPLIT_TRANSPORT_MIRROR

