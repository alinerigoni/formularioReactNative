// ↓ ↓ ↓ "vg" = "VARIÁVEIS GLOBAIS" ↓ ↓ ↓
export const vg = {
    // CORES ==================================
    BLUE_GHOST: '#F7F7FD',
    BLUE_10: '#D5D7F6',
    BLUE_25: '#959CE9',
    BLUE_40: '#5661DC',
    BLUE_55: '#2734BE',
    BLUE_70: '#1A237E',
    BLUE_85: '#0D113F',
    ORANGE_GHOST: '#FFFCF4',
    ORANGE_10: '#FFEDCC',
    ORANGE_20: '#FEDB9A',
    ORANGE_30: '#FEC967',
    ORANGE_40: '#FEB734',
    ORANGE_50: '#FEA501',
    ORANGE_60: '#CB8401',
    ORANGE_70: '#986301',
    ORANGE_80: '#654201',
    ORANGE_90: '#332100',
    YELLOW_10: '#F6A201',
    GRAY_GHOST: '#FAFAFA',
    GRAY_10: '#E6E6E6',
    GRAY_20: '#CCCCCC',
    GRAY_30: '#B3B3B3',
    GRAY_40: '#999999',
    GRAY_50: '#808080',
    GRAY_60: '#666666',
    GRAY_70: '#4D4D4D',
    GRAY_80: '#333333',
    ERROR: 'crimson',
    WHITE: '#ffffff',

    // TIPOGRAFIA =============================
    // São três categorias de variável de texto:
    // *fontFamily* [opções: FONT e BOLD] (FONT = 'Roboto-Regular' e BOLD= 'Roboto-Bold')
    // *fontSize*   [opções: FONT_MICRO, FONT_SMALL, FONT_MEDIUM, FONT_LARGE, FONT_XLARGE, FONT_XXLARGE]
    // *lineHeight* [opções:   LH_MICRO,   LH_SMALL,   LH_MEDIUM,   LH_LARGE,   LH_XLARGE,   LH_XXLARGE]

    // Para padronizar, busque combinar *fontSize* com o *lineHeight* compatível.
    // Exemplo :
    //
    // const styles = StyleSheet.create({
    //   Header: {
    //     fontFamily: vg.BOLD,
    //     fontSize: vg.FONT_XXLARGE,
    //     lineHeight: vg.LH_XXLARGE,
    //   },
    // });

    // fontFamily:
    FONT: 'Roboto-Regular',
    BOLD: 'Roboto-Bold',

    // fontSize:
    FONT_MICRO: 10,
    FONT_SMALL: 12,
    FONT_MEDIUM: 14,
    FONT_LARGE: 16,
    FONT_XLARGE: 24,
    FONT_XXLARGE: 32,

    // lineHeight padronizada, usando
    // as mesmas medidas de fontSize:
    LH_MICRO: 10 + 10 / 3,
    LH_SMALL: 12 + 12 / 3,
    LH_MEDIUM: 14 + 14 / 3,
    LH_LARGE: 16 + 16 / 3,
    LH_XLARGE: 24 + 24 / 3,
    LH_XXLARGE: 32 + 32 / 3,

    // MARGINS & PADDINGS ===========================

    // eslint-disable-next-line prettier/prettier
    handleMargin: value => {
        switch (value) {
            case 'neg':
                return '-16px';
            case 0:
                return '0px';
            case 1:
                return '8px';
            case 2:
                return '16px';
            case 3:
                return '24px';
            case 4:
                return '32px';
            case 5:
                return '40px';
            default:
                return '0px';
        }
        // eslint-disable-next-line prettier/prettier
    },
};
