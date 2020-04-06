import { StyleSheet } from 'react-native';
import { vg } from './styles/variables';

const type = StyleSheet.create({
    text: {
        fontFamily: vg.FONT,
        fontSize: vg.FONT_MEDIUM,
    },
    accent: {
        color: vg.ORANGE_50,
    },
    error: {
        color: vg.ERROR,
    },
});

const rNav = StyleSheet.create({
    navCard: {
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: vg.ORANGE_40,
        height: 48,
    },
    headerTitle: {
        fontFamily: vg.BOLD,
        fontSize: vg.FONT_LARGE,
    },
    screen: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 16,
        overflow: 'scroll',
    },
});

const styleTitle = StyleSheet.create({
    default: {
        fontFamily: vg.FONT,
        fontSize: vg.FONT_XLARGE,
        letterSpacing: 3,
    },
});

export { type, rNav, styleTitle };
