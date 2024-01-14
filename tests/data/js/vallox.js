/**
 * Small helper functions to the check if class exists
 */

(function ($) {
    $.fn.exists = function () {
        return this.length > 0 ? this : false;
    }
})(jQuery);


(function ($) {
    $.fn.isVisible = function () {

        var result = false;
        result = this.is(":visible");
        return result;

    }
})(jQuery);



/*

                   WARNING, DO NOT EDIT THIS !


                   This is auto generated code by script
                   Hurricane/hurricane/tools/create_limits.py


*/
/* CYCLONE_CONSTANTS */
var VlxDevConstants = VlxDevConstants || {};

/* g_cyclone_general_info */
VlxDevConstants.A_CYC_APPL_SW_VERSION =           1;
VlxDevConstants.A_CYC_APPL_SW_VERSION_1 =         2;
VlxDevConstants.A_CYC_APPL_SW_VERSION_2 =         3;
VlxDevConstants.A_CYC_APPL_SW_VERSION_3 =         4;
VlxDevConstants.A_CYC_APPL_SW_VERSION_4 =         5;
VlxDevConstants.A_CYC_APPL_SW_VERSION_5 =         6;
VlxDevConstants.A_CYC_APPL_SW_VERSION_6 =         7;
VlxDevConstants.A_CYC_APPL_SW_VERSION_7 =         8;
VlxDevConstants.A_CYC_APPL_SW_VERSION_8 =         9;
VlxDevConstants.A_CYC_APPL_SW_VERSION_9 =         10;
VlxDevConstants.A_CYC_BOOT_SW_VERSION =           11;
VlxDevConstants.A_CYC_APPL_SW_SIZE_0 =            12;
VlxDevConstants.A_CYC_APPL_SW_SIZE_1 =            13;
VlxDevConstants.A_CYC_SERIAL_NUMBER_MSW =         14;
VlxDevConstants.A_CYC_SERIAL_NUMBER_LSW =         15;
VlxDevConstants.A_CYC_MACHINE_TYPE =              16;
VlxDevConstants.A_CYC_MACHINE_MODEL =             17;
VlxDevConstants.A_CYC_MASTER_PASSWORD =           18;
VlxDevConstants.A_CYC_CONFIGURATION_MSW =         19;
VlxDevConstants.A_CYC_CONFIGURATION_LSW =         20;
VlxDevConstants.A_CYC_CONFIGURATION_NA_0 =        21;
VlxDevConstants.A_CYC_CONFIGURATION_NA_1 =        22;
VlxDevConstants.A_CYC_CONFIGURATION_NA_2 =        23;
VlxDevConstants.A_CYC_CONFIGURATION_NA_3 =        24;
VlxDevConstants.A_CYC_CONFIGURATION_CHECKSUM =    25;

/* g_typhoon_general_info */
VlxDevConstants.A_CYC_TYP_SERIAL_NUMBER_MSW =     257;
VlxDevConstants.A_CYC_TYP_SERIAL_NUMBER_LSW =     258;
VlxDevConstants.A_CYC_TYP_PANEL_MODEL =           259;
VlxDevConstants.A_CYC_TYP_APPL_SW_VERSION =       260;
VlxDevConstants.A_CYC_TYP_APPL_SW_VERSION_1 =     261;
VlxDevConstants.A_CYC_TYP_APPL_SW_VERSION_2 =     262;
VlxDevConstants.A_CYC_TYP_APPL_SW_VERSION_3 =     263;
VlxDevConstants.A_CYC_TYP_APPL_SW_VERSION_4 =     264;
VlxDevConstants.A_CYC_TYP_APPL_SW_VERSION_5 =     265;
VlxDevConstants.A_CYC_TYP_APPL_SW_VERSION_6 =     266;
VlxDevConstants.A_CYC_TYP_APPL_SW_VERSION_7 =     267;
VlxDevConstants.A_CYC_TYP_APPL_SW_VERSION_8 =     268;
VlxDevConstants.A_CYC_TYP_APPL_SW_VERSION_9 =     269;
VlxDevConstants.A_CYC_TYP_BOOT_SW_VERSION =       270;
VlxDevConstants.A_CYC_TYP_APPL_SW_SIZE_0 =        271;
VlxDevConstants.A_CYC_TYP_APPL_SW_SIZE_1 =        272;

/* g_cyclone_hw_state */
VlxDevConstants.A_CYC_FAN_SPEED =                 4353;
VlxDevConstants.A_CYC_TEMP_EXTRACT_AIR =          4354;
VlxDevConstants.A_CYC_TEMP_EXHAUST_AIR =          4355;
VlxDevConstants.A_CYC_TEMP_OUTDOOR_AIR =          4356;
VlxDevConstants.A_CYC_TEMP_SUPPLY_CELL_AIR =      4357;
VlxDevConstants.A_CYC_TEMP_SUPPLY_AIR =           4358;
VlxDevConstants.A_CYC_RH_LEVEL =                  4359;
VlxDevConstants.A_CYC_CO2_LEVEL =                 4360;
VlxDevConstants.A_CYC_EXTR_FAN_SPEED =            4361;
VlxDevConstants.A_CYC_SUPP_FAN_SPEED =            4362;
VlxDevConstants.A_CYC_RH_VALUE =                  4363;
VlxDevConstants.A_CYC_CO2_VALUE =                 4364;
VlxDevConstants.A_CYC_FIREPLACE_SWITCH =          4365;
VlxDevConstants.A_CYC_DIGITAL_INPUT =             4366;
VlxDevConstants.A_CYC_ANALOG_CTRL_INPUT =         4367;
VlxDevConstants.A_CYC_POST_HEATING_TRIM =         4368;
VlxDevConstants.A_CYC_PWM_OFFSET_TRIM =           4369;
VlxDevConstants.A_CYC_DEFROST_TRIM =              4370;
VlxDevConstants.A_CYC_VOLTAGE_LOW =               4371;
VlxDevConstants.A_CYC_ANALOG_SENSOR_INPUT =       4372;
VlxDevConstants.A_CYC_RH_SENSOR_0 =               4373;
VlxDevConstants.A_CYC_RH_SENSOR_1 =               4374;
VlxDevConstants.A_CYC_RH_SENSOR_2 =               4375;
VlxDevConstants.A_CYC_RH_SENSOR_3 =               4376;
VlxDevConstants.A_CYC_RH_SENSOR_4 =               4377;
VlxDevConstants.A_CYC_RH_SENSOR_5 =               4378;
VlxDevConstants.A_CYC_CO2_SENSOR_0 =              4379;
VlxDevConstants.A_CYC_CO2_SENSOR_1 =              4380;
VlxDevConstants.A_CYC_CO2_SENSOR_2 =              4381;
VlxDevConstants.A_CYC_CO2_SENSOR_3 =              4382;
VlxDevConstants.A_CYC_CO2_SENSOR_4 =              4383;
VlxDevConstants.A_CYC_CO2_SENSOR_5 =              4384;
VlxDevConstants.A_CYC_DIP_SWITCH_0 =              4385;
VlxDevConstants.A_CYC_DIP_SWITCH_1 =              4386;
VlxDevConstants.A_CYC_DIP_SWITCH_2 =              4387;
VlxDevConstants.A_CYC_DIP_SWITCH_3 =              4388;
VlxDevConstants.A_CYC_TEMP_OPTIONAL =             4389;
VlxDevConstants.A_CYC_VOC_LEVEL =                 4390;
VlxDevConstants.A_CYC_VOC_SENSOR_0 =              4391;
VlxDevConstants.A_CYC_VOC_SENSOR_1 =              4392;
VlxDevConstants.A_CYC_VOC_SENSOR_2 =              4393;
VlxDevConstants.A_CYC_VOC_SENSOR_3 =              4394;

/* g_cyclone_sw_state */
VlxDevConstants.A_CYC_STATE =                     4609;
VlxDevConstants.A_CYC_MODE =                      4610;
VlxDevConstants.A_CYC_DEFROSTING =                4611;
VlxDevConstants.A_CYC_BOOST_TIMER =               4612;
VlxDevConstants.A_CYC_FIREPLACE_TIMER =           4613;
VlxDevConstants.A_CYC_EXTRA_TIMER =               4614;
VlxDevConstants.A_CYC_WEEKLY_TIMER_ENABLED =      4615;
VlxDevConstants.A_CYC_CELL_STATE =                4616;
VlxDevConstants.A_CYC_TOTAL_UP_TIME_YEARS =       4617;
VlxDevConstants.A_CYC_TOTAL_UP_TIME_HOURS =       4618;
VlxDevConstants.A_CYC_CURRENT_UP_TIME_HOURS =     4619;
VlxDevConstants.A_CYC_REMAINING_TIME_FOR_FILTER = 4620;
VlxDevConstants.A_CYC_LIMP_MODE =                 4621;
VlxDevConstants.A_CYC_METRICS =                   4622;
VlxDevConstants.A_CYC_DEFROST_COUNT_IN_24H =      4623;
VlxDevConstants.A_CYC_DEFROST_COUNT_IN_WEEK =     4624;
VlxDevConstants.A_CYC_DEFROST_SUPERMELT_THRESHOLD =4625;
VlxDevConstants.A_CYC_ENABLED =                   4626;
VlxDevConstants.A_CYC_COMMAND =                   4627;
VlxDevConstants.A_CYC_MLV_STATE =                 4628;
VlxDevConstants.A_CYC_UPD_ADDRESS_1 =             4629;
VlxDevConstants.A_CYC_UPD_ADDRESS_2 =             4630;
VlxDevConstants.A_CYC_CLOUD_STATUS =              4631;

/* g_cyclone_time */
VlxDevConstants.A_CYC_MINUTE =                    4849;
VlxDevConstants.A_CYC_HOUR =                      4850;
VlxDevConstants.A_CYC_DAY =                       4851;
VlxDevConstants.A_CYC_MONTH =                     4852;
VlxDevConstants.A_CYC_YEAR =                      4853;
VlxDevConstants.A_CYC_WEEKDAY =                   4854;

/* g_cyclone_output */
VlxDevConstants.A_CYC_IO_EXTRACT_FAN =            4865;
VlxDevConstants.A_CYC_IO_SUPPLY_FAN =             4866;
VlxDevConstants.A_CYC_IO_ERROR =                  4867;
VlxDevConstants.A_CYC_IO_HEATER =                 4868;
VlxDevConstants.A_CYC_IO_EXTRA_HEATER =           4869;
VlxDevConstants.A_CYC_IO_BYPASS =                 4870;

/* g_cyclone_input */
VlxDevConstants.A_CYC_IN_EXTRACT_FAN =            5121;
VlxDevConstants.A_CYC_IN_SUPPLY_FAN =             5122;
VlxDevConstants.A_CYC_IN_ERROR =                  5123;
VlxDevConstants.A_CYC_IN_HEATER =                 5124;
VlxDevConstants.A_CYC_IN_EXTRA_HEATER =           5125;
VlxDevConstants.A_CYC_IN_BYPASS =                 5126;

/* g_cyclone_config */
VlxDevConstants.A_CYC_BETA_STATE =                8193;
VlxDevConstants.A_CYC_GW_ADDRESS_1 =              8194;
VlxDevConstants.A_CYC_GW_ADDRESS_2 =              8195;
VlxDevConstants.A_CYC_MASK_ADDRESS_1 =            8196;
VlxDevConstants.A_CYC_MASK_ADDRESS_2 =            8197;
VlxDevConstants.A_CYC_RH_0_ADDRESS =              8199;
VlxDevConstants.A_CYC_RH_1_ADDRESS =              8200;
VlxDevConstants.A_CYC_RH_2_ADDRESS =              8201;
VlxDevConstants.A_CYC_RH_3_ADDRESS =              8202;
VlxDevConstants.A_CYC_RH_4_ADDRESS =              8203;
VlxDevConstants.A_CYC_RH_5_ADDRESS =              8204;
VlxDevConstants.A_CYC_CO2_0_ADDRESS =             8205;
VlxDevConstants.A_CYC_CO2_1_ADDRESS =             8206;
VlxDevConstants.A_CYC_CO2_2_ADDRESS =             8207;
VlxDevConstants.A_CYC_CO2_3_ADDRESS =             8208;
VlxDevConstants.A_CYC_CO2_4_ADDRESS =             8209;
VlxDevConstants.A_CYC_CO2_5_ADDRESS =             8210;
VlxDevConstants.A_CYC_ETH_CLOUD_ENABLED =         8211;
VlxDevConstants.A_CYC_IP_ADDRESS_1 =              8212;
VlxDevConstants.A_CYC_IP_ADDRESS_2 =              8213;
VlxDevConstants.A_CYC_UUID0 =                     8214;
VlxDevConstants.A_CYC_UUID1 =                     8215;
VlxDevConstants.A_CYC_UUID2 =                     8216;
VlxDevConstants.A_CYC_UUID3 =                     8217;
VlxDevConstants.A_CYC_UUID4 =                     8218;
VlxDevConstants.A_CYC_UUID5 =                     8219;
VlxDevConstants.A_CYC_UUID6 =                     8220;
VlxDevConstants.A_CYC_UUID7 =                     8221;

/* g_cyclone_settings */
VlxDevConstants.A_CYC_USED_SETTINGS_VARIABLES =   20481;
VlxDevConstants.A_CYC_MODBUS_ADDRESS =            20482;
VlxDevConstants.A_CYC_MODBUS_BAUD_X100 =          20483;
VlxDevConstants.A_CYC_MODBUS_FRAME =              20484;
VlxDevConstants.A_CYC_EXTR_FAN_BALANCE_BASE =     20485;
VlxDevConstants.A_CYC_SUPP_FAN_BALANCE_BASE =     20486;
VlxDevConstants.A_CYC_FIREPLACE_EXTR_FAN =        20487;
VlxDevConstants.A_CYC_FIREPLACE_SUPP_FAN =        20488;
VlxDevConstants.A_CYC_RH_BASIC_LEVEL =            20490;
VlxDevConstants.A_CYC_CO2_THRESHOLD =             20491;
VlxDevConstants.A_CYC_EXTRA_ENABLED =             20492;
VlxDevConstants.A_CYC_EXTRA_AIR_TEMP_TARGET =     20493;
VlxDevConstants.A_CYC_EXTRA_EXTR_FAN =            20494;
VlxDevConstants.A_CYC_EXTRA_SUPP_FAN =            20495;
VlxDevConstants.A_CYC_EXTRA_TIME =                20496;
VlxDevConstants.A_CYC_AWAY_RH_CTRL_ENABLED =      20499;
VlxDevConstants.A_CYC_AWAY_CO2_CTRL_ENABLED =     20500;
VlxDevConstants.A_CYC_AWAY_SPEED_SETTING =        20501;
VlxDevConstants.A_CYC_AWAY_AIR_TEMP_TARGET =      20502;
VlxDevConstants.A_CYC_HOME_RH_CTRL_ENABLED =      20505;
VlxDevConstants.A_CYC_HOME_CO2_CTRL_ENABLED =     20506;
VlxDevConstants.A_CYC_HOME_SPEED_SETTING =        20507;
VlxDevConstants.A_CYC_HOME_AIR_TEMP_TARGET =      20508;
VlxDevConstants.A_CYC_BOOST_RH_CTRL_ENABLED =     20511;
VlxDevConstants.A_CYC_BOOST_CO2_CTRL_ENABLED =    20512;
VlxDevConstants.A_CYC_BOOST_SPEED_SETTING =       20513;
VlxDevConstants.A_CYC_BOOST_AIR_TEMP_TARGET =     20514;
VlxDevConstants.A_CYC_RELAY_MODE =                20517;
VlxDevConstants.A_CYC_DIGITAL_INPUT_1_MODE =      20518;
VlxDevConstants.A_CYC_DIGITAL_INPUT_2_MODE =      20519;
VlxDevConstants.A_CYC_ANALOG_INPUT_MODE =         20520;
VlxDevConstants.A_CYC_DEFROST_MODE =              20524;
VlxDevConstants.A_CYC_DEFROST_RH_PARAM =          20525;
VlxDevConstants.A_CYC_DEFROST_TEMP_PARAM =        20526;
VlxDevConstants.A_CYC_MLV_WINTER_SETPOINT =       20531;
VlxDevConstants.A_CYC_MLV_SUMMER_SETPOINT =       20532;
VlxDevConstants.A_CYC_WATERHEATER_STORED_I =      20534;
VlxDevConstants.A_CYC_INSTALLATION_DONE =         20535;
VlxDevConstants.A_CYC_DEFROST_RH_OFFSET =         20536;
VlxDevConstants.A_CYC_FILTER_CHANGE_INTERVAL =    20537;
VlxDevConstants.A_CYC_CELL_TYPE =                 20538;
VlxDevConstants.A_CYC_EXTRA_HEATER_TYPE =         20539;
VlxDevConstants.A_CYC_POST_HEATER_TYPE =          20540;
VlxDevConstants.A_CYC_BRANDING =                  20541;
VlxDevConstants.A_CYC_SIDEDNESS =                 20542;
VlxDevConstants.A_CYC_RH_LEVEL_MODE =             20543;
VlxDevConstants.A_CYC_BOOST_TIME =                20544;
VlxDevConstants.A_CYC_FIREPLACE_TIME =            20545;
VlxDevConstants.A_CYC_FILTER_CHANGED_DAY =        20546;
VlxDevConstants.A_CYC_FILTER_CHANGED_MONTH =      20547;
VlxDevConstants.A_CYC_FILTER_CHANGED_YEAR =       20548;
VlxDevConstants.A_CYC_SUPPLY_HEATING_ADJUST_MODE =20549;
VlxDevConstants.A_CYC_MIN_DEFROST_TIME =          20550;
VlxDevConstants.A_CYC_OPT_TEMP_SENSOR_MODE =      20553;

/* g_typhoon_settings */
VlxDevConstants.A_CYC_LANGUAGE =                  21761;
VlxDevConstants.A_CYC_PARENTAL_PASSWORD =         21762;
VlxDevConstants.A_CYC_USER_PASSWORD =             21763;
VlxDevConstants.A_CYC_ACCESS_LEVEL =              21764;
VlxDevConstants.A_CYC_PARENTAL_CTRL_ENABLED =     21765;
VlxDevConstants.A_CYC_BOOST_TIMER_ENABLED =       21766;
VlxDevConstants.A_CYC_FIREPLACE_TIMER_ENABLED =   21767;
VlxDevConstants.A_CYC_SUMMER_TIME_AUTO_ENAB =     21768;
VlxDevConstants.A_CYC_12_HOUR_CLOCK_ENABLED =     21769;
VlxDevConstants.A_CYC_SLEEP_DELAY =               21770;
VlxDevConstants.A_CYC_BG_LIGHT_LEVEL =            21771;
VlxDevConstants.A_CYC_EXTRA_TIMER_ENABLED =       21772;

/* g_self_test */
VlxDevConstants.A_CYC_SUPP_FAN_TEST =             32769;
VlxDevConstants.A_CYC_EXTR_FAN_TEST =             32770;
VlxDevConstants.A_CYC_BY_PASS_TEST =              32771;
VlxDevConstants.A_CYC_HEATER_TEST =               32772;
VlxDevConstants.A_CYC_EXTRA_HEATER_TEST =         32773;
VlxDevConstants.A_CYC_EFFICIENCY_TEST =           32774;
VlxDevConstants.A_CYC_SUPPLY_EFFICIENCY =         32775;
VlxDevConstants.A_CYC_EXTRACT_EFFICIENCY =        32776;

/* g_faults */
VlxDevConstants.A_CYC_TOTAL_FAULT_COUNT =         36865;
VlxDevConstants.A_CYC_FAULT_CODE =                36866;
VlxDevConstants.A_CYC_FAULT_SEVERITY =            36867;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE =          36868;
VlxDevConstants.A_CYC_FAULT_LAST_DATE =           36869;
VlxDevConstants.A_CYC_FAULT_COUNT =               36870;
VlxDevConstants.A_CYC_FAULT_ACTIVITY =            36871;
VlxDevConstants.A_CYC_FAULT_CODE_2 =              36872;
VlxDevConstants.A_CYC_FAULT_SEVERITY_2 =          36873;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_2 =        36874;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_2 =         36875;
VlxDevConstants.A_CYC_FAULT_COUNT_2 =             36876;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_2 =          36877;
VlxDevConstants.A_CYC_FAULT_CODE_3 =              36878;
VlxDevConstants.A_CYC_FAULT_SEVERITY_3 =          36879;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_3 =        36880;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_3 =         36881;
VlxDevConstants.A_CYC_FAULT_COUNT_3 =             36882;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_3 =          36883;
VlxDevConstants.A_CYC_FAULT_CODE_4 =              36884;
VlxDevConstants.A_CYC_FAULT_SEVERITY_4 =          36885;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_4 =        36886;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_4 =         36887;
VlxDevConstants.A_CYC_FAULT_COUNT_4 =             36888;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_4 =          36889;
VlxDevConstants.A_CYC_FAULT_CODE_5 =              36890;
VlxDevConstants.A_CYC_FAULT_SEVERITY_5 =          36891;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_5 =        36892;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_5 =         36893;
VlxDevConstants.A_CYC_FAULT_COUNT_5 =             36894;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_5 =          36895;
VlxDevConstants.A_CYC_FAULT_CODE_6 =              36896;
VlxDevConstants.A_CYC_FAULT_SEVERITY_6 =          36897;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_6 =        36898;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_6 =         36899;
VlxDevConstants.A_CYC_FAULT_COUNT_6 =             36900;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_6 =          36901;
VlxDevConstants.A_CYC_FAULT_CODE_7 =              36902;
VlxDevConstants.A_CYC_FAULT_SEVERITY_7 =          36903;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_7 =        36904;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_7 =         36905;
VlxDevConstants.A_CYC_FAULT_COUNT_7 =             36906;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_7 =          36907;
VlxDevConstants.A_CYC_FAULT_CODE_8 =              36908;
VlxDevConstants.A_CYC_FAULT_SEVERITY_8 =          36909;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_8 =        36910;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_8 =         36911;
VlxDevConstants.A_CYC_FAULT_COUNT_8 =             36912;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_8 =          36913;
VlxDevConstants.A_CYC_FAULT_CODE_9 =              36914;
VlxDevConstants.A_CYC_FAULT_SEVERITY_9 =          36915;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_9 =        36916;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_9 =         36917;
VlxDevConstants.A_CYC_FAULT_COUNT_9 =             36918;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_9 =          36919;
VlxDevConstants.A_CYC_FAULT_CODE_10 =             36920;
VlxDevConstants.A_CYC_FAULT_SEVERITY_10 =         36921;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_10 =       36922;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_10 =        36923;
VlxDevConstants.A_CYC_FAULT_COUNT_10 =            36924;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_10 =         36925;
VlxDevConstants.A_CYC_FAULT_CODE_11 =             36926;
VlxDevConstants.A_CYC_FAULT_SEVERITY_11 =         36927;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_11 =       36928;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_11 =        36929;
VlxDevConstants.A_CYC_FAULT_COUNT_11 =            36930;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_11 =         36931;
VlxDevConstants.A_CYC_FAULT_CODE_12 =             36932;
VlxDevConstants.A_CYC_FAULT_SEVERITY_12 =         36933;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_12 =       36934;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_12 =        36935;
VlxDevConstants.A_CYC_FAULT_COUNT_12 =            36936;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_12 =         36937;
VlxDevConstants.A_CYC_FAULT_CODE_13 =             36938;
VlxDevConstants.A_CYC_FAULT_SEVERITY_13 =         36939;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_13 =       36940;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_13 =        36941;
VlxDevConstants.A_CYC_FAULT_COUNT_13 =            36942;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_13 =         36943;
VlxDevConstants.A_CYC_FAULT_CODE_14 =             36944;
VlxDevConstants.A_CYC_FAULT_SEVERITY_14 =         36945;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_14 =       36946;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_14 =        36947;
VlxDevConstants.A_CYC_FAULT_COUNT_14 =            36948;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_14 =         36949;
VlxDevConstants.A_CYC_FAULT_CODE_15 =             36950;
VlxDevConstants.A_CYC_FAULT_SEVERITY_15 =         36951;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_15 =       36952;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_15 =        36953;
VlxDevConstants.A_CYC_FAULT_COUNT_15 =            36954;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_15 =         36955;
VlxDevConstants.A_CYC_FAULT_CODE_16 =             36956;
VlxDevConstants.A_CYC_FAULT_SEVERITY_16 =         36957;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_16 =       36958;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_16 =        36959;
VlxDevConstants.A_CYC_FAULT_COUNT_16 =            36960;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_16 =         36961;
VlxDevConstants.A_CYC_FAULT_CODE_17 =             36962;
VlxDevConstants.A_CYC_FAULT_SEVERITY_17 =         36963;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_17 =       36964;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_17 =        36965;
VlxDevConstants.A_CYC_FAULT_COUNT_17 =            36966;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_17 =         36967;
VlxDevConstants.A_CYC_FAULT_CODE_18 =             36968;
VlxDevConstants.A_CYC_FAULT_SEVERITY_18 =         36969;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_18 =       36970;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_18 =        36971;
VlxDevConstants.A_CYC_FAULT_COUNT_18 =            36972;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_18 =         36973;
VlxDevConstants.A_CYC_FAULT_CODE_19 =             36974;
VlxDevConstants.A_CYC_FAULT_SEVERITY_19 =         36975;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_19 =       36976;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_19 =        36977;
VlxDevConstants.A_CYC_FAULT_COUNT_19 =            36978;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_19 =         36979;
VlxDevConstants.A_CYC_FAULT_CODE_20 =             36980;
VlxDevConstants.A_CYC_FAULT_SEVERITY_20 =         36981;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_20 =       36982;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_20 =        36983;
VlxDevConstants.A_CYC_FAULT_COUNT_20 =            36984;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_20 =         36985;
VlxDevConstants.A_CYC_FAULT_CODE_21 =             36986;
VlxDevConstants.A_CYC_FAULT_SEVERITY_21 =         36987;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_21 =       36988;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_21 =        36989;
VlxDevConstants.A_CYC_FAULT_COUNT_21 =            36990;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_21 =         36991;
VlxDevConstants.A_CYC_FAULT_CODE_22 =             36992;
VlxDevConstants.A_CYC_FAULT_SEVERITY_22 =         36993;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_22 =       36994;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_22 =        36995;
VlxDevConstants.A_CYC_FAULT_COUNT_22 =            36996;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_22 =         36997;
VlxDevConstants.A_CYC_FAULT_CODE_23 =             36998;
VlxDevConstants.A_CYC_FAULT_SEVERITY_23 =         36999;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_23 =       37000;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_23 =        37001;
VlxDevConstants.A_CYC_FAULT_COUNT_23 =            37002;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_23 =         37003;
VlxDevConstants.A_CYC_FAULT_CODE_24 =             37004;
VlxDevConstants.A_CYC_FAULT_SEVERITY_24 =         37005;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_24 =       37006;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_24 =        37007;
VlxDevConstants.A_CYC_FAULT_COUNT_24 =            37008;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_24 =         37009;
VlxDevConstants.A_CYC_FAULT_CODE_25 =             37010;
VlxDevConstants.A_CYC_FAULT_SEVERITY_25 =         37011;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_25 =       37012;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_25 =        37013;
VlxDevConstants.A_CYC_FAULT_COUNT_25 =            37014;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_25 =         37015;
VlxDevConstants.A_CYC_FAULT_CODE_26 =             37016;
VlxDevConstants.A_CYC_FAULT_SEVERITY_26 =         37017;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_26 =       37018;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_26 =        37019;
VlxDevConstants.A_CYC_FAULT_COUNT_26 =            37020;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_26 =         37021;
VlxDevConstants.A_CYC_FAULT_CODE_27 =             37022;
VlxDevConstants.A_CYC_FAULT_SEVERITY_27 =         37023;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_27 =       37024;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_27 =        37025;
VlxDevConstants.A_CYC_FAULT_COUNT_27 =            37026;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_27 =         37027;
VlxDevConstants.A_CYC_FAULT_CODE_28 =             37028;
VlxDevConstants.A_CYC_FAULT_SEVERITY_28 =         37029;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_28 =       37030;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_28 =        37031;
VlxDevConstants.A_CYC_FAULT_COUNT_28 =            37032;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_28 =         37033;
VlxDevConstants.A_CYC_FAULT_CODE_29 =             37034;
VlxDevConstants.A_CYC_FAULT_SEVERITY_29 =         37035;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_29 =       37036;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_29 =        37037;
VlxDevConstants.A_CYC_FAULT_COUNT_29 =            37038;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_29 =         37039;
VlxDevConstants.A_CYC_FAULT_CODE_30 =             37040;
VlxDevConstants.A_CYC_FAULT_SEVERITY_30 =         37041;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_30 =       37042;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_30 =        37043;
VlxDevConstants.A_CYC_FAULT_COUNT_30 =            37044;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_30 =         37045;
VlxDevConstants.A_CYC_FAULT_CODE_31 =             37046;
VlxDevConstants.A_CYC_FAULT_SEVERITY_31 =         37047;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_31 =       37048;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_31 =        37049;
VlxDevConstants.A_CYC_FAULT_COUNT_31 =            37050;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_31 =         37051;
VlxDevConstants.A_CYC_FAULT_CODE_32 =             37052;
VlxDevConstants.A_CYC_FAULT_SEVERITY_32 =         37053;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_32 =       37054;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_32 =        37055;
VlxDevConstants.A_CYC_FAULT_COUNT_32 =            37056;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_32 =         37057;
VlxDevConstants.A_CYC_FAULT_CODE_33 =             37058;
VlxDevConstants.A_CYC_FAULT_SEVERITY_33 =         37059;
VlxDevConstants.A_CYC_FAULT_FIRST_DATE_33 =       37060;
VlxDevConstants.A_CYC_FAULT_LAST_DATE_33 =        37061;
VlxDevConstants.A_CYC_FAULT_COUNT_33 =            37062;
VlxDevConstants.A_CYC_FAULT_ACTIVITY_33 =         37063;

/* g_cyclone_weekly_schedule */
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_00 =        40961;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_01 =        40962;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_02 =        40963;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_03 =        40964;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_04 =        40965;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_05 =        40966;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_06 =        40967;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_07 =        40968;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_08 =        40969;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_09 =        40970;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_10 =        40971;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_11 =        40972;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_12 =        40973;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_13 =        40974;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_14 =        40975;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_15 =        40976;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_16 =        40977;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_17 =        40978;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_18 =        40979;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_19 =        40980;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_20 =        40981;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_21 =        40982;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_22 =        40983;
VlxDevConstants.A_CYC_SCHEDULE_MONDAY_23 =        40984;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_00 =       40985;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_01 =       40986;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_02 =       40987;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_03 =       40988;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_04 =       40989;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_05 =       40990;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_06 =       40991;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_07 =       40992;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_08 =       40993;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_09 =       40994;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_10 =       40995;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_11 =       40996;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_12 =       40997;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_13 =       40998;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_14 =       40999;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_15 =       41000;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_16 =       41001;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_17 =       41002;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_18 =       41003;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_19 =       41004;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_20 =       41005;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_21 =       41006;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_22 =       41007;
VlxDevConstants.A_CYC_SCHEDULE_TUESDAY_23 =       41008;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_00 =     41009;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_01 =     41010;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_02 =     41011;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_03 =     41012;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_04 =     41013;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_05 =     41014;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_06 =     41015;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_07 =     41016;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_08 =     41017;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_09 =     41018;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_10 =     41019;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_11 =     41020;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_12 =     41021;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_13 =     41022;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_14 =     41023;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_15 =     41024;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_16 =     41025;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_17 =     41026;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_18 =     41027;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_19 =     41028;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_20 =     41029;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_21 =     41030;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_22 =     41031;
VlxDevConstants.A_CYC_SCHEDULE_WEDNESDAY_23 =     41032;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_00 =      41033;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_01 =      41034;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_02 =      41035;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_03 =      41036;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_04 =      41037;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_05 =      41038;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_06 =      41039;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_07 =      41040;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_08 =      41041;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_09 =      41042;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_10 =      41043;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_11 =      41044;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_12 =      41045;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_13 =      41046;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_14 =      41047;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_15 =      41048;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_16 =      41049;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_17 =      41050;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_18 =      41051;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_19 =      41052;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_20 =      41053;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_21 =      41054;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_22 =      41055;
VlxDevConstants.A_CYC_SCHEDULE_THURSDAY_23 =      41056;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_00 =        41057;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_01 =        41058;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_02 =        41059;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_03 =        41060;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_04 =        41061;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_05 =        41062;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_06 =        41063;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_07 =        41064;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_08 =        41065;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_09 =        41066;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_10 =        41067;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_11 =        41068;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_12 =        41069;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_13 =        41070;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_14 =        41071;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_15 =        41072;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_16 =        41073;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_17 =        41074;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_18 =        41075;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_19 =        41076;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_20 =        41077;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_21 =        41078;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_22 =        41079;
VlxDevConstants.A_CYC_SCHEDULE_FRIDAY_23 =        41080;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_00 =      41081;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_01 =      41082;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_02 =      41083;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_03 =      41084;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_04 =      41085;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_05 =      41086;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_06 =      41087;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_07 =      41088;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_08 =      41089;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_09 =      41090;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_10 =      41091;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_11 =      41092;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_12 =      41093;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_13 =      41094;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_14 =      41095;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_15 =      41096;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_16 =      41097;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_17 =      41098;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_18 =      41099;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_19 =      41100;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_20 =      41101;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_21 =      41102;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_22 =      41103;
VlxDevConstants.A_CYC_SCHEDULE_SATURDAY_23 =      41104;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_00 =        41105;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_01 =        41106;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_02 =        41107;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_03 =        41108;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_04 =        41109;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_05 =        41110;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_06 =        41111;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_07 =        41112;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_08 =        41113;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_09 =        41114;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_10 =        41115;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_11 =        41116;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_12 =        41117;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_13 =        41118;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_14 =        41119;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_15 =        41120;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_16 =        41121;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_17 =        41122;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_18 =        41123;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_19 =        41124;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_20 =        41125;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_21 =        41126;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_22 =        41127;
VlxDevConstants.A_CYC_SCHEDULE_SUNDAY_23 =        41128;

/* Configuration constants */
VlxDevConstants.C_CYC_STATE_HOME =                           0;
VlxDevConstants.C_CYC_STATE_AWAY =                           1;
VlxDevConstants.C_CYC_STATE_BOOST =                          2;
VlxDevConstants.C_CYC_EVENT_NONE =                           0;
VlxDevConstants.C_CYC_EVENT_HOME =                           1;
VlxDevConstants.C_CYC_EVENT_AWAY =                           2;
VlxDevConstants.C_CYC_EVENT_BOOST =                          3;
VlxDevConstants.C_CYC_MODE_NORMAL =                          0;
VlxDevConstants.C_CYC_MODE_TESTING =                         1;
VlxDevConstants.C_CYC_MODE_MANUAL =                          2;
VlxDevConstants.C_CYC_MODE_DEFROST =                         3;
VlxDevConstants.C_CYC_MODE_SELF_TEST =                       4;
VlxDevConstants.C_CYC_MODE_OFF =                             5;
VlxDevConstants.C_CYC_MODE_EMC_TEST =                        6;
VlxDevConstants.C_CYC_NONE =                                 0;
VlxDevConstants.C_CYC_ELECTRIC =                             1;
VlxDevConstants.C_CYC_WATER =                                2;
VlxDevConstants.C_CYC_MLV =                                  3;
VlxDevConstants.C_CYC_HEATING_SUPPLY =                       0;
VlxDevConstants.C_CYC_HEATING_EXTRACT =                      1;
VlxDevConstants.C_CYC_HEATING_COOLING =                      2;
VlxDevConstants.C_CYC_LEFT =                                 0;
VlxDevConstants.C_CYC_RIGHT =                                1;
VlxDevConstants.C_CYC_RELAY_SERVICE_REM =                    0;
VlxDevConstants.C_CYC_RELAY_ERROR =                          1;
VlxDevConstants.C_CYC_RELAY_ERR_SERVICE =                    2;
VlxDevConstants.C_CYC_RELAY_FIRE_ALARM =                     3;
VlxDevConstants.C_CYC_RELAY_BYPASS_STATE =                   4;
VlxDevConstants.C_CYC_RELAY_MLV =                            5;
VlxDevConstants.C_CYC_RELAY_NONE =                           6;
VlxDevConstants.C_CYC_DIG_IN_NONE =                          0;
VlxDevConstants.C_CYC_DIG_IN_FIREPLACE =                     1;
VlxDevConstants.C_CYC_DIG_IN_HOME_STATE =                    2;
VlxDevConstants.C_CYC_DIG_IN_FP_DIRECT =                     3;
VlxDevConstants.C_CYC_DIG_IN_FIRE_ALARM =                    4;
VlxDevConstants.C_CYC_DIG_IN_BOOST =                         5;
VlxDevConstants.C_CYC_DIG_IN_BYPASS =                        6;
VlxDevConstants.C_CYC_DIG_IN_SCHEDULER =                     7;
VlxDevConstants.C_CYC_DIG_IN_EXTRA =                         8;
VlxDevConstants.C_CYC_ANA_IN_NONE =                          0;
VlxDevConstants.C_CYC_ANA_IN_SITUATION =                     1;
VlxDevConstants.C_CYC_ANA_IN_SPEED =                         2;
VlxDevConstants.C_CYC_ANA_IN_POST_HEAT =                     3;
VlxDevConstants.C_CYC_BYPASS_MODE =                          0;
VlxDevConstants.C_CYC_FAN_STOP_MODE =                        1;
VlxDevConstants.C_CYC_CELL_STATE_HEATRECO =                  0;
VlxDevConstants.C_CYC_CELL_STATE_COOLRECO =                  1;
VlxDevConstants.C_CYC_CELL_STATE_BYPASS =                    2;
VlxDevConstants.C_CYC_CELL_STATE_DEFROST =                   3;
VlxDevConstants.C_CYC_ACCESS_FREE =                          0;
VlxDevConstants.C_CYC_ACCESS_LIMITED =                       1;
VlxDevConstants.C_CYC_ACCESS_VERY_LIMITED =                  2;
VlxDevConstants.C_CYC_NOT_TESTED =                           0;
VlxDevConstants.C_CYC_TESTED =                               1;
VlxDevConstants.C_CYC_FAILED =                               2;
VlxDevConstants.C_CYC_TESTING =                              3;
VlxDevConstants.C_CYC_NOT_TESTABLE =                         4;
VlxDevConstants.C_CYC_HRC_ALUMINIUM =                        0;
VlxDevConstants.C_CYC_HRC_PLASTIC =                          1;
VlxDevConstants.C_CYC_HRC_ENTALPHY =                         2;
VlxDevConstants.C_COMMAND_UPDATE_REQUEST =                   16;
VlxDevConstants.C_COMMAND_UPDATE_SEND =                      17;
VlxDevConstants.C_COMMAND_UPDATE_GET =                       18;
VlxDevConstants.C_COMMAND_START_APPLICATION =                19;
VlxDevConstants.C_COMMAND_RESTART =                          20;
VlxDevConstants.C_COMMAND_CREATE_NEW_UUID =                  21;
VlxDevConstants.C_COMMAND_TYPHOON_READY_FOR_UPDATE =         50;
VlxDevConstants.C_COMMAND_TYPHOON_USB_TRANSFER =             51;
VlxDevConstants.C_COMMAND_UPDATE_GET_ETH =                   22;
VlxDevConstants.C_COMMAND_CLEAR_AND_REBOOT =                 23;
VlxDevConstants.C_COMMAND_UPDATE_GET_ETH_CLOUD =             24;
VlxDevConstants.C_COMMAND_UPDATE_CLOUD_BETA =                25;
VlxDevConstants.C_COMMAND_UPDATE_CLOUD_ALPHA =               26;
VlxDevConstants.C_COMMAND_UPDATE_CLOUD_FORCE_MASTER =        27;
VlxDevConstants.C_COMMAND_UPDATE_CHECK_CLOUD_VERSION =       28;
VlxDevConstants.C_COMMAND_UPDATE_CLOUD_INSIDER =             29;
VlxDevConstants.C_COMMAND_SAVE_FACTORY_SETTINGS =            32;
VlxDevConstants.C_COMMAND_RESTORE_FACTORY_SETTINGS =         33;
VlxDevConstants.C_COMMAND_SAVE_INSTALLATION_SETTINGS =       34;
VlxDevConstants.C_COMMAND_RESTORE_INSTALLATION_SETTINGS =    35;
VlxDevConstants.C_COMMAND_SAVE_USER_SETTINGS =               36;
VlxDevConstants.C_COMMAND_RESTORE_USER_SETTINGS =            37;
VlxDevConstants.C_COMMAND_SAVE_CLIENT_DATA =                 38;
VlxDevConstants.C_COMMAND_CLEAR_ALL =                        39;
VlxDevConstants.C_COMMAND_RESET =                            40;
VlxDevConstants.C_COMMAND_FORCE_UPDATE =                     47;
VlxDevConstants.C_COMMAND_STOP_CONTROL =                     48;
VlxDevConstants.C_COMMAND_START_CONTROL =                    49;
VlxDevConstants.C_COMMAND_CHECK_STORAGES =                   52;
VlxDevConstants.C_COMMAND_DEBUGGING_START =                  80;
VlxDevConstants.C_COMMAND_DEBUGGING_GET =                    81;
VlxDevConstants.C_COMMAND_DUMPSCRATCHFLASH =                 82;
VlxDevConstants.C_COMMAND_CLEARSCRATCHFLASH =                83;
VlxDevConstants.C_COMMAND_REVERSE_NETDEBUG =                 84;
VlxDevConstants.C_CYC_NEGATIVE =                             0;
VlxDevConstants.C_CYC_AFFIRMATIVE =                          1;
VlxDevConstants.C_CYC_OPT_TEMP_NONE =                        0;
VlxDevConstants.C_CYC_OPT_TEMP_MLV =                         1;

/* Websocket constants */
VlxDevConstants.WS_WEB_UI_DATA_LENGTH_ERROR =                 255;
VlxDevConstants.WS_WEB_UI_DATA_TABLE_BOUNDARY_ERROR =         254;
VlxDevConstants.WS_WEB_UI_DATA_BOUNDARY_ERROR =               253;
VlxDevConstants.WS_WEB_UI_DATA_INVALID_COMMAND =              252;
VlxDevConstants.WS_WEB_UI_DATA_CHECKSUM_ERROR =               251;
VlxDevConstants.WS_WEB_UI_COMMAND_READ_DATA =                 250;
VlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA =                249;
VlxDevConstants.WS_WEB_UI_DATA_SEND_REPLY =                   248;
VlxDevConstants.WS_WEB_UI_COMMAND_LOG =                       247;
VlxDevConstants.WS_WEB_UI_COMMAND_READ_TABLES =               246;
VlxDevConstants.WS_WEB_UI_ACK =                               245;
VlxDevConstants.WS_WEB_UI_COMMAND_LOG_LIMITED =               244;
VlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW =                   243;
VlxDevConstants.WS_WEB_UI_DATA_OK =                           0;
VlxDevConstants.WS_WEB_UI_DATA_ERROR =                        1;
VlxDevConstants.WS_WEB_UI_DATA_REQUEST =                      2;
VlxDevConstants.WS_WEB_UI_DATA_RW_ERROR =                     3;
VlxDevConstants.WS_LOG_EXTRACT_AIR_TEMP =                     0;
VlxDevConstants.WS_LOG_EXHAUST_AIR_TEMP =                     1;
VlxDevConstants.WS_LOG_OUTDOOR_AIR_TEMP =                     2;
VlxDevConstants.WS_LOG_SUPPLY_AIR_TEMP =                      3;
VlxDevConstants.WS_LOG_MAX_CO2 =                              4;
VlxDevConstants.WS_LOG_MAX_HUMIDITY =                         5;
VlxDevConstants.WS_LOG_SUPPLY_CELL_AIR_TEMP =                 6;
/* Modbus table ranges */
VlxDevConstants.RANGE_START_g_cyclone_general_info = 0;
VlxDevConstants.RANGE_END_g_cyclone_general_info = 35;
VlxDevConstants.RANGE_START_g_typhoon_general_info = 256;
VlxDevConstants.RANGE_END_g_typhoon_general_info = 282;
VlxDevConstants.RANGE_START_g_cyclone_hw_state = 4352;
VlxDevConstants.RANGE_END_g_cyclone_hw_state = 4394;
VlxDevConstants.RANGE_START_g_cyclone_sw_state = 4608;
VlxDevConstants.RANGE_END_g_cyclone_sw_state = 4632;
VlxDevConstants.RANGE_START_g_cyclone_time = 4848;
VlxDevConstants.RANGE_END_g_cyclone_time = 4854;
VlxDevConstants.RANGE_START_g_cyclone_output = 4864;
VlxDevConstants.RANGE_END_g_cyclone_output = 4870;
VlxDevConstants.RANGE_START_g_cyclone_input = 5120;
VlxDevConstants.RANGE_END_g_cyclone_input = 5126;
VlxDevConstants.RANGE_START_g_cyclone_config = 8192;
VlxDevConstants.RANGE_END_g_cyclone_config = 8221;
VlxDevConstants.RANGE_START_g_cyclone_settings = 20480;
VlxDevConstants.RANGE_END_g_cyclone_settings = 20555;
VlxDevConstants.RANGE_START_g_typhoon_settings = 21760;
VlxDevConstants.RANGE_END_g_typhoon_settings = 21782;
VlxDevConstants.RANGE_START_g_self_test = 32768;
VlxDevConstants.RANGE_END_g_self_test = 32783;
VlxDevConstants.RANGE_START_g_faults = 36864;
VlxDevConstants.RANGE_END_g_faults = 37063;
VlxDevConstants.RANGE_START_g_cyclone_weekly_schedule = 40960;
VlxDevConstants.RANGE_END_g_cyclone_weekly_schedule = 41128;


/* CYCLONE_READ_CONSTANTS */
var VlxReadConstants = VlxReadConstants || {};

/* g_cyclone_general_info  */
VlxReadConstants.CYC_APPL_SW_VERSION =           1;
VlxReadConstants.CYC_APPL_SW_VERSION_1 =         2;
VlxReadConstants.CYC_APPL_SW_VERSION_2 =         3;
VlxReadConstants.CYC_APPL_SW_VERSION_3 =         4;
VlxReadConstants.CYC_APPL_SW_VERSION_4 =         5;
VlxReadConstants.CYC_APPL_SW_VERSION_5 =         6;
VlxReadConstants.CYC_APPL_SW_VERSION_6 =         7;
VlxReadConstants.CYC_APPL_SW_VERSION_7 =         8;
VlxReadConstants.CYC_APPL_SW_VERSION_8 =         9;
VlxReadConstants.CYC_APPL_SW_VERSION_9 =         10;
VlxReadConstants.CYC_BOOT_SW_VERSION =           11;
VlxReadConstants.CYC_APPL_SW_SIZE_0 =            12;
VlxReadConstants.CYC_APPL_SW_SIZE_1 =            13;
VlxReadConstants.CYC_SERIAL_NUMBER_MSW =         14;
VlxReadConstants.CYC_SERIAL_NUMBER_LSW =         15;
VlxReadConstants.CYC_MACHINE_TYPE =              16;
VlxReadConstants.CYC_MACHINE_MODEL =             17;
VlxReadConstants.CYC_MASTER_PASSWORD =           18;
VlxReadConstants.CYC_CONFIGURATION_MSW =         19;
VlxReadConstants.CYC_CONFIGURATION_LSW =         20;
VlxReadConstants.CYC_CONFIGURATION_NA_0 =        21;
VlxReadConstants.CYC_CONFIGURATION_NA_1 =        22;
VlxReadConstants.CYC_CONFIGURATION_NA_2 =        23;
VlxReadConstants.CYC_CONFIGURATION_NA_3 =        24;
VlxReadConstants.CYC_CONFIGURATION_CHECKSUM =    25;
VlxReadConstants.CYC_NUM_OF_GENERAL_INFO =       36;

/* g_typhoon_general_info  */
VlxReadConstants.CYC_TYP_SERIAL_NUMBER_MSW =     1;
VlxReadConstants.CYC_TYP_SERIAL_NUMBER_LSW =     2;
VlxReadConstants.CYC_TYP_PANEL_MODEL =           3;
VlxReadConstants.CYC_TYP_APPL_SW_VERSION =       4;
VlxReadConstants.CYC_TYP_APPL_SW_VERSION_1 =     5;
VlxReadConstants.CYC_TYP_APPL_SW_VERSION_2 =     6;
VlxReadConstants.CYC_TYP_APPL_SW_VERSION_3 =     7;
VlxReadConstants.CYC_TYP_APPL_SW_VERSION_4 =     8;
VlxReadConstants.CYC_TYP_APPL_SW_VERSION_5 =     9;
VlxReadConstants.CYC_TYP_APPL_SW_VERSION_6 =     10;
VlxReadConstants.CYC_TYP_APPL_SW_VERSION_7 =     11;
VlxReadConstants.CYC_TYP_APPL_SW_VERSION_8 =     12;
VlxReadConstants.CYC_TYP_APPL_SW_VERSION_9 =     13;
VlxReadConstants.CYC_TYP_BOOT_SW_VERSION =       14;
VlxReadConstants.CYC_TYP_APPL_SW_SIZE_0 =        15;
VlxReadConstants.CYC_TYP_APPL_SW_SIZE_1 =        16;
VlxReadConstants.CYC_NUM_OF_GENERAL_TYP_INFO =   27;

/* g_cyclone_hw_state  */
VlxReadConstants.CYC_FAN_SPEED =                 1;
VlxReadConstants.CYC_TEMP_EXTRACT_AIR =          2;
VlxReadConstants.CYC_TEMP_EXHAUST_AIR =          3;
VlxReadConstants.CYC_TEMP_OUTDOOR_AIR =          4;
VlxReadConstants.CYC_TEMP_SUPPLY_CELL_AIR =      5;
VlxReadConstants.CYC_TEMP_SUPPLY_AIR =           6;
VlxReadConstants.CYC_RH_LEVEL =                  7;
VlxReadConstants.CYC_CO2_LEVEL =                 8;
VlxReadConstants.CYC_EXTR_FAN_SPEED =            9;
VlxReadConstants.CYC_SUPP_FAN_SPEED =            10;
VlxReadConstants.CYC_RH_VALUE =                  11;
VlxReadConstants.CYC_CO2_VALUE =                 12;
VlxReadConstants.CYC_FIREPLACE_SWITCH =          13;
VlxReadConstants.CYC_DIGITAL_INPUT =             14;
VlxReadConstants.CYC_ANALOG_CTRL_INPUT =         15;
VlxReadConstants.CYC_POST_HEATING_TRIM =         16;
VlxReadConstants.CYC_PWM_OFFSET_TRIM =           17;
VlxReadConstants.CYC_DEFROST_TRIM =              18;
VlxReadConstants.CYC_VOLTAGE_LOW =               19;
VlxReadConstants.CYC_ANALOG_SENSOR_INPUT =       20;
VlxReadConstants.CYC_RH_SENSOR_0 =               21;
VlxReadConstants.CYC_RH_SENSOR_1 =               22;
VlxReadConstants.CYC_RH_SENSOR_2 =               23;
VlxReadConstants.CYC_RH_SENSOR_3 =               24;
VlxReadConstants.CYC_RH_SENSOR_4 =               25;
VlxReadConstants.CYC_RH_SENSOR_5 =               26;
VlxReadConstants.CYC_CO2_SENSOR_0 =              27;
VlxReadConstants.CYC_CO2_SENSOR_1 =              28;
VlxReadConstants.CYC_CO2_SENSOR_2 =              29;
VlxReadConstants.CYC_CO2_SENSOR_3 =              30;
VlxReadConstants.CYC_CO2_SENSOR_4 =              31;
VlxReadConstants.CYC_CO2_SENSOR_5 =              32;
VlxReadConstants.CYC_DIP_SWITCH_0 =              33;
VlxReadConstants.CYC_DIP_SWITCH_1 =              34;
VlxReadConstants.CYC_DIP_SWITCH_2 =              35;
VlxReadConstants.CYC_DIP_SWITCH_3 =              36;
VlxReadConstants.CYC_TEMP_OPTIONAL =             37;
VlxReadConstants.CYC_VOC_LEVEL =                 38;
VlxReadConstants.CYC_VOC_SENSOR_0 =              39;
VlxReadConstants.CYC_VOC_SENSOR_1 =              40;
VlxReadConstants.CYC_VOC_SENSOR_2 =              41;
VlxReadConstants.CYC_VOC_SENSOR_3 =              42;
VlxReadConstants.CYC_NUM_OF_HW_STATES =          43;

/* g_cyclone_sw_state  */
VlxReadConstants.CYC_STATE =                     1;
VlxReadConstants.CYC_MODE =                      2;
VlxReadConstants.CYC_DEFROSTING =                3;
VlxReadConstants.CYC_BOOST_TIMER =               4;
VlxReadConstants.CYC_FIREPLACE_TIMER =           5;
VlxReadConstants.CYC_EXTRA_TIMER =               6;
VlxReadConstants.CYC_WEEKLY_TIMER_ENABLED =      7;
VlxReadConstants.CYC_CELL_STATE =                8;
VlxReadConstants.CYC_TOTAL_UP_TIME_YEARS =       9;
VlxReadConstants.CYC_TOTAL_UP_TIME_HOURS =       10;
VlxReadConstants.CYC_CURRENT_UP_TIME_HOURS =     11;
VlxReadConstants.CYC_REMAINING_TIME_FOR_FILTER = 12;
VlxReadConstants.CYC_LIMP_MODE =                 13;
VlxReadConstants.CYC_METRICS =                   14;
VlxReadConstants.CYC_DEFROST_COUNT_IN_24H =      15;
VlxReadConstants.CYC_DEFROST_COUNT_IN_WEEK =     16;
VlxReadConstants.CYC_DEFROST_SUPERMELT_THRESHOLD =17;
VlxReadConstants.CYC_ENABLED =                   18;
VlxReadConstants.CYC_COMMAND =                   19;
VlxReadConstants.CYC_MLV_STATE =                 20;
VlxReadConstants.CYC_UPD_ADDRESS_1 =             21;
VlxReadConstants.CYC_UPD_ADDRESS_2 =             22;
VlxReadConstants.CYC_CLOUD_STATUS =              23;
VlxReadConstants.CYC_NUM_OF_SW_STATES =          25;

/* g_cyclone_time  */
VlxReadConstants.CYC_MINUTE =                    1;
VlxReadConstants.CYC_HOUR =                      2;
VlxReadConstants.CYC_DAY =                       3;
VlxReadConstants.CYC_MONTH =                     4;
VlxReadConstants.CYC_YEAR =                      5;
VlxReadConstants.CYC_WEEKDAY =                   6;
VlxReadConstants.CYC_NUM_OF_TIME_ELEMENTS =      7;

/* g_cyclone_output  */
VlxReadConstants.CYC_IO_EXTRACT_FAN =            1;
VlxReadConstants.CYC_IO_SUPPLY_FAN =             2;
VlxReadConstants.CYC_IO_ERROR =                  3;
VlxReadConstants.CYC_IO_HEATER =                 4;
VlxReadConstants.CYC_IO_EXTRA_HEATER =           5;
VlxReadConstants.CYC_IO_BYPASS =                 6;
VlxReadConstants.CYC_NUM_OF_OUTPUTS =            7;

/* g_cyclone_input  */
VlxReadConstants.CYC_IN_EXTRACT_FAN =            1;
VlxReadConstants.CYC_IN_SUPPLY_FAN =             2;
VlxReadConstants.CYC_IN_ERROR =                  3;
VlxReadConstants.CYC_IN_HEATER =                 4;
VlxReadConstants.CYC_IN_EXTRA_HEATER =           5;
VlxReadConstants.CYC_IN_BYPASS =                 6;
VlxReadConstants.CYC_NUM_OF_INPUTS =             7;

/* g_cyclone_config  */
VlxReadConstants.CYC_BETA_STATE =                1;
VlxReadConstants.CYC_GW_ADDRESS_1 =              2;
VlxReadConstants.CYC_GW_ADDRESS_2 =              3;
VlxReadConstants.CYC_MASK_ADDRESS_1 =            4;
VlxReadConstants.CYC_MASK_ADDRESS_2 =            5;
VlxReadConstants.CYC_RH_0_ADDRESS =              7;
VlxReadConstants.CYC_RH_1_ADDRESS =              8;
VlxReadConstants.CYC_RH_2_ADDRESS =              9;
VlxReadConstants.CYC_RH_3_ADDRESS =              10;
VlxReadConstants.CYC_RH_4_ADDRESS =              11;
VlxReadConstants.CYC_RH_5_ADDRESS =              12;
VlxReadConstants.CYC_CO2_0_ADDRESS =             13;
VlxReadConstants.CYC_CO2_1_ADDRESS =             14;
VlxReadConstants.CYC_CO2_2_ADDRESS =             15;
VlxReadConstants.CYC_CO2_3_ADDRESS =             16;
VlxReadConstants.CYC_CO2_4_ADDRESS =             17;
VlxReadConstants.CYC_CO2_5_ADDRESS =             18;
VlxReadConstants.CYC_ETH_CLOUD_ENABLED =         19;
VlxReadConstants.CYC_IP_ADDRESS_1 =              20;
VlxReadConstants.CYC_IP_ADDRESS_2 =              21;
VlxReadConstants.CYC_UUID0 =                     22;
VlxReadConstants.CYC_UUID1 =                     23;
VlxReadConstants.CYC_UUID2 =                     24;
VlxReadConstants.CYC_UUID3 =                     25;
VlxReadConstants.CYC_UUID4 =                     26;
VlxReadConstants.CYC_UUID5 =                     27;
VlxReadConstants.CYC_UUID6 =                     28;
VlxReadConstants.CYC_UUID7 =                     29;
VlxReadConstants.CYC_NUM_OF_CONFIGS =            30;

/* g_cyclone_settings  */
VlxReadConstants.CYC_USED_SETTINGS_VARIABLES =   1;
VlxReadConstants.CYC_MODBUS_ADDRESS =            2;
VlxReadConstants.CYC_MODBUS_BAUD_X100 =          3;
VlxReadConstants.CYC_MODBUS_FRAME =              4;
VlxReadConstants.CYC_EXTR_FAN_BALANCE_BASE =     5;
VlxReadConstants.CYC_SUPP_FAN_BALANCE_BASE =     6;
VlxReadConstants.CYC_FIREPLACE_EXTR_FAN =        7;
VlxReadConstants.CYC_FIREPLACE_SUPP_FAN =        8;
VlxReadConstants.CYC_RH_BASIC_LEVEL =            10;
VlxReadConstants.CYC_CO2_THRESHOLD =             11;
VlxReadConstants.CYC_EXTRA_ENABLED =             12;
VlxReadConstants.CYC_EXTRA_AIR_TEMP_TARGET =     13;
VlxReadConstants.CYC_EXTRA_EXTR_FAN =            14;
VlxReadConstants.CYC_EXTRA_SUPP_FAN =            15;
VlxReadConstants.CYC_EXTRA_TIME =                16;
VlxReadConstants.CYC_AWAY_RH_CTRL_ENABLED =      19;
VlxReadConstants.CYC_AWAY_CO2_CTRL_ENABLED =     20;
VlxReadConstants.CYC_AWAY_SPEED_SETTING =        21;
VlxReadConstants.CYC_AWAY_AIR_TEMP_TARGET =      22;
VlxReadConstants.CYC_HOME_RH_CTRL_ENABLED =      25;
VlxReadConstants.CYC_HOME_CO2_CTRL_ENABLED =     26;
VlxReadConstants.CYC_HOME_SPEED_SETTING =        27;
VlxReadConstants.CYC_HOME_AIR_TEMP_TARGET =      28;
VlxReadConstants.CYC_BOOST_RH_CTRL_ENABLED =     31;
VlxReadConstants.CYC_BOOST_CO2_CTRL_ENABLED =    32;
VlxReadConstants.CYC_BOOST_SPEED_SETTING =       33;
VlxReadConstants.CYC_BOOST_AIR_TEMP_TARGET =     34;
VlxReadConstants.CYC_RELAY_MODE =                37;
VlxReadConstants.CYC_DIGITAL_INPUT_1_MODE =      38;
VlxReadConstants.CYC_DIGITAL_INPUT_2_MODE =      39;
VlxReadConstants.CYC_ANALOG_INPUT_MODE =         40;
VlxReadConstants.CYC_DEFROST_MODE =              44;
VlxReadConstants.CYC_DEFROST_RH_PARAM =          45;
VlxReadConstants.CYC_DEFROST_TEMP_PARAM =        46;
VlxReadConstants.CYC_MLV_WINTER_SETPOINT =       51;
VlxReadConstants.CYC_MLV_SUMMER_SETPOINT =       52;
VlxReadConstants.CYC_WATERHEATER_STORED_I =      54;
VlxReadConstants.CYC_INSTALLATION_DONE =         55;
VlxReadConstants.CYC_DEFROST_RH_OFFSET =         56;
VlxReadConstants.CYC_FILTER_CHANGE_INTERVAL =    57;
VlxReadConstants.CYC_CELL_TYPE =                 58;
VlxReadConstants.CYC_EXTRA_HEATER_TYPE =         59;
VlxReadConstants.CYC_POST_HEATER_TYPE =          60;
VlxReadConstants.CYC_BRANDING =                  61;
VlxReadConstants.CYC_SIDEDNESS =                 62;
VlxReadConstants.CYC_RH_LEVEL_MODE =             63;
VlxReadConstants.CYC_BOOST_TIME =                64;
VlxReadConstants.CYC_FIREPLACE_TIME =            65;
VlxReadConstants.CYC_FILTER_CHANGED_DAY =        66;
VlxReadConstants.CYC_FILTER_CHANGED_MONTH =      67;
VlxReadConstants.CYC_FILTER_CHANGED_YEAR =       68;
VlxReadConstants.CYC_SUPPLY_HEATING_ADJUST_MODE =69;
VlxReadConstants.CYC_MIN_DEFROST_TIME =          70;
VlxReadConstants.CYC_OPT_TEMP_SENSOR_MODE =      73;
VlxReadConstants.CYC_NUM_OF_CYC_SETTINGS =       76;

/* g_typhoon_settings  */
VlxReadConstants.CYC_LANGUAGE =                  1;
VlxReadConstants.CYC_PARENTAL_PASSWORD =         2;
VlxReadConstants.CYC_USER_PASSWORD =             3;
VlxReadConstants.CYC_ACCESS_LEVEL =              4;
VlxReadConstants.CYC_PARENTAL_CTRL_ENABLED =     5;
VlxReadConstants.CYC_BOOST_TIMER_ENABLED =       6;
VlxReadConstants.CYC_FIREPLACE_TIMER_ENABLED =   7;
VlxReadConstants.CYC_SUMMER_TIME_AUTO_ENAB =     8;
VlxReadConstants.CYC_12_HOUR_CLOCK_ENABLED =     9;
VlxReadConstants.CYC_SLEEP_DELAY =               10;
VlxReadConstants.CYC_BG_LIGHT_LEVEL =            11;
VlxReadConstants.CYC_EXTRA_TIMER_ENABLED =       12;
VlxReadConstants.CYC_NUM_OF_TYP_SETTINGS =       23;

/* g_self_test  */
VlxReadConstants.CYC_SUPP_FAN_TEST =             1;
VlxReadConstants.CYC_EXTR_FAN_TEST =             2;
VlxReadConstants.CYC_BY_PASS_TEST =              3;
VlxReadConstants.CYC_HEATER_TEST =               4;
VlxReadConstants.CYC_EXTRA_HEATER_TEST =         5;
VlxReadConstants.CYC_EFFICIENCY_TEST =           6;
VlxReadConstants.CYC_SUPPLY_EFFICIENCY =         7;
VlxReadConstants.CYC_EXTRACT_EFFICIENCY =        8;
VlxReadConstants.CYC_NUM_OF_SELF_TESTS =         16;

/* g_faults  */
VlxReadConstants.CYC_TOTAL_FAULT_COUNT =         1;
VlxReadConstants.CYC_FAULT_CODE =                2;
VlxReadConstants.CYC_FAULT_SEVERITY =            3;
VlxReadConstants.CYC_FAULT_FIRST_DATE =          4;
VlxReadConstants.CYC_FAULT_LAST_DATE =           5;
VlxReadConstants.CYC_FAULT_COUNT =               6;
VlxReadConstants.CYC_FAULT_ACTIVITY =            7;
VlxReadConstants.CYC_FAULT_CODE_2 =              8;
VlxReadConstants.CYC_FAULT_SEVERITY_2 =          9;
VlxReadConstants.CYC_FAULT_FIRST_DATE_2 =        10;
VlxReadConstants.CYC_FAULT_LAST_DATE_2 =         11;
VlxReadConstants.CYC_FAULT_COUNT_2 =             12;
VlxReadConstants.CYC_FAULT_ACTIVITY_2 =          13;
VlxReadConstants.CYC_FAULT_CODE_3 =              14;
VlxReadConstants.CYC_FAULT_SEVERITY_3 =          15;
VlxReadConstants.CYC_FAULT_FIRST_DATE_3 =        16;
VlxReadConstants.CYC_FAULT_LAST_DATE_3 =         17;
VlxReadConstants.CYC_FAULT_COUNT_3 =             18;
VlxReadConstants.CYC_FAULT_ACTIVITY_3 =          19;
VlxReadConstants.CYC_FAULT_CODE_4 =              20;
VlxReadConstants.CYC_FAULT_SEVERITY_4 =          21;
VlxReadConstants.CYC_FAULT_FIRST_DATE_4 =        22;
VlxReadConstants.CYC_FAULT_LAST_DATE_4 =         23;
VlxReadConstants.CYC_FAULT_COUNT_4 =             24;
VlxReadConstants.CYC_FAULT_ACTIVITY_4 =          25;
VlxReadConstants.CYC_FAULT_CODE_5 =              26;
VlxReadConstants.CYC_FAULT_SEVERITY_5 =          27;
VlxReadConstants.CYC_FAULT_FIRST_DATE_5 =        28;
VlxReadConstants.CYC_FAULT_LAST_DATE_5 =         29;
VlxReadConstants.CYC_FAULT_COUNT_5 =             30;
VlxReadConstants.CYC_FAULT_ACTIVITY_5 =          31;
VlxReadConstants.CYC_FAULT_CODE_6 =              32;
VlxReadConstants.CYC_FAULT_SEVERITY_6 =          33;
VlxReadConstants.CYC_FAULT_FIRST_DATE_6 =        34;
VlxReadConstants.CYC_FAULT_LAST_DATE_6 =         35;
VlxReadConstants.CYC_FAULT_COUNT_6 =             36;
VlxReadConstants.CYC_FAULT_ACTIVITY_6 =          37;
VlxReadConstants.CYC_FAULT_CODE_7 =              38;
VlxReadConstants.CYC_FAULT_SEVERITY_7 =          39;
VlxReadConstants.CYC_FAULT_FIRST_DATE_7 =        40;
VlxReadConstants.CYC_FAULT_LAST_DATE_7 =         41;
VlxReadConstants.CYC_FAULT_COUNT_7 =             42;
VlxReadConstants.CYC_FAULT_ACTIVITY_7 =          43;
VlxReadConstants.CYC_FAULT_CODE_8 =              44;
VlxReadConstants.CYC_FAULT_SEVERITY_8 =          45;
VlxReadConstants.CYC_FAULT_FIRST_DATE_8 =        46;
VlxReadConstants.CYC_FAULT_LAST_DATE_8 =         47;
VlxReadConstants.CYC_FAULT_COUNT_8 =             48;
VlxReadConstants.CYC_FAULT_ACTIVITY_8 =          49;
VlxReadConstants.CYC_FAULT_CODE_9 =              50;
VlxReadConstants.CYC_FAULT_SEVERITY_9 =          51;
VlxReadConstants.CYC_FAULT_FIRST_DATE_9 =        52;
VlxReadConstants.CYC_FAULT_LAST_DATE_9 =         53;
VlxReadConstants.CYC_FAULT_COUNT_9 =             54;
VlxReadConstants.CYC_FAULT_ACTIVITY_9 =          55;
VlxReadConstants.CYC_FAULT_CODE_10 =             56;
VlxReadConstants.CYC_FAULT_SEVERITY_10 =         57;
VlxReadConstants.CYC_FAULT_FIRST_DATE_10 =       58;
VlxReadConstants.CYC_FAULT_LAST_DATE_10 =        59;
VlxReadConstants.CYC_FAULT_COUNT_10 =            60;
VlxReadConstants.CYC_FAULT_ACTIVITY_10 =         61;
VlxReadConstants.CYC_FAULT_CODE_11 =             62;
VlxReadConstants.CYC_FAULT_SEVERITY_11 =         63;
VlxReadConstants.CYC_FAULT_FIRST_DATE_11 =       64;
VlxReadConstants.CYC_FAULT_LAST_DATE_11 =        65;
VlxReadConstants.CYC_FAULT_COUNT_11 =            66;
VlxReadConstants.CYC_FAULT_ACTIVITY_11 =         67;
VlxReadConstants.CYC_FAULT_CODE_12 =             68;
VlxReadConstants.CYC_FAULT_SEVERITY_12 =         69;
VlxReadConstants.CYC_FAULT_FIRST_DATE_12 =       70;
VlxReadConstants.CYC_FAULT_LAST_DATE_12 =        71;
VlxReadConstants.CYC_FAULT_COUNT_12 =            72;
VlxReadConstants.CYC_FAULT_ACTIVITY_12 =         73;
VlxReadConstants.CYC_FAULT_CODE_13 =             74;
VlxReadConstants.CYC_FAULT_SEVERITY_13 =         75;
VlxReadConstants.CYC_FAULT_FIRST_DATE_13 =       76;
VlxReadConstants.CYC_FAULT_LAST_DATE_13 =        77;
VlxReadConstants.CYC_FAULT_COUNT_13 =            78;
VlxReadConstants.CYC_FAULT_ACTIVITY_13 =         79;
VlxReadConstants.CYC_FAULT_CODE_14 =             80;
VlxReadConstants.CYC_FAULT_SEVERITY_14 =         81;
VlxReadConstants.CYC_FAULT_FIRST_DATE_14 =       82;
VlxReadConstants.CYC_FAULT_LAST_DATE_14 =        83;
VlxReadConstants.CYC_FAULT_COUNT_14 =            84;
VlxReadConstants.CYC_FAULT_ACTIVITY_14 =         85;
VlxReadConstants.CYC_FAULT_CODE_15 =             86;
VlxReadConstants.CYC_FAULT_SEVERITY_15 =         87;
VlxReadConstants.CYC_FAULT_FIRST_DATE_15 =       88;
VlxReadConstants.CYC_FAULT_LAST_DATE_15 =        89;
VlxReadConstants.CYC_FAULT_COUNT_15 =            90;
VlxReadConstants.CYC_FAULT_ACTIVITY_15 =         91;
VlxReadConstants.CYC_FAULT_CODE_16 =             92;
VlxReadConstants.CYC_FAULT_SEVERITY_16 =         93;
VlxReadConstants.CYC_FAULT_FIRST_DATE_16 =       94;
VlxReadConstants.CYC_FAULT_LAST_DATE_16 =        95;
VlxReadConstants.CYC_FAULT_COUNT_16 =            96;
VlxReadConstants.CYC_FAULT_ACTIVITY_16 =         97;
VlxReadConstants.CYC_FAULT_CODE_17 =             98;
VlxReadConstants.CYC_FAULT_SEVERITY_17 =         99;
VlxReadConstants.CYC_FAULT_FIRST_DATE_17 =       100;
VlxReadConstants.CYC_FAULT_LAST_DATE_17 =        101;
VlxReadConstants.CYC_FAULT_COUNT_17 =            102;
VlxReadConstants.CYC_FAULT_ACTIVITY_17 =         103;
VlxReadConstants.CYC_FAULT_CODE_18 =             104;
VlxReadConstants.CYC_FAULT_SEVERITY_18 =         105;
VlxReadConstants.CYC_FAULT_FIRST_DATE_18 =       106;
VlxReadConstants.CYC_FAULT_LAST_DATE_18 =        107;
VlxReadConstants.CYC_FAULT_COUNT_18 =            108;
VlxReadConstants.CYC_FAULT_ACTIVITY_18 =         109;
VlxReadConstants.CYC_FAULT_CODE_19 =             110;
VlxReadConstants.CYC_FAULT_SEVERITY_19 =         111;
VlxReadConstants.CYC_FAULT_FIRST_DATE_19 =       112;
VlxReadConstants.CYC_FAULT_LAST_DATE_19 =        113;
VlxReadConstants.CYC_FAULT_COUNT_19 =            114;
VlxReadConstants.CYC_FAULT_ACTIVITY_19 =         115;
VlxReadConstants.CYC_FAULT_CODE_20 =             116;
VlxReadConstants.CYC_FAULT_SEVERITY_20 =         117;
VlxReadConstants.CYC_FAULT_FIRST_DATE_20 =       118;
VlxReadConstants.CYC_FAULT_LAST_DATE_20 =        119;
VlxReadConstants.CYC_FAULT_COUNT_20 =            120;
VlxReadConstants.CYC_FAULT_ACTIVITY_20 =         121;
VlxReadConstants.CYC_FAULT_CODE_21 =             122;
VlxReadConstants.CYC_FAULT_SEVERITY_21 =         123;
VlxReadConstants.CYC_FAULT_FIRST_DATE_21 =       124;
VlxReadConstants.CYC_FAULT_LAST_DATE_21 =        125;
VlxReadConstants.CYC_FAULT_COUNT_21 =            126;
VlxReadConstants.CYC_FAULT_ACTIVITY_21 =         127;
VlxReadConstants.CYC_FAULT_CODE_22 =             128;
VlxReadConstants.CYC_FAULT_SEVERITY_22 =         129;
VlxReadConstants.CYC_FAULT_FIRST_DATE_22 =       130;
VlxReadConstants.CYC_FAULT_LAST_DATE_22 =        131;
VlxReadConstants.CYC_FAULT_COUNT_22 =            132;
VlxReadConstants.CYC_FAULT_ACTIVITY_22 =         133;
VlxReadConstants.CYC_FAULT_CODE_23 =             134;
VlxReadConstants.CYC_FAULT_SEVERITY_23 =         135;
VlxReadConstants.CYC_FAULT_FIRST_DATE_23 =       136;
VlxReadConstants.CYC_FAULT_LAST_DATE_23 =        137;
VlxReadConstants.CYC_FAULT_COUNT_23 =            138;
VlxReadConstants.CYC_FAULT_ACTIVITY_23 =         139;
VlxReadConstants.CYC_FAULT_CODE_24 =             140;
VlxReadConstants.CYC_FAULT_SEVERITY_24 =         141;
VlxReadConstants.CYC_FAULT_FIRST_DATE_24 =       142;
VlxReadConstants.CYC_FAULT_LAST_DATE_24 =        143;
VlxReadConstants.CYC_FAULT_COUNT_24 =            144;
VlxReadConstants.CYC_FAULT_ACTIVITY_24 =         145;
VlxReadConstants.CYC_FAULT_CODE_25 =             146;
VlxReadConstants.CYC_FAULT_SEVERITY_25 =         147;
VlxReadConstants.CYC_FAULT_FIRST_DATE_25 =       148;
VlxReadConstants.CYC_FAULT_LAST_DATE_25 =        149;
VlxReadConstants.CYC_FAULT_COUNT_25 =            150;
VlxReadConstants.CYC_FAULT_ACTIVITY_25 =         151;
VlxReadConstants.CYC_FAULT_CODE_26 =             152;
VlxReadConstants.CYC_FAULT_SEVERITY_26 =         153;
VlxReadConstants.CYC_FAULT_FIRST_DATE_26 =       154;
VlxReadConstants.CYC_FAULT_LAST_DATE_26 =        155;
VlxReadConstants.CYC_FAULT_COUNT_26 =            156;
VlxReadConstants.CYC_FAULT_ACTIVITY_26 =         157;
VlxReadConstants.CYC_FAULT_CODE_27 =             158;
VlxReadConstants.CYC_FAULT_SEVERITY_27 =         159;
VlxReadConstants.CYC_FAULT_FIRST_DATE_27 =       160;
VlxReadConstants.CYC_FAULT_LAST_DATE_27 =        161;
VlxReadConstants.CYC_FAULT_COUNT_27 =            162;
VlxReadConstants.CYC_FAULT_ACTIVITY_27 =         163;
VlxReadConstants.CYC_FAULT_CODE_28 =             164;
VlxReadConstants.CYC_FAULT_SEVERITY_28 =         165;
VlxReadConstants.CYC_FAULT_FIRST_DATE_28 =       166;
VlxReadConstants.CYC_FAULT_LAST_DATE_28 =        167;
VlxReadConstants.CYC_FAULT_COUNT_28 =            168;
VlxReadConstants.CYC_FAULT_ACTIVITY_28 =         169;
VlxReadConstants.CYC_FAULT_CODE_29 =             170;
VlxReadConstants.CYC_FAULT_SEVERITY_29 =         171;
VlxReadConstants.CYC_FAULT_FIRST_DATE_29 =       172;
VlxReadConstants.CYC_FAULT_LAST_DATE_29 =        173;
VlxReadConstants.CYC_FAULT_COUNT_29 =            174;
VlxReadConstants.CYC_FAULT_ACTIVITY_29 =         175;
VlxReadConstants.CYC_FAULT_CODE_30 =             176;
VlxReadConstants.CYC_FAULT_SEVERITY_30 =         177;
VlxReadConstants.CYC_FAULT_FIRST_DATE_30 =       178;
VlxReadConstants.CYC_FAULT_LAST_DATE_30 =        179;
VlxReadConstants.CYC_FAULT_COUNT_30 =            180;
VlxReadConstants.CYC_FAULT_ACTIVITY_30 =         181;
VlxReadConstants.CYC_FAULT_CODE_31 =             182;
VlxReadConstants.CYC_FAULT_SEVERITY_31 =         183;
VlxReadConstants.CYC_FAULT_FIRST_DATE_31 =       184;
VlxReadConstants.CYC_FAULT_LAST_DATE_31 =        185;
VlxReadConstants.CYC_FAULT_COUNT_31 =            186;
VlxReadConstants.CYC_FAULT_ACTIVITY_31 =         187;
VlxReadConstants.CYC_FAULT_CODE_32 =             188;
VlxReadConstants.CYC_FAULT_SEVERITY_32 =         189;
VlxReadConstants.CYC_FAULT_FIRST_DATE_32 =       190;
VlxReadConstants.CYC_FAULT_LAST_DATE_32 =        191;
VlxReadConstants.CYC_FAULT_COUNT_32 =            192;
VlxReadConstants.CYC_FAULT_ACTIVITY_32 =         193;
VlxReadConstants.CYC_FAULT_CODE_33 =             194;
VlxReadConstants.CYC_FAULT_SEVERITY_33 =         195;
VlxReadConstants.CYC_FAULT_FIRST_DATE_33 =       196;
VlxReadConstants.CYC_FAULT_LAST_DATE_33 =        197;
VlxReadConstants.CYC_FAULT_COUNT_33 =            198;
VlxReadConstants.CYC_FAULT_ACTIVITY_33 =         199;
VlxReadConstants.CYC_NUM_OF_FAULTS =             200;

/* g_cyclone_weekly_schedule  */
VlxReadConstants.CYC_SCHEDULE_MONDAY_00 =        1;
VlxReadConstants.CYC_SCHEDULE_MONDAY_01 =        2;
VlxReadConstants.CYC_SCHEDULE_MONDAY_02 =        3;
VlxReadConstants.CYC_SCHEDULE_MONDAY_03 =        4;
VlxReadConstants.CYC_SCHEDULE_MONDAY_04 =        5;
VlxReadConstants.CYC_SCHEDULE_MONDAY_05 =        6;
VlxReadConstants.CYC_SCHEDULE_MONDAY_06 =        7;
VlxReadConstants.CYC_SCHEDULE_MONDAY_07 =        8;
VlxReadConstants.CYC_SCHEDULE_MONDAY_08 =        9;
VlxReadConstants.CYC_SCHEDULE_MONDAY_09 =        10;
VlxReadConstants.CYC_SCHEDULE_MONDAY_10 =        11;
VlxReadConstants.CYC_SCHEDULE_MONDAY_11 =        12;
VlxReadConstants.CYC_SCHEDULE_MONDAY_12 =        13;
VlxReadConstants.CYC_SCHEDULE_MONDAY_13 =        14;
VlxReadConstants.CYC_SCHEDULE_MONDAY_14 =        15;
VlxReadConstants.CYC_SCHEDULE_MONDAY_15 =        16;
VlxReadConstants.CYC_SCHEDULE_MONDAY_16 =        17;
VlxReadConstants.CYC_SCHEDULE_MONDAY_17 =        18;
VlxReadConstants.CYC_SCHEDULE_MONDAY_18 =        19;
VlxReadConstants.CYC_SCHEDULE_MONDAY_19 =        20;
VlxReadConstants.CYC_SCHEDULE_MONDAY_20 =        21;
VlxReadConstants.CYC_SCHEDULE_MONDAY_21 =        22;
VlxReadConstants.CYC_SCHEDULE_MONDAY_22 =        23;
VlxReadConstants.CYC_SCHEDULE_MONDAY_23 =        24;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_00 =       25;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_01 =       26;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_02 =       27;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_03 =       28;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_04 =       29;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_05 =       30;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_06 =       31;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_07 =       32;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_08 =       33;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_09 =       34;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_10 =       35;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_11 =       36;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_12 =       37;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_13 =       38;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_14 =       39;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_15 =       40;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_16 =       41;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_17 =       42;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_18 =       43;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_19 =       44;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_20 =       45;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_21 =       46;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_22 =       47;
VlxReadConstants.CYC_SCHEDULE_TUESDAY_23 =       48;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_00 =     49;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_01 =     50;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_02 =     51;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_03 =     52;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_04 =     53;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_05 =     54;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_06 =     55;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_07 =     56;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_08 =     57;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_09 =     58;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_10 =     59;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_11 =     60;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_12 =     61;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_13 =     62;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_14 =     63;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_15 =     64;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_16 =     65;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_17 =     66;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_18 =     67;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_19 =     68;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_20 =     69;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_21 =     70;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_22 =     71;
VlxReadConstants.CYC_SCHEDULE_WEDNESDAY_23 =     72;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_00 =      73;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_01 =      74;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_02 =      75;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_03 =      76;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_04 =      77;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_05 =      78;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_06 =      79;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_07 =      80;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_08 =      81;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_09 =      82;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_10 =      83;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_11 =      84;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_12 =      85;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_13 =      86;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_14 =      87;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_15 =      88;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_16 =      89;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_17 =      90;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_18 =      91;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_19 =      92;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_20 =      93;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_21 =      94;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_22 =      95;
VlxReadConstants.CYC_SCHEDULE_THURSDAY_23 =      96;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_00 =        97;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_01 =        98;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_02 =        99;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_03 =        100;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_04 =        101;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_05 =        102;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_06 =        103;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_07 =        104;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_08 =        105;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_09 =        106;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_10 =        107;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_11 =        108;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_12 =        109;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_13 =        110;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_14 =        111;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_15 =        112;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_16 =        113;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_17 =        114;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_18 =        115;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_19 =        116;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_20 =        117;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_21 =        118;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_22 =        119;
VlxReadConstants.CYC_SCHEDULE_FRIDAY_23 =        120;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_00 =      121;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_01 =      122;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_02 =      123;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_03 =      124;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_04 =      125;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_05 =      126;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_06 =      127;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_07 =      128;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_08 =      129;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_09 =      130;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_10 =      131;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_11 =      132;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_12 =      133;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_13 =      134;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_14 =      135;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_15 =      136;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_16 =      137;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_17 =      138;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_18 =      139;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_19 =      140;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_20 =      141;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_21 =      142;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_22 =      143;
VlxReadConstants.CYC_SCHEDULE_SATURDAY_23 =      144;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_00 =        145;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_01 =        146;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_02 =        147;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_03 =        148;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_04 =        149;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_05 =        150;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_06 =        151;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_07 =        152;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_08 =        153;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_09 =        154;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_10 =        155;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_11 =        156;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_12 =        157;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_13 =        158;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_14 =        159;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_15 =        160;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_16 =        161;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_17 =        162;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_18 =        163;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_19 =        164;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_20 =        165;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_21 =        166;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_22 =        167;
VlxReadConstants.CYC_SCHEDULE_SUNDAY_23 =        168;
VlxReadConstants.CYC_NUM_OF_SCHEDULED_EVENTS =   169;

/**
 * Created by janne.hamalainen on 9.9.2014.
 * Extra constanst are modbus "addresses" that are used
 * only in datamodel. These values are never transferred as such
 * to the device. Instead iowebdatatodevice.js class handles the
 * parameters and sends valid data to the device using real modbus
 * addresses. This is needed since most of the data stored in the
 * datamodel is not suitable for the device as such and needs some
 * kind of conversion.
 */



// Extra Constants defined just for DataModel use
// These ID Values in DataModel must be unique

var VlxDevConstants = VlxDevConstants || {};

var KExtParamBase = 0x10000; // 65536


VlxDevConstants.EXT_BROWSER_IP = KExtParamBase + 0;
VlxDevConstants.EXT_NUM_OF_RH_SENSORS = KExtParamBase + 1;
VlxDevConstants.EXT_NUM_OF_CO2_SENSORS = KExtParamBase + 2;
VlxDevConstants.EXT_CYC_APPL_SW_VERSION = KExtParamBase + 3;



VlxDevConstants.EXT_TEMP_NOW_EXTRACT_AIR = KExtParamBase + 4;
VlxDevConstants.EXT_TEMP_NOW_SUPPLY_AIR = KExtParamBase + 5;
VlxDevConstants.EXT_TEMP_NOW_OUTDOOR_AIR = KExtParamBase + 6;
VlxDevConstants.EXT_TEMP_NOW_EXHAUST_AIR = KExtParamBase + 7;
VlxDevConstants.EXT_MODBUS_STOPBIT = KExtParamBase + 8;
VlxDevConstants.EXT_MODBUS_PARITY = KExtParamBase + 9;
VlxDevConstants.EXT_CYC_TIME = KExtParamBase + 10;
VlxDevConstants.EXT_CYC_DATE = KExtParamBase + 11;
VlxDevConstants.EXT_CYC_SERIAL_NUMBER = KExtParamBase + 12;
VlxDevConstants.EXT_CYC_FILTER_CHANGED_DATE = KExtParamBase + 13;
VlxDevConstants.EXT_CYC_ACTIVE_PROFILE = KExtParamBase + 14;
VlxDevConstants.EXT_CYC_PROFILE_SUPPLY_AIR = KExtParamBase + 15;
VlxDevConstants.EXT_CYC_PROFILE_OUTDOOR_AIR = KExtParamBase + 16;
VlxDevConstants.EXT_CYC_CURRENT_UP_TIME = KExtParamBase + 17;
VlxDevConstants.EXT_CYC_TOTAL_UP_TIME = KExtParamBase + 18;
VlxDevConstants.EXT_REFRESH_GRAPHS = KExtParamBase + 19;
VlxDevConstants.EXT_BROWSER_PORT = KExtParamBase + 20;
VlxDevConstants.EXT_CYC_WEEKLY_EVENTS = KExtParamBase + 21;
VlxDevConstants.EXT_CYC_FAULT_ARRAY = KExtParamBase + 22;
VlxDevConstants.EXT_CYC_START_SELFTEST = KExtParamBase + 23;
VlxDevConstants.EXT_CYC_POWER = KExtParamBase + 24;
VlxDevConstants.EXT_CYC_TIME = KExtParamBase + 25;
VlxDevConstants.EXT_CYC_DATE = KExtParamBase + 26;
VlxDevConstants.EXT_LISTENER_ENABLED = KExtParamBase + 27;
VlxDevConstants.EXT_SHOW_WIZARD = KExtParamBase + 28;
VlxDevConstants.EXT_CYC_CONFIG_NUMBER = KExtParamBase + 29;
VlxDevConstants.EXT_PAGES_LOADED = KExtParamBase + 30;
VlxDevConstants.EXT_ERROR_SOLVED = KExtParamBase + 31;
VlxDevConstants.EXT_CYC_SUPP_FAN_SPEED = KExtParamBase + 32;
VlxDevConstants.EXT_CYC_EXTR_FAN_SPEED = KExtParamBase + 33;
VlxDevConstants.EXT_GRAPH_DURATION = KExtParamBase + 34;
VlxDevConstants.EXT_GRAPH_DURATION_IN_DAYS = KExtParamBase + 35;
VlxDevConstants.EXT_TEST_MODE_SWITCH = KExtParamBase + 36;
VlxDevConstants.EXT_SERVICE_MODE = KExtParamBase + 37;
VlxDevConstants.EXT_DATA_SC = KExtParamBase + 38;
VlxDevConstants.EXT_CONFIG_BUTTON = KExtParamBase + 39;
VlxDevConstants.EXT_CONFIG_DONE = KExtParamBase + 40;
VlxDevConstants.EXT_WIZARD_DONE = KExtParamBase + 41;
VlxDevConstants.EXT_OFFLINE_MODE = KExtParamBase + 42;
VlxDevConstants.EXT_HOME_AIR_TEMP_TARGET = KExtParamBase + 43;
VlxDevConstants.EXT_AWAY_AIR_TEMP_TARGET = KExtParamBase + 44;
VlxDevConstants.EXT_BOOST_AIR_TEMP_TARGET = KExtParamBase + 45;
VlxDevConstants.EXT_BOOT_FINISHED = KExtParamBase + 46;
VlxDevConstants.EXT_USER_PASSWORD = KExtParamBase + 47;
// KExtParamBase+48 is free
VlxDevConstants.EXT_DATA_POLLING = KExtParamBase + 49;
VlxDevConstants.EXT_DATA_POLLING_INTERVAL = KExtParamBase + 50;
VlxDevConstants.EXT_DATA_POLLING_ENABLED = KExtParamBase + 51;
VlxDevConstants.EXT_DATA_POLLING_UI_UPDATE_ENABLED = KExtParamBase + 52;
VlxDevConstants.EXT_CLEAR_WEEK_EVENTS = KExtParamBase + 53;
VlxDevConstants.EXT_CYC_OLD_WEEKLY_EVENTS = KExtParamBase + 54;
VlxDevConstants.EXT_DIGITAL_INPUT_1_MODE = KExtParamBase + 55;
VlxDevConstants.EXT_DIGITAL_INPUT_2_MODE = KExtParamBase + 56;
VlxDevConstants.EXT_ANALOG_INPUT_MODE = KExtParamBase + 57;
VlxDevConstants.EXT_EXTRA_AIR_TEMP_TARGET = KExtParamBase + 58;
VlxDevConstants.EXT_EXTRA_EXTR_FAN = KExtParamBase + 59;
VlxDevConstants.EXT_EXTRA_SUPP_FAN = KExtParamBase + 60;
VlxDevConstants.EXT_EXTRA_TIME = KExtParamBase + 61;
VlxDevConstants.EXT_EXTRA_TIMER_ENABLED = KExtParamBase + 62;
VlxDevConstants.EXT_MACHINE_TYPE = KExtParamBase + 63;
VlxDevConstants.EXT_DEFROST_ON = KExtParamBase + 64;
VlxDevConstants.EXT_FILTER_CHANGE_INTERVAL = KExtParamBase + 65;
VlxDevConstants.EXT_BOOST_TIMER_ENABLED = KExtParamBase + 66;
VlxDevConstants.EXT_BOOST_TIME = KExtParamBase + 67;
VlxDevConstants.EXT_CYC_DEFROST_TEMP_PARAM = KExtParamBase + 68;
VlxDevConstants.EXT_CYC_DEFROST_RH_OFFSET = KExtParamBase + 69;
VlxDevConstants.EXT_LISTENER_SKIPPER = KExtParamBase + 70;
VlxDevConstants.EXT_CYC_EXTRA_HEATER_TYPE = KExtParamBase + 71;
VlxDevConstants.EXT_CYC_POST_HEATER_TYPE = KExtParamBase + 72;
VlxDevConstants.EXT_CYC_DEFROSTING = KExtParamBase + 73;
VlxDevConstants.EXT_INFOBANNER_CONTENT = KExtParamBase + 74;
VlxDevConstants.EXT_UUID_STRING = KExtParamBase + 75;
VlxDevConstants.EXT_CLOUD_CONNECT = KExtParamBase + 76;
VlxDevConstants.EXT_CLOUD_DISCONNECT = KExtParamBase + 77;
VlxDevConstants.EXT_LANGUAGE = KExtParamBase + 78;
VlxDevConstants.EXT_USERNAME = KExtParamBase + 79;
VlxDevConstants.EXT_LC_CHANGED = KExtParamBase + 80;
VlxDevConstants.EXT_GRANT_ACCESS_SEND = KExtParamBase + 81;
VlxDevConstants.EXT_GRANT_ACCESS_EMAIL = KExtParamBase + 82;
VlxDevConstants.EXT_GRANT_ACCESS_EMAIL_VALID = KExtParamBase + 83;
VlxDevConstants.EXT_GRANT_ACCESS_EMAIL_LIST = KExtParamBase + 84;
VlxDevConstants.EXT_CLOUD_CONNECTION_STATUS = KExtParamBase + 85;



VlxDevConstants.EXT_ACCESSRIGHTS_ARRAY = KExtParamBase + 86;

// factory settings
var KExtParamFactoryBase = 0x20000;
VlxDevConstants.EXT_CYC_RESTORE_FACTORY_SETTINGS = KExtParamFactoryBase + 5;
VlxDevConstants.EXT_CYC_SAVE_INSTALLATION_SETTINGS = KExtParamFactoryBase + 6;
VlxDevConstants.EXT_CYC_RESTORE_INSTALLATION_SETTINGS = KExtParamFactoryBase + 7;
VlxDevConstants.EXT_CYC_SAVE_USER_SETTINGS = KExtParamFactoryBase + 8;
VlxDevConstants.EXT_CYC_RESTORE_USER_SETTINGS = KExtParamFactoryBase + 9;
VlxDevConstants.EXT_CYC_RESTORE_SERVICE_MODE = KExtParamFactoryBase + 10;


// sensors
var KExtParamSensorBase = 0x30000;
VlxDevConstants.EXT_SEN_ANALOG_SENSOR_INPUT = KExtParamSensorBase + 4372;
VlxDevConstants.EXT_SEN_RH_SENSOR_0 = KExtParamSensorBase + 4373;
VlxDevConstants.EXT_SEN_RH_SENSOR_1 = KExtParamSensorBase + 4374;
VlxDevConstants.EXT_SEN_RH_SENSOR_2 = KExtParamSensorBase + 4375;
VlxDevConstants.EXT_SEN_RH_SENSOR_3 = KExtParamSensorBase + 4376;
VlxDevConstants.EXT_SEN_RH_SENSOR_4 = KExtParamSensorBase + 4377;
VlxDevConstants.EXT_SEN_RH_SENSOR_5 = KExtParamSensorBase + 4378;
VlxDevConstants.EXT_SEN_CO2_SENSOR_0 = KExtParamSensorBase + 4379;
VlxDevConstants.EXT_SEN_CO2_SENSOR_1 = KExtParamSensorBase + 4380;
VlxDevConstants.EXT_SEN_CO2_SENSOR_2 = KExtParamSensorBase + 4381;
VlxDevConstants.EXT_SEN_CO2_SENSOR_3 = KExtParamSensorBase + 4382;
VlxDevConstants.EXT_SEN_CO2_SENSOR_4 = KExtParamSensorBase + 4383;
VlxDevConstants.EXT_SEN_CO2_SENSOR_5 = KExtParamSensorBase + 4384;



//access rights array
VlxDevConstants.EXT_SEN_CO2_SENSOR_5 = KExtParamSensorBase + 4385;


// This file was automatically generated by textmap.rb
// from ./resource/Text_map_Vallox.xlsx on Mon Oct 10 11:07:47 2016.
// Please do not edit.
var TextMap = TextMap || {
  "id_text_blanco": [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  "id_text_ongoing": [
    "(...)",
    "(...)",
    "(...)",
    "(...)",
    "(...)",
    "(...)",
    "(...)",
    "(...)",
    "(...)",
    "(...)",
    "(...)"
  ],
  "id_text_menu_connecting": [
    "Connecting. . .",
    "Yhdistää. . .",
    "Ansluter. . .",
    "Wird verbunden. . .",
    "Connecter...",
    "Connecter...",
    "Ühendab...",
    "Tilslutter…",
    "podlaczanie",
    "Savienojas...",
    "Jungiamasi..."
  ],
  "id_text_title_language": [
    "Language",
    "Kieli",
    "Språk",
    "Sprache",
    "Langue",
    "Taal",
    "Keel",
    "Sprog",
    "jezyk",
    "Valoda",
    "Kalba"
  ],
  "id_txt_language_not_translated": [
    "English",
    "Suomi",
    "Svenska",
    "Deutsch",
    "Francais",
    "Dutch",
    "Eesti",
    "Dansk",
    "Polski",
    "Latviesu",
    "Lietuviu"
  ],
  "id_text_title_time_date": [
    "Time and date",
    "Aika ja pvm",
    "Tidpunkt och datum",
    "Zeit, Datum",
    "Heure et date",
    "Tijd en datum",
    "Kell ja kuupäev",
    "Tid og dato",
    "data i czas",
    "Laiks un datums",
    "Laikas ir data"
  ],
  "id_text_value_on": [
    "On",
    "Päällä",
    "På",
    "Ein",
    "On",
    "Aan",
    "Sees",
    "On",
    "wlaczony",
    "Ieslegts",
    "Ij."
  ],
  "id_text_value_off": [
    "Off",
    "Pois",
    "Av",
    "Aus",
    "Off",
    "Uit",
    "Väljas",
    "Off",
    "wylaczony",
    "Izslegts",
    "Isj."
  ],
  "id_text_setting_name_24h": [
    "24-Hour Time",
    "24 h",
    "24 h",
    "24 h",
    "24h",
    "24u",
    "24 h",
    "24 h",
    "24 godzinny czas",
    "24-stundu rezims",
    "24 val."
  ],
  "id_text_setting_name_daysaving": [
    "Dayl.Saving Time",
    "Kesäaika",
    "Sommar-vintertid",
    "Sommerzeit",
    "Dérivation été/hiver",
    "Zomer- / wintertijd",
    "Suveaeg",
    "Sommer-vintertid",
    "oszczednosc czasu",
    "Vasaras laiks",
    "Vasaros laikas"
  ],
  "id_text_dialog_title_installation": [
    "Setup done",
    "Käyttöönotto tehty",
    "Ibruktagandet är klart",
    "Inbetriebnahme fertig",
    "Configuration fait",
    "Instellingen uitgevoerd",
    "Seadistus tehtud",
    "Opsætning færdig",
    "ustawienia gotowe",
    "Uzstad. pabeigta",
    "Saranka atlikta"
  ],
  "id_text_dialog_content_installation1": [
    "The next phase consist of",
    "Seuraavaksi tehdään",
    "Nästa fas består av",
    "Nächste Phase:",
    "La phase suivante consistent en",
    "De volgende stap is",
    "Järgmiseks tehakse ",
    "Næste fase består af ",
    "Kolejny etap sklada sie z ",
    "Nakamais solis ir",
    "Kita faze susideda is"
  ],
  "id_text_dialog_content_installation2": [
    "expert adjustments.",
    "koneen erikoisasetukset.",
    "specialinställningar.",
    "spezielle Einstellungen",
    "rajustements d'experts.",
    "aanpassing van deskundigen",
    "seadme eriseadistused.",
    "Avancerede indstillinger",
    "Ustawienia zaawansowane",
    "specializ. iestatijumi",
    "eksperto reguliavimu."
  ],
  "id_text_dialog_content_installation3": [
    "Would you like to proceed?",
    "Haluatko jatkaa?",
    "Vill du fortsätta?",
    "Wollen Sie fortfahren?",
    "Voulez-vous continuer?",
    "Wilt u verder gaan?",
    "Kas soovid jätkata?",
    "Vil du fortsætte?",
    "Czy chcesz kontynuowac?",
    "Velaties turpinat?",
    "Ar norite testi?"
  ],
  "id_text_title_lock_code": [
    "Lock code",
    "Lukkokoodi",
    "Låskod",
    "Sperrcode",
    "Code de verrouillage",
    "Vergrendelingscode",
    "Parool",
    "Låsekode",
    "Kod blokady",
    "Blokesanas kods",
    "Blok. kodas"
  ],
  "id_text_password": [
    "Lock code",
    "Lukkokoodi",
    "Låskod",
    "Sperrcode",
    "Code de verrouillage",
    "Vergrendelingscode",
    "Parool",
    "Låsekode ",
    "Kod blokady",
    "Blokesanas kods",
    "Blok. kodas"
  ],
  "id_text_title_access_rights": [
    "Access rights",
    "Käyttöoikeus",
    "Användarrätt",
    "Berechtigungen",
    "Droits d'accès",
    "Toegangsrechten",
    "Kasutusõigus",
    "Brugerrettighed",
    "prawa dostepu",
    "Piekluves tiesibas",
    "Prieigos teises"
  ],
  "id_text_value_name_level": [
    "User level",
    "Käyttäjätaso",
    "Användarnivå",
    "Benutzerebene",
    "Niveau utilisateur",
    "Gebruikersniveau",
    "Kasutaja tase",
    "Brugerniveau",
    "poziom uzytkownika",
    "Lietotaja limenis",
    "Naud. lygis"
  ],
  "id_text_value_level_very_limited": [
    "Limited",
    "Suppea",
    "Begränsad",
    "Begrenzt",
    "Limité",
    "Beperkt",
    "Limiteeritud",
    "Begrænset",
    "Ograniczone",
    "Ierobezots",
    "Ribotas"
  ],
  "id_text_value_level_limited": [
    "Normal",
    "Normaali",
    "Normal",
    "Normal",
    "Normal",
    "Normaal",
    "Normaalne",
    "Normal",
    "Normalne",
    "Standarta",
    "Standart."
  ],
  "id_text_value_level_free": [
    "Extensive",
    "Laaja",
    "Omfattande",
    "Unbegrenzt",
    "Extensif",
    "Uitgebreid",
    "Laiendatud",
    "Omfattende",
    "Rozszerzone",
    "Paplasinats",
    "Isplestin."
  ],
  "id_text_value_name_parental": [
    "Parental Controls",
    "Lapsilukko",
    "Föräldrakontroll",
    "Kindersicherung",
    "Contrôle parental",
    "Ouderlijk toezicht",
    "Lapselukk",
    "Børnesikring",
    "Ochrona rodzicielska",
    "Vecaku kontrole",
    "Aps. nuo vaiku vald."
  ],
  "id_text_value_name_parental_code": [
    "Parental Code",
    "Lapsil. Koodi",
    "Kod för föräldrakontroll",
    "Code Kindersich.",
    "Code parental",
    "Ouderlijke code",
    "Lapseluku kood",
    "Kode for børnesikring",
    "Kod rodzicielski",
    "Vecaku kods",
    "Aps. nuo vaiku kod."
  ],
  "id_text_title_basic_values": [
    "Set basic values",
    "Tee käyttöönotto",
    "Ställ in basvärden",
    "Inbetriebnahme durchführen",
    "Installer les paramètres de base",
    "Basiswaarden instellen",
    "Seadista põhiväärtused",
    "Indstil grundværdier",
    "ustawienia podstawowych wartosci",
    "Iestatit pamatraditajus",
    "Nustatyti pagr. vertes"
  ],
  "id_text_value_name_supply": [
    "Supply air",
    "Tuloilma",
    "Tilluft",
    "Zuluft",
    "Air de soufflage",
    "Toevoerlucht",
    "Sissepuhe",
    "Tilluft",
    "Powietrze nawiewane",
    "Piepludes gaiss",
    "Tiekiam. oras"
  ],
  "id_text_value_name_exhaust": [
    "Exhaust air",
    "Jäteilma",
    "Avluft",
    "Fortluft",
    "Air d'extraction",
    "Afvoerlucht",
    "Heitõhk",
    "Afkast",
    "Powietrze wywiewane",
    "Izvadamais gaiss",
    "Isleidz. oras"
  ],
  "id_text_title_away_profile": [
    "Away",
    "Poissa",
    "Borta",
    "Abwesend",
    "Absent",
    "Afwezig",
    "Ära",
    "Ude",
    "od",
    "Arpus majas",
    "Tolyn"
  ],
  "id_text_value_name_fan_speed": [
    "Fan Speed",
    "Puhallinnopeus",
    "Fläkthastighet",
    "Ventilatorleistung",
    "Vitesse du ventilateur",
    "Ventilator snelheid",
    "Ventilaatori kiirus",
    "Ventilator hastighed ",
    "Predkosc wentylatora\n\n",
    "Ventilatora atrums",
    "Vent. greitis"
  ],
  "id_text_value_name_temperature": [
    "Temperature",
    "Lämpötila",
    "Temperatur",
    "Temperatur",
    "Température",
    "Temperatuur",
    "Temperatuur",
    "Temperatur",
    "temperatura",
    "Temperatura",
    "Temperatura"
  ],
  "id_text_title_home_profile": [
    "Home Profile",
    "Kotona profiili",
    "Profil för Hemma",
    "Anwesend",
    "Profil d'acceuil",
    "Home Profile",
    "Kodus profiil",
    "Hjemme profil",
    "Profil domowy",
    "Majas profils",
    "Namu profilis"
  ],
  "id_text_title_boost_profile": [
    "Boost Profile",
    "Tehostus profiili",
    "Profil för Forcering",
    "Stoßlüftung",
    "Profil boost",
    "Boost Profile",
    "Võimendus profiil",
    "Forcerings profil",
    "Tryb doladowania",
    "Papildu ventilac. profils",
    "Pakelimo profilis"
  ],
  "id_text_value_name_timer": [
    "Timer",
    "Ajastin",
    "Timer",
    "Timer",
    "Minuterie",
    "Timer",
    "Taimer",
    "Timer",
    "regulator czasowy",
    "Taimeris",
    "Laikmatis"
  ],
  "id_text_value_name_duration": [
    "Duration",
    "Kesto",
    "Varaktighet",
    "Dauer",
    "Durée",
    "Duur",
    "Kestus",
    "Varighed",
    "Czas trwania",
    "Ilgums",
    "Trukme"
  ],
  "id_text_value_mins": [
    "mins",
    "min",
    "min",
    "min",
    "min ",
    "min",
    "min",
    "Min",
    "minuty",
    "minutes",
    "min."
  ],
  "id_text_title_setup_done": [
    "Setup done!",
    "Käyttöönotto tehty",
    "Installationen är klar",
    "Inbetriebnahme fertig",
    "Configuration fait!",
    "Instellingen uitgevoerd!",
    "Seadistatud!",
    "Installation klar",
    "Konfiguracja gotowa",
    "Iestatisana pabeigta!",
    "Saranka atlikta!"
  ],
  "id_text_menu_start": [
    "Start",
    "Käynnistä",
    "Starta",
    "Start",
    "Démarrage",
    "Aanvang",
    "Käivita",
    "Start ",
    "Start",
    "Sakt",
    "Paleisti"
  ],
  "id_text_title_at_home": [
    "At home",
    "Kotona",
    "Hemma",
    "Anwesend",
    "A domicile",
    "Thuis",
    "Kodus",
    "Hjemme",
    "w domu",
    "Majas",
    "Namuose"
  ],
  "id_text_content_in": [
    "IN",
    "Tulo",
    "Tilluft",
    "Zuluft",
    "IN",
    "IN",
    "Sisse",
    "Tilluft",
    "w srodku",
    "IEEJA",
    "VID."
  ],
  "id_text_content_out": [
    "OUT",
    "Ulko",
    "Ute",
    "Außen",
    "OUT",
    "OUT",
    "Välja",
    "Udeluft",
    "na zewnatrz",
    "IZEJA",
    "IŠOR."
  ],
  "id_text_title_away": [
    "Away",
    "Poissa",
    "Borta",
    "Abwesend",
    "Absent",
    "Afwezig",
    "Ära",
    "Ude",
    "poza",
    "Arpus majas",
    "Tolyn"
  ],
  "id_text_title_boost": [
    "Boost",
    "Tehostus",
    "Forcering",
    "Stoßlüftung",
    "Survolte",
    "Boost",
    "Võimendus",
    "Forcering",
    "Zwiekszyc ",
    "Papildu ventilacija",
    "Padidinti"
  ],
  "id_text_title_home_info": [
    "At home Info",
    "Kotona tiedot",
    "Hemma-information",
    "Anwesend-Daten",
    "Info à domicile",
    "Thuisinfo",
    "Kodus info",
    "Hjemme information",
    "informacja w domu",
    "Majas info",
    "Inf. namuose"
  ],
  "id_text_info_txt_supply_air": [
    "Supply air",
    "Tuloilma",
    "Tilluft",
    "Zuluft",
    "Air de soufflage",
    "Toevoerlucht",
    "Sissepuhe",
    "Tilluft",
    "Powietrze nawiewane",
    "Piepludes gaiss",
    "Oro tiekimas"
  ],
  "id_text_info_txt_outdoor_air": [
    "Outdoor air",
    "Ulkoilma",
    "Uteluft",
    "Außenluft",
    "Air extérieur",
    "Buitenlucht",
    "Välisõhk",
    "Udeluft",
    "Powietrze zewnetrzne",
    "Ara gaiss",
    "Isores oras"
  ],
  "id_text_info_txt_fan_speed": [
    "Fan speed",
    "Puhallinnopeus",
    "Fläkthastighet",
    "Ventilatorleistung",
    "Vitesse du ventilateur",
    "Ventilatorsnelheid",
    "Ventilaatori kiirus",
    "Ventilatorhastighed ",
    "Predkosc wentylatora",
    "Ventilatora atrums",
    "Vent. greitis"
  ],
  "id_text_info_txt_cell_status": [
    "Cell status",
    "Kennon tila",
    "VÅV status",
    "Wärmetauscher-Status",
    "État de l'échangeur de chaleur",
    "Warmtewisselaar Status",
    "Soojusvaheti olek",
    "Status for varmeveksler",
    "status wymiennika",
    "Elementa statuss",
    "Silum. busena"
  ],
  "id_text_info_txt_value_heat": [
    "Heat recovery",
    "Lämmitys",
    "Uppvärmning",
    "WRG",
    "Récupération de chaleur",
    "Warmteterugwinning",
    "Soojusvaheti kasutusel",
    "Varmegenvinding ",
    "odzysk ciepla",
    "Siltuma atguve",
    "Šilumos susigr."
  ],
  "id_text_info_txt_value_cool": [
    "Cooling",
    "Viilennys",
    "Kylning",
    "KRG",
    "Refroidissement",
    "Koeling",
    "Jahutus",
    "Køling",
    "chlodzenie",
    "Dzesesana",
    "Vesinimas"
  ],
  "id_text_info_txt_value_bypass": [
    "Cell bypass",
    "Ohitus",
    "Förbikoppling",
    "Bypass",
    "Dérivation",
    "Bypass",
    "Soojusvaheti möödaviik",
    "Bypass af varmeveksler",
    "by-pass lato/zima",
    "Elementa apeja",
    "Silum. apej."
  ],
  "id_text_info_txt_humidity": [
    "Humidity",
    "Kosteus",
    "Fuktighet",
    "Feuchtigkeit",
    "Humidité",
    "Vochtigheid",
    "Niiskus",
    "Fugtighed ",
    "wilgotnosc",
    "Mitrums",
    "Dregn."
  ],
  "id_text_info_txt_CO2": [
    "Carbon dioxide",
    "Hiilidioksidi",
    "Koldioxid",
    "Kohlendioxid",
    "Dioxyde de carbone",
    "Koolstofdioxide",
    "CO2",
    "CO2",
    "dwutlenek wegla",
    "Oglekla dioksids",
    "Anglies dioks."
  ],
  "id_text_info_txt_filters": [
    "Change filters",
    "Vaihda suodatin",
    "Byt filter",
    "Filter wechseln",
    "Remplacer les filtres",
    "Vervang filters",
    "Vaheta filtrid",
    "Udskift filter",
    "Wymien filtry",
    "Mainit filtrus",
    "Pakeisk. filtrus"
  ],
  "id_text_info_txt_used_days": [
    "Used days",
    "Käyttöpäivät",
    "Driftdagar",
    "Betriebstage",
    "Jours usagés",
    "Gebruikte dagen",
    "Kasutusel päevad",
    "Driftsdage",
    "dni uzywania",
    "Dienas lietosana",
    "Naudota d."
  ],
  "id_text_info_txt_value_y": [
    "y",
    "v",
    "år",
    "Jhr",
    "a",
    "j",
    "a",
    "åå",
    "rok",
    "g",
    "m."
  ],
  "id_text_info_txt_value_d": [
    "d",
    "pv",
    "dagar",
    "Tg",
    "j",
    "d",
    "p",
    "dd",
    "dzien",
    "d",
    "d."
  ],
  "id_text_info_txt_value_h": [
    "h",
    "h",
    "h",
    "Std",
    "h",
    "u",
    "h",
    "h",
    "godzina",
    "st.",
    "val."
  ],
  "id_text_title_away_info": [
    "Away info",
    "Poissa tiedot",
    "Borta-information",
    "Abwesend-Daten",
    "Données absentes",
    "Afwezige gegevens",
    "Äraoleku info",
    "Ude indstillinger",
    "Informacja poza",
    "Arpus majas info",
    "Isv. inf."
  ],
  "id_text_title_boost_info": [
    "Boost info",
    "Tehostus tiedot",
    "Forceringsinformation",
    "Stoßlüftung-Daten",
    "Info survolte",
    "Boost info",
    "Võimenduse info",
    "Forcerings indstillinger",
    "Informacja doladowanie",
    "Papildu ventilac. info",
    "Pakelimo inf."
  ],
  "id_text_dialog_title_filters": [
    "Time to change filters!",
    "Vaihda suodatin!",
    "Byt filter!",
    "Filter wechseln!",
    "Temps de changer les filtres!",
    "Tijd om filters te vervangen!",
    "Vaheta filtrid!",
    "Filterskift nødvendig",
    "Czas zmienic filtry!",
    "Jāmaina filtri!",
    "Laikas keisti filtrus!"
  ],
  "id_text_dialog_filters_1": [
    "Replace the filters of the",
    "Vaihda ilmanvaihtokoneen",
    "Byt nya filter i ventilationsaggregatet!",
    "Filter des Lüftungsgeräts",
    "Remplacez les filtres de",
    "Vervang de filters van de",
    "Vaheta filtrid!",
    "Udskift filtre i ventilationsaggregat med nye filtre.",
    "Wymienic filtry ",
    "Nomainiet filtrus",
    "Pakeiskite vent."
  ],
  "id_text_dialog_filters_2": [
    "ventilation units with new ones.",
    "suodattimet uusiin.",
    "ventilationsaggregatet!",
    "austauschen.",
    null,
    null,
    null,
    null,
    "na nowe.",
    "ventilac. iekārtās.",
    "filtrus."
  ],
  "id_text_menu_service_menu": [
    "Service menu",
    "Huoltovalikko",
    "Servicemeny",
    "Wartungsmenü",
    "Menu Service",
    "Service menu",
    "Hooldusmenüü",
    "Servicemenu",
    "menu serwisowe",
    "Apkopes izvelne",
    "Techn. priez. meniu"
  ],
  "id_text_menu_language": [
    "Language",
    "Kieli",
    "Språk",
    "Sprache",
    "Langue",
    "Taal",
    "Keel",
    "Sprog",
    "jezyk",
    "Valoda",
    "Kalba"
  ],
  "id_text_menu_week_clock": [
    "Week clock",
    "Viikkokello",
    "Veckour",
    "Wochenprogramm",
    "Programme hebdomadaire",
    "Weekprogramma",
    "Nädalakell",
    "Uge ur",
    "zegar tygodniowy",
    "Nedelas pulkstenis",
    "Sav. laikr."
  ],
  "id_text_menu_filter_status": [
    "Filter",
    "Suodatin",
    "Filter",
    "Filter",
    "Filtre",
    "Filter ",
    "Filter",
    "Filter",
    "filtr",
    "Filtrs",
    "Filtras"
  ],
  "id_text_menu_fire_place": [
    "Fireplace function",
    "Takkatoiminto",
    "Braskaminsstatus",
    "Kaminfunktion",
    "Fonction de cheminée",
    "Openhaardfunctie",
    "Kaminafunktsioon",
    "Pejsefunktion",
    "funkcja kominkowa",
    "Kamina funkcija",
    "Zidinio funkcija"
  ],
  "id_text_menu_temps_sensors": [
    "Temperatures and sensors",
    "Lämpötilat ja anturit",
    "Temperaturer och givare",
    "Temperaturen und Sensoren",
    "Températures et capteurs",
    "Temperaturen en sensors",
    "Temperatuurid ja andurid",
    "Temperatur og sensorer",
    "czujniki temperatury",
    "Temperaturas un sensori",
    "Temperaturos ir jutikliai"
  ],
  "id_text_menu_time_date": [
    "Time and date",
    "Aika ja päivämäärä",
    "Tid och datum",
    "Zeit und Datum",
    "Heure et date",
    "Tijd en datum",
    "Kell ja kuupäev",
    "Tid og dato",
    "data i czas",
    "Laiks un datums",
    "Laikas ir data"
  ],
  "id_text_menu_display_settings": [
    "Display settings",
    "Näytön asetukset",
    "Displayinställningar",
    "Display-Einstellungen",
    "Affichage des paramètres",
    "Weergave instellingen",
    "Ekraani seaded",
    "Display indstillinger",
    "ustawienia wyswietlacza",
    "Displeja iestat.",
    "Ekrano nuost."
  ],
  "id_text_menu_expert_settings": [
    "Expert settings",
    "Erikoisasetukset",
    "Specialinställningar",
    "Spezielle Einstellungen",
    "Configuration expert",
    "Expert instellingen",
    "Eriseaded",
    "Avancerede indstillinger",
    "ustawienia zaawansowane",
    "Specializ. iestat.",
    "Eksperto nuost."
  ],
  "id_text_menu_turn_off": [
    "Turn unit OFF",
    "Sammuta laite",
    "Koppla bort aggregatet",
    "Gerät ausschalten",
    "Éteindre l'appareil",
    "Schakel het toestel uit",
    "Lülita välja",
    "Sluk aggregatet",
    "wylacz urzadzenie",
    "Izslegt iekartu",
    "ISJ. įreng."
  ],
  "id_text_menu_service_diagnostic_d": [
    "Diagnostics display",
    "Diagnostiikkanäyttö",
    "Diagnostikdisplay",
    "Diagnose-Anzeige",
    "Ecran de diagnostic",
    "Diagnosedisplay",
    "Diagnostika näit",
    "Diagnostisk display ",
    "wyswietlacz diagnostyczny",
    "Diagnostikas dispejs",
    "Diagnost. ekranas"
  ],
  "id_text_menu_error_log": [
    "Error log",
    "Vikaloki",
    "Fellogg",
    "Fehlerprotokoll",
    "Journal des erreurs",
    "Foutenlogboekbestand",
    "Veateade",
    "Fejl log",
    "dziennik bledów",
    "Kludu zurnals",
    "Klaidu zurn."
  ],
  "id_text_menu_cell_defrost": [
    "Cell defrost",
    "LTO kennon sulatus",
    "Avfrostning av VÅV-element",
    "Wärmetauscher abtauen",
    "Elément de dégivrage",
    "Ontdooiingselement",
    "Soojusvaheti sulatus",
    "Afrimning af varmeveksler",
    "odszranianie wymiennika",
    "Elementa atkausesana",
    "Silum atitirp."
  ],
  "id_text_menu_self_test_d": [
    "Self-test",
    "Itsetestaus",
    "Testdisplay",
    "Selbsttest",
    "Auto-test",
    "Zelftest",
    "Seadme test ",
    "Testdisplay",
    "Autotest",
    "Pasparbaude",
    "Aut. test."
  ],
  "id_text_menu_fan_test": [
    "Fan test",
    "Puhallintesti",
    "Test av fläkt",
    "Ventilatortest",
    "Test du ventilateur",
    "Ventilatortest",
    "Ventilaatori test",
    "Test af ventilator",
    "Test wentylatora",
    "Ventilatora parbaude",
    "Vent. test."
  ],
  "id_text_menu_heater_test": [
    "Heater test",
    "Lämmitintesti",
    "Test av värmare",
    "Heizgeräte-Test",
    "Test chauffage",
    "Heater test",
    "Kalorifeeri test",
    "Test af varmeflade",
    "test nagrzewnicy",
    "Silditaja parbaude",
    "Sild. test."
  ],
  "id_text_title_service_diagnostics_d": [
    "Service diagnostics display",
    "Diagnostiikkanäyttö",
    "Diagnostikdisplay",
    "Service-Anzeige",
    "Écran des diagnostics de service",
    "Diagnosedienst display",
    "Diagnostika näit",
    "Diagnostisk display ",
    "Wyswietlacz diagnostyczny uslug",
    "Apkopes diagnostikas displejs",
    "Techn. priez. diagnost. ekr."
  ],
  "id_text_info_sw_version": [
    "SW version",
    "Ohjelmaversio",
    "Programversion",
    "Programmversion",
    "Version du logiciel",
    "Softwareversies",
    "Programmi versioon",
    "Programversion",
    "wersja oprogramowania",
    "ZV versija",
    "Progr. vers."
  ],
  "id_text_info_rh_sensors": [
    "%RH sensors",
    "%RH antureita",
    "%RH givare",
    "%RH-Sensor",
    "Capteur %RH",
    "%RH sensors",
    "Niiskusandureid",
    "Fugt sensorer",
    "czyjniki wilgotnosci",
    "%RM sensori",
    "%RH jutikl."
  ],
  "id_text_info_co2_sensors": [
    "CO2 sensors",
    "CO2 antureita",
    "CO2 givare",
    "CO2-Sensor",
    "capteur CO2",
    "CO2 sensor",
    "CO2 andureid",
    "CO2 sensorer",
    "czujniki dwutlenku wegla",
    "CO2 sensori",
    "CO2 jutikl."
  ],
  "id_text_info_type": [
    "Type",
    "Tyyppi",
    "Typ",
    "Typ",
    "Type",
    "Type",
    "Tüüp",
    "Type",
    "typ",
    "Tips",
    "Tipas"
  ],
  "id_text_info_model": [
    "Model",
    "Malli",
    "Modell",
    "Modell",
    "Modèle",
    "Model",
    "Mudel",
    "Model",
    "model",
    "Modelis",
    "Model."
  ],
  "id_text_info_serial_no": [
    "Serial number",
    "Sarjanumero",
    "Serienummer",
    "Seriennummer",
    "Numéro de série",
    "Serienummer",
    "Seerianumber",
    "Serienummer",
    "numer seryjny",
    "Serijas numurs",
    "Serijos Nr."
  ],
  "id_text_info_days_total": [
    "Operation days",
    "Käyttöaika",
    "Driftdagar",
    "Betriebszeit",
    "Jours d'opération",
    "Operation dagen",
    "Kasutusaeg",
    "Driftdage",
    "dni pracy",
    "Dienas lietosana",
    "Veikia d."
  ],
  "id_text_info_power_down": [
    "Last power down",
    "Viimeisin sähkökatkos",
    "Senaste elavbrott",
    "Letzter Stromausfall",
    "Dernier arrêt",
    "Laatste uitschakeling",
    "Viimane elektrikatkestus",
    "Seneste strømafbrydelse",
    "ostatnie wylaczenie",
    "Pedejais parravums",
    "Pask. elektr. atj."
  ],
  "id_text_title_self_test_d": [
    "Self-test display",
    "Testinäyttö",
    "Testdisplay",
    "Testanzeige",
    "Ecran auto-test",
    "Zelftest scherm",
    "Seadme testi näit",
    "Auto test display",
    "Automatyczny test wyswietlacza",
    "Pasparbaudes displejs",
    "Aut. test. ekranas"
  ],
  "id_text_menu_start_test": [
    "Start the test?",
    "Aloita testi?",
    "Vill du starta testet?",
    "Test starten?",
    "Commencer le test?",
    "Start de test",
    "Alusta testimist?",
    "Vil du starte testen?",
    "Rozpocznij test?",
    "Sakt parbaudi?",
    "Pradeti testa?"
  ],
  "id_text_efficiency": [
    "Operating efficiency",
    "Hyötysuhde",
    "Verkningsgrad",
    "Wirkungsgrad",
    "Efficacité opérationnelle",
    "Operationele efficiëntie",
    "Kasutegur",
    "Virkningsgrad",
    "efektywnosc operacyjna",
    "Darba efektivitate",
    "Veikimo efektyv."
  ],
  "id_text_bypass_for_hr": [
    "Bypass for HR",
    "LTO ohitus",
    "Förbigång av VÅV",
    "Wärmetauscher-Umgehung",
    "Dérivation pour récuperation de la chaleur",
    "Bypass voor warmteterugwinning",
    "Soojusvaheti möödaviik",
    "Bypass af varmeveksler ",
    "by-pasa dla wymiennika ciepla",
    "SA apeja",
    "Rekuper. apejimas"
  ],
  "id_text_heating_systems": [
    "Heaters",
    "Lämmittimet",
    "Värmeenheter",
    "Heizgeräte",
    "Radiateurs",
    "verwarmingen",
    "Kalorifeerid",
    "Varmeflader",
    "nagrzewnica",
    "Silditaji",
    "Sildyt."
  ],
  "id_text_postheating": [
    "Post-heating",
    "Jälkilämmitys",
    "Eftervärmning",
    "Heizregister 1",
    "Post-chauffage",
    "Naverwarming",
    "Järelküte",
    "Eftervarmeflade ",
    "Dogrzewanie",
    "Pecapsilde",
    "Papild. sild."
  ],
  "id_text_preheating": [
    "Melting resistor",
    "Sulatusvastus",
    "Tiningsmotstånd",
    "Heizregister 2",
    "Résistance de dégivrage",
    "Smeltweerstand",
    "Sulatuskalorifeer",
    "Afrimningsmodstand",
    "czujnik odszraniania",
    "Atkausesanas rezistors",
    "Atitirp. rezist."
  ],
  "id_text_title_fan_test": [
    "Fan test",
    "Puhallintesti",
    "Test av fläkt",
    "Ventilatortest",
    "Test du ventilateur",
    "Ventilatortest",
    "Ventilaatori test",
    "Test af ventilator",
    "test wentylatora",
    "Ventilatora parbaude",
    "Vent. test."
  ],
  "id_text_title_heater_test": [
    "Heater test",
    "Lämmitintesti",
    "Test av värmare",
    "Heizgeräte-Test",
    "Test chauffage",
    "Heater test",
    "Kalorifeeri test",
    "Test af varmeflade",
    "test nagrzewnicy",
    "Silditaja parbaude",
    "Sild. test."
  ],
  "id_text_setting_name_post_heating": [
    "Post-heating",
    "Jälkilämmitys",
    "Eftervärmning",
    "Heizregister 1",
    "Post-chauffage",
    "Naverwarming",
    "Järelküte",
    "Eftervarmeflade ",
    "dogrzewanie",
    "Pecapsilde",
    "Papild. sild."
  ],
  "id_text_setting_name_extra_heating": [
    "Melting resistor",
    "Sulatusvastus",
    "Tiningsmotstånd",
    "Heizregister 2",
    "Résistance de dégivrage",
    "Smeltweerstand",
    "Sulatuskalorifeer",
    "Afrimningsmodstand",
    "czujnik odszraniania",
    "Atkausesanas rezistors",
    "Atitirp. rezist."
  ],
  "id_text_setting_value_electric": [
    "Electric",
    "Sähköinen",
    "Elektrisk",
    "Elektrisch",
    "Electrique",
    "Electrisch",
    "Elektriline",
    "Elektrisk ",
    "elektryczny",
    "Elektrisks",
    "Elektr."
  ],
  "id_text_setting_value_mlv": [
    "Ground heat",
    "Maalampö (MLV)",
    "Jordvärme",
    "Erdwärme (MLV)",
    "La chaleur du sol",
    "Bodemwarmte",
    "Maaküttering (MLV)",
    "Jordvarme",
    "wymiennik gruntowy",
    "Geotermalais siltums",
    "Geoterm. sild."
  ],
  "id_text_setting_value_vkl": [
    "Water/Liquid",
    "Vesi/Neste (VKL)",
    "Vatten/Vätska",
    "Wasser/Flüssigkeit (VKL)",
    "Eau/Liquide",
    "Water/Vloeistof",
    "Vesi/vedelikringlus (VKL)",
    "Vand/væske",
    "woda/glikol",
    "Udens/Skidrums",
    "Vand. / skyst."
  ],
  "id_text_title_cell_defrost": [
    "HR cell defrost",
    "LTO kennon sulatus",
    "Avfrostning av VÅV-element",
    "Wärmetauscher abtauen",
    "Dégivrage de l'échangeur de chaleur",
    "WW ontdooien",
    "Soojusvaheti sulatus",
    "Afrimning af varmeveksler",
    "odszranianie wymiennika ciepla",
    "SA elementa atkausesana",
    "Rekuper. šilum. atitirp."
  ],
  "id_text_menu_start_defrost": [
    "Start defrost",
    "Käynnistä sulatus",
    "Starta avfrostning",
    "Abtauen starten",
    "Commencer dégivrage",
    "Start het ontdooien",
    "Alusta sulatust",
    "Start afrimning",
    "Zacznij odszranianie",
    "Sakt atkausesanu",
    "Pradėti atitirp."
  ],
  "id_text_menu_defrosting": [
    "Defrosting. . .",
    "Sulattaa . . .",
    "Avfrostar . . .",
    "Wird abgetaut . . .",
    "Dégivrage...",
    "Ondooien...",
    "Sulatab...",
    "Afrimer…",
    "odszranianie",
    "Atkause...",
    "Atitirpin. . ."
  ],
  "id_text_title_error_log": [
    "Error Log",
    "Vikaloki",
    "Fellogg",
    "Fehlerprotokoll",
    "Journal des erreurs",
    "Foutenlogboekbestand",
    "Veateade",
    "Fejl log",
    "Dziennik bledów",
    "Kludu zurnals",
    "Klaidu zurn."
  ],
  "id_text_value_mon": [
    "Mon",
    "Ma",
    "Må",
    "Mo",
    "Lundi",
    "Maandag",
    "Esmasp",
    "Man",
    "pon.",
    "P",
    "Pir."
  ],
  "id_text_value_tue": [
    "Tue",
    "Ti",
    "Ti",
    "Di",
    "Mardi",
    "Dinsdag",
    "Teisip",
    "Tir",
    "wt.",
    "O",
    "A."
  ],
  "id_text_value_wed": [
    "Wed",
    "Ke",
    "On",
    "Mi",
    "Mercredi",
    "Woensdag",
    "Kolmap",
    "Ons",
    "sr.",
    "T",
    "T."
  ],
  "id_text_value_thu": [
    "Thu",
    "To",
    "To",
    "Do",
    "Jeudi",
    "Donderdag",
    "Neljap",
    "Tor",
    "czw.",
    "C",
    "K."
  ],
  "id_text_value_fri": [
    "Fri",
    "Pe",
    "Fr",
    "Fr",
    "Vendredi",
    "Vrijdag",
    "Reede",
    "Fre",
    "pt.",
    "Pk",
    "P."
  ],
  "id_text_value_sat": [
    "Sat",
    "La",
    "Lö",
    "Sa",
    "Samedi",
    "Zaterdag",
    "Laup",
    "Lør",
    "so.",
    "S",
    "S."
  ],
  "id_text_value_sun": [
    "Sun",
    "Su",
    "Sö",
    "So",
    "Dimanche",
    "Zondag",
    "Pühap",
    "Søn",
    "niedz.",
    "Sv",
    "Sek."
  ],
  "id_text_week_clock_off": [
    "Week clock OFF",
    "Viikkokello pois",
    "Veckour av",
    "Wochenprogramm Aus",
    "Programme hebdomadaire OFF",
    "Weekprogramma UIT",
    "Nädalakell väljas",
    "Uge ur OFF",
    "zegar tygodniowy wylaczony",
    "Nedelas pulkstenis izslegts",
    "Sav. laikr. ISJ."
  ],
  "id_text_week_clock_on": [
    "Week clock ON",
    "Viikkokello päällä",
    "Veckour på",
    "Wochenprogramm Ein",
    "Programme hebdomadaire ON",
    "Weekprogramma AAN",
    "Nädalakell sees",
    "Uge ur ON",
    "zegar tygodniowy wlaczony",
    "Nedelas pulkstenis ieslegts",
    "Sav. laikr. IJ."
  ],
  "id_text_title_filter_status": [
    "Filter status",
    "Suodattimen tila",
    "Filterstatus",
    "Filter-Status",
    "Etat du filtre",
    "Filterstatus",
    "Filtrite olukord",
    "Filter status",
    "stan filtra",
    "Filtra statuss",
    "Filtro bus."
  ],
  "id_text_info_txt_filters_changed": [
    "Filters changed",
    "Vaihdettu",
    "Filtret har bytts",
    "Ausgetauscht",
    "Filtres changés",
    "Filters zijn vervangen",
    "Filtrid vahetatud",
    "Sidste Filterskift",
    "filtr zmieniony",
    "Filtri nomainiti",
    "Filtrai pakeist."
  ],
  "id_text_info_txt_next_reminder": [
    "Next reminder",
    "Tuleva muistutus",
    "Nästa påminnelse",
    "Nächster Wechsel",
    "Rappel suivant",
    "Volgende herinnering",
    "Järgmine meeldetuletus",
    "Næste service",
    "Nastepne przypomnienia",
    "Nakamais atgadinajums",
    "Kitas primin."
  ],
  "id_text_info_txt_reminder_interval": [
    "Reminder interval",
    "Muistutusväli",
    "Påminnelseperiod",
    "Wechselintervall",
    "Intervalle de rappel",
    "Herinneringsinterval",
    "Meeldetuletuse intervall",
    "Serviceinterval",
    "czas przypomnienia",
    "Atgadinajumu intervals",
    "Primin. interv."
  ],
  "id_text_info_txt_months": [
    "months",
    "kk",
    "mån.",
    "Monate",
    "Mois",
    "Maanden",
    "kuud",
    "måneder",
    "miesiace",
    "menesi",
    "men."
  ],
  "id_text_info_txt_order_filters": [
    "Order the filters from filters.vallox.com",
    "Tilaa suodattimet filters.vallox.com",
    "Order the filters from filters.vallox.com",
    "Filterbestellung: filters.vallox.com",
    "Commandez les filtres par filters.vallox.com",
    "Bestel de filters via filters.vallox.com",
    "Telli filtrid filters.vallox.com",
    "Bestil filter på filters.vallox.com",
    "Zamówic filtry z filters.vallox.com",
    "Pasutit filtrus filters.vallox.com",
    "Filtrus uzsisak. is filters.vallox.com"
  ],
  "id_text_time": [
    "Time",
    "Aika",
    "Tidpunkt",
    "Zeit",
    "Heure   ",
    "Tijd  ",
    "Kellaaeg",
    "Tid",
    "czas",
    "Laiks",
    "Laikas"
  ],
  "id_text_degr_celcius": [
    "°C",
    "°C",
    "°C",
    "°C",
    "°C",
    "°C",
    "°C",
    "°C",
    "°C",
    "°C",
    "°C"
  ],
  "id_text_enabled": [
    "Enabled",
    "Sallittu",
    "Tillåten",
    "Aktiviert",
    "Activé",
    "Ingeschakeld",
    "Lubatud",
    "Aktiveret",
    "dostepny",
    "Iespejots",
    "Ijungta"
  ],
  "id_text_disabled": [
    "Disabled",
    "Estetty",
    "Förhindrad",
    "Deaktiviert",
    "Désactivé",
    "Uitgeschakeld",
    "Keelatud",
    "Deaktiveret",
    "niedostepny",
    "Atspejots",
    "Isjungta"
  ],
  "id_text_stop": [
    "Stop",
    "Pysäytä",
    "Stoppa",
    "Stopp",
    "Stop",
    "Stop",
    "Peata",
    "Stop",
    "stop",
    "Apturēt",
    "Stop"
  ],
  "id_text_used hours": [
    "Used hours",
    "Käyttötunnit",
    "Drifttimmar",
    "Betriebsstunden",
    "Heures usagées",
    "Verbruikte uren",
    "Kasutatud tunnid",
    "Driftstimer",
    "godziny uzywania",
    "Stundas lietosana",
    "Naud. val."
  ],
  "id_text_test_display": [
    "Test display",
    "Testinäyttö",
    "Testdisplay",
    "Testanzeige",
    "Ecran de test",
    "Testscherm",
    "Testinäit",
    "Testdisplay",
    "Test wyswietlacza",
    "Parbaudes displejs",
    "Testo ekran."
  ],
  "id_text_star_defrosting": [
    "Start defrosting",
    "Käynnistä sulatus",
    "Starta avfrostning",
    "Abtauen starten",
    "Commencez le dégivrage",
    "Start het ontdooien",
    "Alusta sulatust",
    "Start afrimning",
    "Zacznij odszranianie",
    "Sakt atkausesanu",
    "Prad. atitirpin."
  ],
  "id_text_sleep_time": [
    "Sleep time",
    "Torkkuaika",
    "Vilotid",
    "Ruhezeit",
    "Temps de veille",
    "Slijmertijd",
    "Ekraani taustvalgustuse aeg",
    "Dvale",
    "uspienie",
    "Miega laiks",
    "Miegoj. laikas"
  ],
  "id_text_turn_unit_on": [
    "Turn unit ON",
    "Käynnistä laite",
    "Starta aggregatet",
    "Gerät starten",
    "Allumer l'appareil",
    "Zet het apparaat AAN",
    "Lülita sisse",
    "Tænd aggregat",
    "Wlaczyc urzadzenie",
    "Ieslegt iekartu",
    "IJ. irengini"
  ],
  "id_text_turn_summer_winter_test": [
    "Summer-Winter Test",
    "Kesä-talvi testi",
    "Sommar-vintertest",
    "Sommer-/Winter-Test",
    "Test Ete-Hiver",
    "Zomer-Winter Test",
    "Suvi-talv test",
    "Sommer-vinter test",
    "test lato-zima",
    "Vasaras-ziemas parbaude",
    "vasaros–ziemos testas"
  ],
  "id_text_menu_restore_and_save_settings": [
    "Save and restore settings",
    "Asetusten tallennus ja palautus",
    "Återställ och spara inställningar",
    "Einstell. speichern und zurückstellen",
    "Sauvegarder et restaurer les réglages",
    "Opstellen en herstellen van de instellingen",
    "Seadistuste salvestamine ja taastamine",
    "Gem og nulstil indstillinger",
    "Zapisz i przywrócic ustawienia",
    "Saglabat un atjaunot iestat.",
    "Irasyt. ir atstat. nuostatas"
  ],
  "id_text_extra_settings_for_sensors": [
    "Sensor settings",
    "Anturien asetukset",
    "Givarinställningar",
    "Sensor-Einstellungen",
    "Configurations des capteurs",
    "Sensorinstellingen",
    "Andurite seaded",
    "Indstillinger for sensor",
    "ustawienia czujnikow",
    "Sensora iestatijumi",
    "Jutiklio nuost."
  ],
  "id_text_fan_settings": [
    "Fan settings",
    "Puhaltimen asetukset",
    "Fläktinställningar",
    "Ventilator-Einstellungen",
    "Réglages de ventilateur",
    "Ventilatorinstellingen",
    "Ventilaatorite seaded",
    "Indstillinger for ventilator",
    "ustawienia wentylatora",
    "Ventilatora iestatijumi",
    "Vent. nuostatos"
  ],
  "id_text_io_and_data_settings": [
    "I/O and bus settings",
    "I/O- ja väyläasetukset",
    "In-, ut- och bussinställningar",
    "I/O- und Bus-Einstellungen",
    "E/S et paramètres de bus",
    "I/O en bus instellingen",
    "I/O- ja väljundiseaded",
    "I/O og bus indstillinger",
    "ustawienia We/wy i modulu",
    "I/O un kopnes iestatijumi",
    "IV. / ISV. ir magistr. nuost."
  ],
  "id_text_password_and_access": [
    "Password and access level",
    "Salasana ja oikeudet",
    "Lösenord och rättigheter",
    "Passwort und Berechtigungen",
    "Mot de passe et niveau d'accès",
    "Wachtwoord en toegangsniveau",
    "Salasõna ja õigused",
    "Password og rettigheder",
    "Haslo i poziom zabepieczen",
    "Parole un piekluves limenis",
    "Slaptazodis ir prieigos teises"
  ],
  "id_text_antifreezing_settings": [
    "Anti-freezing settings",
    "Sulatusasetukset",
    "Avfrostningsinställningar",
    "Abtau-Einstellungen",
    "Réglages antigel",
    "Anti-vries instellingen",
    "Sulatuse seaded",
    "Indstillinger for afrimning",
    "Ustawienia przeciw zamarzaniu",
    "Atkausesanas iestatijumi",
    "Atitirp. nuostatos"
  ],
  "id_text_error_relay": [
    "Relay",
    "Rele",
    "Relä",
    "Relais",
    "Relais",
    "Relais",
    "Relee",
    "Relæ",
    "przekaznik",
    "Relejs",
    "Rele"
  ],
  "id_text_input_output_settings": [
    "I/O settings",
    "I/O-asetukset",
    "Inångs-/Utgångsinställningar",
    "I/O-Einstellungen",
    "I/O réglages",
    "I/O instellingen",
    "I/O- seaded",
    "Indstillinger for I/O",
    "ustawienia We/wy",
    "I/O iestatijumi",
    "IV. / ISV. nuost."
  ],
  "id_text_modbus_settings": [
    "Modbus settings",
    "Modbus asetukset",
    "Modbus-inställningar",
    "Modbus-Einstellungen",
    "Réglages Modbus",
    "Modbus instellingen",
    "Modbus seaded",
    "Indstillinger for modbus",
    "Ustawienia Modbus",
    "Modbus iestatijumi",
    "Modbus nuostatos"
  ],
  "id_text_menu_item_panel_address": [
    "Panel address",
    null,
    null,
    null,
    "Adresse de panneau",
    "Bedieningspaneel adres",
    "Juhtpuldi number",
    "Adresse for panel",
    "Adres panelu",
    "Pults adrese",
    "Skydelio adr."
  ],
  "id_text_panel_address": [
    "Panel address",
    "Panelin osoite",
    "Paneladress",
    "Regleradresse",
    "Adresse de panneau",
    "Bedieningspaneel adres",
    "Juhtpuldi number",
    "Adresse for panel",
    "Adres panelu",
    "Pults adrese",
    "Skydelio adr."
  ],
  "id_text_percent_short": [
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%"
  ],
  "id_text_ppm": [
    "ppm",
    "ppm",
    "ppm",
    "ppm",
    "ppm",
    "ppm",
    "ppm",
    "ppm",
    "ppm",
    "ppm",
    "ppm"
  ],
  "id_text_rpm": [
    "RPM",
    "1/min",
    "1/min",
    "1/min",
    "1/min",
    "1/min",
    "1/min",
    "1/min",
    "1/min",
    "apgr./min",
    "1/min."
  ],
  "id_text_hour_short": [
    "h",
    "t",
    "h",
    "h",
    "h ",
    "u",
    "h ",
    "timer",
    "godz.",
    "st.",
    "val."
  ],
  "id_text_months": [
    "months",
    "kk",
    "mån.",
    "Monate",
    "mois",
    "maanden",
    "kuud",
    "måneder",
    "miesiace",
    "menesi",
    "men."
  ],
  "id_text_summer": [
    "Summer",
    "Kesä",
    "Sommar",
    "Sommer",
    "Été",
    "Zomer",
    "Suvi ",
    "Sommer",
    "lato",
    "Vasara",
    "Vasara"
  ],
  "id_text_winter": [
    "Winter",
    "Talvi",
    "Vinter",
    "Winter",
    "Hiver",
    "Winter",
    "Talv",
    "Vinter",
    "zima",
    "Ziema",
    "Ziema"
  ],
  "id_text_changed": [
    "Changed",
    "Vaihdettu",
    "Har bytts",
    "Ausgetauscht",
    "Modifié",
    "Veranderd",
    "Vahetatud",
    "Udskiftet",
    "zmienione",
    "Mainits",
    "Pakeista"
  ],
  "id_text_supply_fan": [
    "Supply fan",
    "Tuloilmapuhallin",
    "Tilluftsfläkt",
    "Zuluftventilator",
    "Ventilateur d'alimentation",
    "Toevoerventilator",
    "Sissepuhkeventilaator",
    "Tilluft ventilator",
    "wentylator nawiewny",
    "Piepludes ventilators",
    "Tiekimo vent."
  ],
  "id_text_extract_fan": [
    "Extract fan",
    "Poistoilmapuhallin",
    "Frånluftsfläkt",
    "Abluftventilator",
    "Ventilateur d'extraction",
    "Afvoerventilator",
    "Väljatõmbeventilaator",
    "Fraluft ventilator",
    "wentylator wywiewny",
    "Nosuces ventilators",
    "Istrauk. vent."
  ],
  "id_text_supply": [
    "Supply",
    "Tulo",
    "Tilluft",
    "Zuluft",
    "Alimentation",
    "Toevoer",
    "Sissepuhe ",
    "Tilluft",
    "zasilanie",
    "Piepludes",
    "Tiekim."
  ],
  "id_text_extract": [
    "Extract",
    "Poisto",
    "Frånluft",
    "Abluft",
    "Extraction",
    "Afvoer",
    "Väljatõmme ",
    "Fraluft ",
    "wyciag",
    "Nosuces",
    "Ištrauk."
  ],
  "id_text_sensor": [
    "Sensor",
    "Anturi",
    "Givare",
    "Sensor",
    "Capteur  ",
    "Sensorinstellingen",
    "Andur ",
    "Sensor",
    "czujnik",
    "Sensors",
    "Jutikl."
  ],
  "id_text_no_sensors": [
    "No sensors installed",
    "Anturia ei asennettu",
    "Ingen givare installerad",
    "Sensor nicht installiert",
    "Pas de capteurs installés",
    "Geen sensoren geïnstalleerd",
    "Andureid pole lisatud",
    "Ingen sensor installeret",
    "czujniki nie zainstalowane",
    "Nav uzstaditu sensoru",
    "Nesumont. jutiklis"
  ],
  "id_text_address": [
    "Address",
    "Osoite",
    "Adress",
    "Adresse",
    "Adresse",
    "Adres",
    "Aadress",
    "Adresse",
    "adres",
    "Adrese",
    "Adresas"
  ],
  "id_text_baud_rate": [
    "Baud rate",
    "Baudimäärä",
    "Baudgrad",
    "Baud-Rate",
    "Baud rate",
    "Baud rate",
    "Modbus väljundi kiirus",
    "Baudrate",
    "Szybkosc transmisji",
    "Boda atrums",
    "Sparta bod."
  ],
  "id_text_parity": [
    "Parity",
    "Pariteetti",
    "Paritet",
    "Parität",
    "Parité",
    "Pariteit",
    "Modbus väljundi pariteet",
    "Paritet",
    "parytet",
    "Pariba",
    "Lygin."
  ],
  "id_text_stop_bit": [
    "Stop bit",
    "Stop bitti",
    "Stoppbit",
    "Stoppbit",
    "Bit d'arrêt",
    "Stopbit",
    "Modbus väljundi stop bittide määr",
    "Stop bit",
    "Zatrzymanie uderzania",
    "Stopbits",
    "Stabd. bit."
  ],
  "id_text_analog_input": [
    "Analog input",
    "Analogiatulo",
    "Analog ingång",
    "Analogeingang",
    "Entrée analogique",
    "Analoge ingang",
    "Analoogsisend",
    "Analog indgang",
    "Wejscie analogowe",
    "Analoga ievade",
    "Analog. iv."
  ],
  "id_text_digital_input_1": [
    "Digital input 1",
    "Digitaalitulo 1",
    "Digital ingång 1",
    "Digitaleingang 1",
    "Entrée numérique 1",
    "Digitale ingang 1",
    "Digitaalsisend 1",
    "Digital indgang 1",
    "wejscie cyfrowe 1",
    "Digitala ievade 1",
    "Skaitm. iv. 1"
  ],
  "id_text_digital_input_2": [
    "Digital input 2",
    "Digitaalitulo 2",
    "Digital ingång 2",
    "Digitaleingang 2",
    "Entrée numérique 2",
    "Digitale ingang 2",
    "Digitaalsisend 2",
    "Digital indgang 2",
    "wejscie cyfrowe 2",
    "Digitala ievade 2",
    "Skaitm. iv. 2"
  ],
  "id_text_direct_fan_control": [
    "Direct fan control",
    "Suora puhallinohjaus",
    "Direkt fläktstyrning",
    "Direkte Ventilatorsteuerung",
    "Contrôle du ventilateur direct",
    "Rechtstreekse controle ventilator",
    "Ventilaatori juhtimine pingega",
    "Direkte ventilatorstyring ",
    "regulacja wentylatora pradu stalego",
    "Tiesa ventilatora kontrole",
    "Tiesiog. vent. vald."
  ],
  "id_text_fireplace_switch": [
    "Fireplace switch",
    "Takkakytkin",
    "Braskaminsbrytare",
    "Kamintaster",
    "Commutateur de Cheminée",
    "Open haard schakelaar",
    "Kaminalüliti",
    "Pejse kontakt",
    "przelacznik funkcji kominkowej",
    "Kamina sledzis",
    "Zidinio jung."
  ],
  "id_text_kitchen_hood": [
    "Cooker hood",
    "Liesituuletin",
    "Spisfläkt",
    "Dunstabzug",
    "Hotte",
    "Afzuigkap",
    "Köögikubu",
    "Emhætte",
    "okap",
    "Plits nosucejs",
    "Gartraukis"
  ],
  "id_text_fire_alarm": [
    "Emergency stop",
    "Hätä-seis",
    "Nödstopp",
    "Not-Aus",
    "Arrêt de secours",
    "Noodstop",
    "Hädaolukord seiskumine",
    "Nødstop",
    "zatrzymanie awaryjne",
    "Arkartas apturesana",
    "Avarinis stabd."
  ],
  "id_text_service_remainder": [
    "Maintenance reminder",
    "Huoltomuistutin",
    "Servicetimer",
    "Wartungsanzeige",
    "Rappel de maintenance",
    "Onderhoudsherinnering",
    "Hoolduse meeldetuletaja",
    "Servicealarm",
    "przypomnienie konserwacja",
    "Apkopes atgadinajums",
    "Techn. priez. prim."
  ],
  "id_text_level": [
    "Level",
    "Taso",
    "Nivå",
    "Ebene",
    "Niveau ",
    "Niveau",
    "Tase",
    "Niveau",
    "poziom",
    "Limenis",
    "Lygis"
  ],
  "id_text_supply_fan_stop": [
    "Supply fan stop",
    "Puh. pysäytys",
    "Tilluftsfläkt stoppas",
    "Vent. anhalten",
    "Ventilator d'alimentation arrêt",
    "Toevoerventilator stop",
    "Sissepuhkevent. seis",
    "Tilluft ventilator stoppes",
    "Zatrzymanie wentylatora nawiewnego",
    "Piepludes ventilators nedarbojas",
    "Tiekim. vent. stabd."
  ],
  "id_text_extract_air_control": [
    "Extract air control",
    "Jäteilmaohjaus",
    "Styrning enligt avluft",
    "Fortluft-Regelung",
    "Réglage d'air d'échappement",
    "Afvoerluchtregeling",
    "Heitõhu juhtimine",
    "Kontrol af Udsug  ",
    "kontrola wywiewu",
    "Nosuces gaisa kontrole",
    "Istr. oro kontrole"
  ],
  "id_text_indoor": [
    "Indoor",
    "Sisä",
    "Inne",
    "Innen",
    "Intérieur",
    "Binnen",
    "Sise",
    "Indblæs temp",
    "wewnetrzny",
    "Telpu",
    "Viduje"
  ],
  "id_text_outdoor": [
    "Outdoor",
    "Ulko",
    "Ute",
    "Außen",
    "Extérieur",
    "Buitenlucht",
    "Välis",
    "Ude temp",
    "zewnetrzny",
    "Ara",
    "Lauke"
  ],
  "id_text_exhaust": [
    "Exhaust",
    "Jäte",
    "Avluft",
    "Fortluft",
    "Evacuation",
    "Uitlaat",
    "Heit",
    "Afkast temp.",
    "wyciag",
    "Izvadamais",
    "Istrauk."
  ],
  "id_text_indoor_air_degrees": [
    "Indoor air °C",
    "Sisäilma °C",
    "Inneluft °C",
    "Raumluft °C",
    "Air à l'intérieur ° C",
    "Lucht binnenshuis ° C",
    "Siseõhk °C",
    "Indeluft °C",
    "temperatura powietrza wewnatrz",
    "Gaiss telpas °C",
    "Vidaus oro °C"
  ],
  "id_text_extract_air_degrees": [
    "Extract air °C",
    "Poistoilma °C",
    "Frånluft °C",
    "Abluft °C",
    "Air d'extraction ° C",
    "Afgevoerde lucht ° C",
    "Väljatõmbeõhk °C",
    "Fraluft  °C",
    "temperatura powietrza wywiewanego",
    "Nosuces gaiss °C",
    "Istr. oro °C"
  ],
  "id_text_outdoor_air_degrees": [
    "Outdoor air °C",
    "Ulkoilma °C",
    "Uteluft °C",
    "Außenluft °C",
    "Air à l'extérieur ° C",
    "Lucht buitenshuis ° C",
    "Välisõhk °C",
    "Udeluft °C",
    "temperatura powietrza na zewnatrz",
    "Ara gaiss °C",
    "Lauko oro °C"
  ],
  "id_text_supply_air_degrees": [
    "Supply air °C",
    "Tuloilma °C",
    "Tilluft °C",
    "Zuluft °C",
    "Air d'alimentation ° C",
    "Toevoerlucht ° C",
    "Sissepuhkeõhk °C",
    "Tilluft °C",
    "temperatura powietrza nawiewanego",
    "Piepludes gaiss °C",
    "Tiekim. oro °C"
  ],
  "id_text_exhaust_air_degrees": [
    "Exhaust air °C",
    "Jäteilma °C",
    "Avluft °C",
    "Fortluft °C",
    "Air d'extraction ° C",
    "Afvoerlucht ° C",
    "Heitõhk °C",
    "Afkast °C",
    "temperatura powietrza wyciagu",
    "Izvadamais gaiss °C",
    "Ism. oro °C"
  ],
  "id_text_fireplace_mode_off": [
    "Fireplace function OFF",
    "Takkatoiminto pois",
    "Braskaminsstatus AV",
    "Kaminfunktion Aus",
    "Fonction de cheminée OFF",
    "Open haard functie OFF",
    "Kaminafunktsioon väljas",
    "Pejsefunktion OFF ",
    "funkcja kominkowa wylaczona",
    "Kamina funkcija IZSLEGTA",
    "Zidinio funk. ISJ."
  ],
  "id_text_fireplace_mode_on": [
    "Fireplace function ON",
    "Takkatoiminto päällä",
    "Braskaminsstatus PÅ",
    "Kaminfunktion Ein",
    "Fonction de cheminée ON",
    "Open haard functie ON",
    "Kaminafunktsioon sees",
    "Pejsefunktion ON",
    "funkcja kominkowa wlaczona",
    "Kamina funkcija IESLEGTA",
    "Zidinio funk. IJ."
  ],
  "id_text_extract_air": [
    "Extract air",
    "Poistoilma",
    "Frånluft",
    "Abluft",
    "Air d'extraction",
    "Afvoerlucht",
    "Väljatõmbeõhk  ",
    "Fraluft",
    "powietrze wywiewane",
    "Nosuces gaiss",
    "Istr. oras"
  ],
  "id_text_method": [
    "Defrosting method",
    "Sulatustapa",
    "Tiningsmetod",
    "Abtauverfahren",
    "Méthode de dégivrage",
    "Ontdooiingsmethode",
    "Sulatusviis",
    "Afrimningsmetode",
    "Sposób odszraniania",
    "Atkausesanas metode",
    "Atitirp. metodas"
  ],
  "id_text_percent_rh": [
    "%RH",
    "%RH",
    "%RH",
    "%RH",
    "%HR",
    "%RH   ",
    "%RH",
    "Relativ Luftfugtighed %",
    "% wilgotnosci",
    "%RM",
    "%RH"
  ],
  "id_text_save_installation_s": [
    "Save setup settings",
    "Tallenna käyttöönottoasetukset",
    "Spara installationsinställningarna",
    "Inbetriebnahme-Einstellungen speichern",
    "Sauvegarder les réglages de configuration",
    "Installatie instellingen opslaan",
    "Salvesta kasutusseaded",
    "Gem indstillinger",
    "Zapisac ustawienia konfiguracyjne",
    "Saglabat uzstadisanas iestat.",
    "Iras. sarankos nuost."
  ],
  "id_text_restore_installation_s": [
    "Restore setup settings",
    "Palauta käyttöönottoasetukset",
    "Återställ installationsinställningarna",
    "Inbetriebnahme-Einstell. wiederherstellen",
    "Rétablir les réglages d'installation",
    "Herstel installatie instellingen",
    "Taasta kasutusseaded",
    "Nulstil indstillinger",
    "Przywróc ustawienia konfiguracyjne",
    "Atjaunot uzstadinas iestat.",
    "Atst. sarankos nuost."
  ],
  "id_text_restore_factory_s": [
    "Restore factory settings",
    "Palauta tehdasasetukset",
    "Återställ fabriksinställningarna",
    "Werkseinstellungen wiederherstellen",
    "Rétablir les réglages d'usine",
    "Herstel fabrieksinstellingen",
    "Taasta tehaseseaded",
    "Gendan fabriksindstillinger ",
    "Przywróc ustawienia fabryczne",
    "Atjaunot rupnicas iestat.",
    "Atst. gamyklines nuost."
  ],
  "id_text_restore_user_s": [
    "Restore user settings",
    "Palauta käyttäjäasetukset",
    "Återställ användarinställningarna",
    "Benutzereinstellungen wiederherstellen",
    "Rétablir les réglages d'utilisateur",
    "Herstel gebruikersinstellingen",
    "Taasta kasutaja seaded",
    "Nulstil brugerindstillinger",
    "Przywróc ustawienia uzytkownika",
    "Atjaunot lietotaja iestat.",
    "Atst. naudotojo nuost."
  ],
  "id_text_save_user_s": [
    "Save user settings",
    "Tallenna käyttäjäasetukset",
    "Spara användarinställningarna",
    "Benutzereinstellungen speichern",
    "Sauvegarder les réglages de l'utilisateur",
    "Gebruikersinstellingen opslaan",
    "Salvesta kasutaja seaded",
    "Gem brugerindstillinger",
    "Zapisac ustawienia uzytkownika",
    "Saglabat lietotaja iestat.",
    "Iras. naudotojo nuost."
  ],
  "id_text_inst_settings_saved": [
    "Setup settings saved!",
    "Käyttöönottoasetukset talletettu!",
    "Installationsinställningarna har sparats!",
    "Inbetriebnahme-Einstellungen gespeichert!",
    "Configuration réglage sauvegardée!",
    "Installatie instellingen opgeslagen!",
    "Kasutusseaded salvestatud!",
    "Indstillinger gemt",
    "Ustawienia konfiguracyjne zapisane!",
    "Uzstad. iestatijumi saglabati!",
    "Sarank. nuostatos iras.!"
  ],
  "id_text_inst_settings_restored": [
    "Setup settings restored!",
    "Käyttöönottoasetukset palautettu!",
    "Installationsinställningarna har återställts!",
    "Inbetriebnahme-Einstell. wiederhergestellt!",
    "Configuration réglages restaures!",
    "Installatie-instellingen hersteld!",
    "Kasutusseaded taastatud!",
    "Indstillinger nulstillet",
    "Ustawienia konfiguracyjne przywrócone!",
    "Uzstad. iestatijumi atjaunoti!",
    "Sarank. nuostatos atst.!"
  ],
  "id_text_f_settings_restored": [
    "Factory settings restored!",
    "Tehdasasetukset palautettu!",
    "Fabriksinställningarna har återställts!",
    "Werkseinstellungen wiederhergestellt!",
    "Réglages d'usine restaurés!",
    "Fabrieksinstellingen hersteld!",
    "Tehaseseaded taastatud!",
    "Fabriksindstillinger gendannet",
    "Ustawienia fabryczne przywrócone!",
    "Rupnicas iestatijumi atjaunoti!",
    "Gamykl. nuostatos atst.!"
  ],
  "id_text_user_settings_restored": [
    "User settings restored!",
    "Käyttäjäasetukset palautettu!",
    "Användarinställningarna har återställts!",
    "Benutzereinstellungen wiederhergestellt!",
    "Réglages utilisateur restaurés!",
    "Gebruikersinstellingen hersteld!",
    "Kasutajaseaded taastatud!",
    "Brugerindstillinger nulstillet",
    "Ustawienia uzytkownika przywrócone!",
    "Lietotaja iestatijumi atjaunoti!",
    "Naud. nuostatos atst.!"
  ],
  "id_text_user_settings_saved": [
    "User settings saved!",
    "Käyttäjäasetukset talletettu!",
    "Användarinställningarna har sparats!",
    "Benutzereinstellungen gespeichert!",
    "Réglages utilisateur sauvegardés!",
    "Gebruikersinstellingen opgeslagen!",
    "Kasutajaseaded salvestatud!",
    "Brugerindstillinger gemt",
    "Ustawienia uzytkownika zapisane!",
    "Lietotaja iestatijumi saglabati!",
    "Naud. nuostatos iras.!"
  ],
  "id_text_automatic": [
    "Automatic",
    "Automaattinen",
    "Automatisk",
    "Automatisch",
    "Automatique",
    "Automatisch",
    "Automaatne",
    "Automatisk",
    "Automatyczny",
    "Automatisks",
    "Automatinis"
  ],
  "id_text_manual": [
    "Manual",
    "Manuaalinen",
    "Manuell",
    "Manuell",
    "Manuel",
    "Manueel",
    "Manuaalne",
    "Manuel",
    "Reczny",
    "Manuals",
    "Rankinis"
  ],
  "id_text_co2": [
    "CO2",
    "CO2",
    "CO2",
    "CO2",
    "CO2",
    "CO2",
    "CO2",
    "CO2",
    "CO2",
    "CO2",
    "CO2"
  ],
  "id_text_co2_limit": [
    "CO2 limit",
    "CO2 raja",
    "CO2-gräns",
    "CO2-Grenze",
    "Limite de CO2",
    "CO2 limiet",
    "CO2 piirmäär",
    "CO2 grænse",
    "ograniczenie emisji CO2",
    "CO2 limits",
    "CO2 riba"
  ],
  "id_text_celcius_target": [
    "°C control mode",
    "°C säätötapa",
    "°C inställningssätt",
    "Regelungsmodus °C  ",
    "Mode de régulation ° C",
    "° C regelmodus",
    "°C seadistusviis",
    "Kontrol af °C",
    "Tryb sterowania °C",
    "°C kontroles rezims",
    "°C vald. rezimas"
  ],
  "id_text_humidity_limit": [
    "Humidity limit",
    "Kosteusraja",
    "Fuktighetsgräns",
    "%RH-Grenze",
    "Limite d'humidité",
    "Vochtigheidslimiet",
    "Niiskuse piirmäär",
    "Fugtighedsgrænse ",
    "granica wilgotnosci",
    "Mitruma limits",
    "Dregnio riba"
  ],
  "id_text_melting": [
    "Melting",
    "Sulatus",
    "Avfrostning",
    "Abtauen",
    "Fondre",
    "Het smelten",
    "Sulatus ",
    "Afrimning",
    "Odszranianie",
    "Atkausesana",
    "Atitirpinimas"
  ],
  "id_text_humidity_sensor": [
    "Humidity sensor",
    "Kosteusanturi",
    "Fuktighetsgivare",
    "Feuchtesensor",
    "Capteur d'humidité",
    "Vochtigheidssensor",
    "Niiskusandur",
    "Fugtsensor",
    "czujnik wilgotnosci",
    "Mitruma sensors",
    "Dregnio jutikl."
  ],
  "id_text_co2_sensor": [
    "Carbon dioxide sensor",
    "Hiilidioksidianturi",
    "Koldioxidgivare",
    "Kohlendioxidsensor",
    "Capteur de dioxyde de carbone",
    "Koolstofdioxidesensor",
    "CO2 andur",
    "CO2 sensor",
    "Czujnik dwutlenku wegla",
    "Oglekla dioksida sensors",
    "Anglies dioks. jutikl."
  ],
  "id_text_no": [
    "no",
    "ei",
    "nej",
    "Nein",
    "non",
    "nee",
    "ei",
    "nej",
    "nie",
    "ne",
    "ne"
  ],
  "id_text_even": [
    "even",
    "parillinen",
    "jämt",
    "gerade",
    "pair",
    "even",
    "paaris",
    "Lige",
    "jesli",
    "para",
    "lyg."
  ],
  "id_text_odd": [
    "odd",
    "pariton",
    "ojämt",
    "ungerade",
    "impair",
    "oneven",
    "paaritu",
    "Ulige",
    "kilka",
    "nepara",
    "nelyg."
  ],
  "id_text_not_tested": [
    "Not tested",
    "Ei testattu",
    "Har inte testats",
    "Nicht getestet",
    "Non testé",
    "Niet getest",
    "Ei ole testitud",
    "Ikke testet",
    "nie sprawdzano",
    "Nav parbaudits",
    "Netest."
  ],
  "id_text_ok": [
    "OK",
    "Onnistunut",
    "Lyckades",
    "Erfolgreich",
    "OK",
    "OK",
    "OK",
    "OK",
    "ok.",
    "OK",
    "Gerai"
  ],
  "id_text_failed": [
    "Failed",
    "Epäonnistunut",
    "Misslyckades",
    "Nicht erfolgreich",
    "Echoué",
    "Mislukt",
    "Ebaõnnestunud",
    "Mislykket",
    "Nie powiodlo sie",
    "Neizdevas",
    "Nepav."
  ],
  "id_text_testing_ongoing": [
    "Testing . .",
    "Testaa . .",
    "Testar . .",
    "Test läuft . .",
    "Testing",
    "Aan het testen...",
    "Testib...",
    "Tester…",
    "sprawdzanie. . ",
    "Parbauda...",
    "Testuoj. . ."
  ],
  "id_text_bypass_position": [
    "Bypass flap position",
    "Ohitusläpän asento",
    "Förbigångsspjällets läge",
    "Stellung Bypassklappe",
    "Position de vanne de dérivation",
    "Positie bypassklep",
    "Möödaviigu klapi asend",
    "Position for bypass spjæld",
    "pozycja klap by-pass'u",
    "Apejas atloka pozicija",
    "Apejimo sklend. padet."
  ],
  "id_text_1st_appeared": [
    "1st appeared",
    "1. esiintyminen",
    "Första förekomst",
    "Erstmalig aufgetreten",
    "Première occurrence",
    "1ste voorval",
    "1. esinevus",
    "1. forekomst",
    "pierwsze pojawienie sie",
    "1. notikums",
    "Ivyko 1-a karta"
  ],
  "id_text_times_appeared": [
    "Times appeared",
    "Esiintymiskerrat",
    "Antal förekomster",
    "Häufigkeit",
    "Fréquence",
    "Frequentie",
    "Esinevuskorrad",
    "Antal forekomster",
    "okresy pojawiania sie ",
    "Notikumu skaits",
    "Ivyko kartu"
  ],
  "id_text_latest_appearance": [
    "Latest appearance",
    "Viimeisin esiintyminen",
    "Senaste förekomst",
    "Letztmalig aufgetreten",
    "Dernière occurrence",
    "Laatste voorval",
    "Viimane esinevus",
    "Seneste forekomst",
    "ostanie pojawienie sie",
    "Pedejais notikums",
    "Ivyko pask. karta"
  ],
  "id_text_severity": [
    "Severity",
    "Vakavuus",
    "Allvarlighet",
    "Schweregrad",
    "Gravité",
    "Prioriteit",
    "Vea määratlus",
    "Alvorlighed",
    "ostrosc",
    "Smaguma pakape",
    "Sunkumas"
  ],
  "id_text_status": [
    "Status",
    "Tila",
    "Status",
    "Status",
    "Etat",
    "Status",
    "Olek",
    "Status",
    "pozycja",
    "Statuss",
    "Busena"
  ],
  "id_text_severe": [
    "Severe",
    "Vakava",
    "Allvarlig",
    "Schwer",
    "Grave",
    "Ernstig",
    "Tõsine",
    "Alvorlig",
    "ostry",
    "Smags",
    "Sunki"
  ],
  "id_text_mild": [
    "Mild",
    "Lievä",
    "Lindrig",
    "Leicht",
    "Léger",
    "Licht",
    "Lihtne",
    "Svag",
    "delikatny",
    "Merens",
    "Svelni"
  ],
  "id_text_active": [
    "Active",
    "Hälyttää",
    "Larmar",
    "Alarm",
    "Actif",
    "Actief",
    "Häire",
    "Aktiv",
    "aktywny",
    "Aktivs",
    "Aktyvi"
  ],
  "id_text_solved": [
    "Solved",
    "Kuitattu",
    "Har kvitterats",
    "Quittiert",
    "Résolu",
    "Opgelost",
    "Lahendatud",
    "Løst",
    "rozwiazany",
    "Atrisinats",
    "Ispresta"
  ],
  "id_text_not_active": [
    "Not active",
    "Ei aktiivi",
    "Inte aktiv",
    "Nicht aktiv",
    "Non actif",
    "Niet actief",
    "Ei ole aktiivne",
    "Ikke aktiv",
    "nie aktywny",
    "Neaktivs",
    "Neaktyv."
  ],
  "id_text_empty": [
    "Empty",
    "Tyhjä",
    "Tom",
    "Leer",
    "Vide",
    "Leeg",
    "Tühi",
    "Tom",
    "pusty",
    "Tukss",
    "Tuscia"
  ],
  "id_text_selftest_in_progress": [
    "Self test in progress",
    "Testi käynnissä",
    "Test pågår",
    "Test läuft",
    "Auto-test en cours",
    "Bezig met de zelftest",
    "Toimub seadme test",
    "Automatisk Test igang",
    "Autotest w toku",
    "Notiek pasparbaude",
    "Vyksta autom. testav."
  ],
  "id_text_query_stop_it": [
    "Would you like to stop it?",
    "Haluatko pysäyttää?",
    "Vill du stoppa detta?",
    "Wollen Sie anhalten?",
    "Voulez-vous arrêter?",
    "Wilt u stoppen?",
    "Soovite katkestada?",
    "Vil du standse den?",
    "Czy chcesz go zatrzymac?",
    "Vai velaties partraukt?",
    "Norite sustabdyti?"
  ],
  "id_text_temp_sensors": [
    "Temperature sensors",
    "Lämpötila-anturit",
    "Temperaturgivare",
    "Temperatursensor",
    "Capteurs de température",
    "Temperatuursensors",
    "Temperatuuriandurid",
    "Temperatursensor",
    "czujniki temperatury",
    "Temperaturas sensori",
    "Temperaturos jutikliai"
  ],
  "id_text_extra_heating": [
    "Melting resistor",
    "Sulatusvastus",
    "Tiningsmotstånd",
    "Heizregister 2",
    "Résistance de dégivrage",
    "Smeltweerstand",
    "Sulatuskalorifeer",
    "Afrimningsmodstand",
    "rezystor topienia",
    "Atkausesanas rezistors",
    "Atitirp. rezist."
  ],
  "id_text_week_clock_menu": [
    "Week clock menu",
    "Viikkokello valikko",
    "Veckoursmeny",
    "Wochenprogramm",
    "Programme hebdomadaire",
    "Weekklok menu",
    "Nädalakella menüü",
    "Menu uge ur",
    "menu zegara tygodniowego",
    "Nedelas pulkstena izvelne",
    "Savaites laikr. meniu"
  ],
  "id_text_turn_off": [
    "Turn OFF",
    "Pysäytä viikkokello",
    "Stoppa veckouret",
    "Stoppen",
    "Eteindre",
    "Uitschakelen",
    "Peata nädalakell",
    "Uge ur OFF",
    "Wylacz",
    "IZSLEGT",
    "ISJ."
  ],
  "id_text_turn_on": [
    "Turn ON",
    "Käynnistä viikkokello",
    "Starta veckouret",
    "Starten",
    "Allumer  ",
    "Aanschakelen ",
    "Lülita nädalakell sisse",
    "Uge ur ON",
    "Wlacz",
    "IESLIEGT",
    "IJ."
  ],
  "id_text_schedule_done": [
    "Save settings",
    "Tallenna asetukset",
    "Spara inställningarna",
    "Einstellungen speichern",
    "Sauvegarder les réglages",
    "Instellingen opslaan",
    "Salvesta seaded",
    "Gem indstillinger",
    "zapisz ustawienia",
    "Saglabat iestatijumus",
    "Iras. nuostatas"
  ],
  "id_text_remove_all_items": [
    "Remove all items",
    "Poista kaikki asetukset",
    "Radera alla inställningar",
    "Alle Einstellungen löschen",
    "Supprimer tous les éléments",
    "Verwijder alle items ",
    "Eemalda kõik seaded",
    "Slet alle indstillinger ",
    "Usun wszystkie dane",
    "Atcelt visus vienumus",
    "Pasalinti visus elem."
  ],
  "id_text_cancel_and_quit": [
    "Cancel and Quit",
    "Peruuta ja lopeta",
    "Ångra och avsluta",
    "Abbrechen und beenden",
    "Annuler et quitter",
    "Annuleren en afsluiten",
    "Tühista ja lõpeta",
    "Annuller og afslut",
    "Anuluj i Zakoncz",
    "Atcelt un iziet",
    "Nutr. ir iseiti"
  ],
  "id_text_schedule_is_saved": [
    "Week schedule has been saved",
    "Viikko-ohjelma tallennettu",
    "Veckoschemat har sparats",
    "Wochenprogramm gespeichert",
    "Programme de la semaine a été sauvegardé",
    "Weekschema werd opgeslagen",
    "Nädalakell on salvestatud",
    "Ugeskema er gemt",
    "Plan tygodniowy zostal zapisany",
    "Nedelas grafiks saglabats",
    "Savaites grafikas buvo irasytas"
  ],
  "id_text_save_quit": [
    "Save and Quit",
    "Tallenna ja lopeta",
    "Spara och avsluta",
    "Speichern und beenden",
    "Sauvegarder et quitter",
    "Opslaan en afsluiten",
    "Salvesta ja lõpeta",
    "Gem og afslut",
    "Zapisz i Zakoncz",
    "Saglabat un iziet",
    "Iras. ir iseiti"
  ],
  "id_text_query_turn_w_c_on": [
    "Turn the week clock on now?",
    "Käynnistä nyt viikkokello?",
    "Vill du starta veckouret?",
    "Wochenprogramm starten?",
    "Activer programme hebdomadaire maitenant?",
    "Weekklok nu inschakelen?",
    "Lülita nädalakell sisse nüüd?",
    "Vil du starte uge ur nu?",
    "uruchomic zegar tygodniowy teraz?",
    "Ieslegt nedelas pulksteni?",
    "Dabar ijungti savaites laikr.?"
  ],
  "id_text_query_remove_all": [
    "Remove all?",
    "Poistetaanko kaikki?",
    "Vill du ta bort alla?",
    "Alles löschen?",
    "Supprimer tous?",
    "Alles verwijderen?",
    "Kustuta kõik?",
    "Vil du slette alt?",
    "Usun wszystko?",
    "Atcelt visus?",
    "Pasalinti viska?"
  ],
  "id_text_query_continue1": [
    "Are you sure you want to continue?",
    "Haluatko jatkaa?",
    "Vill du fortsätta?",
    "Wollen Sie fortfahren?",
    "Etes-vous sûr de vouloir continuer?",
    "Weet u zeker dat u wilt verdergaan?",
    "Kas soovid jätkata?",
    "Vil du fortsætte?",
    "Czy na pewno chcesz kontynuowac?",
    "Vai velaties turpinat?",
    "Ar tikrai norite testi?"
  ],
  "id_text_query_continue2": [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  "id_text_query1_w_c_remove": [
    "Are you sure you want to remove",
    "Oletko varma että haluat",
    "Är du säker på att du vill",
    "Alle Einstellungen des",
    "Etes-vous sûr que vous voulez supprimer",
    "Weet u zeker dat u wilt verwijderen",
    "Kas soovid kustutada kõik nädalakella seaded?",
    "Vil du slette alle uge ur indstillinger?",
    "Czy na pewno chcesz usunac",
    "Vai velaties atcelt",
    "Ar tikrai norite pasalinti"
  ],
  "id_text_query2_w_c_remove": [
    "all items from the week clock?",
    "poistaa kaikki viikkokellon",
    "ta bort alla inställningar för",
    "Wochenprogramms löschen?",
    "Tous les éléments du programma hebdomaire",
    "Alle items van het weekprogramma",
    null,
    null,
    "wszystkie pozycje z zegara tygodniowego?",
    "visus vienumus no nedelas pulkstena?",
    "visus elem. is savaites laikr.?"
  ],
  "id_text_query3_w_c_remove": [
    null,
    "asetukset?",
    "veckouret?",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  "id_text_w_c_all_removed": [
    "All items removed",
    "Kaikki asetukset poistettu",
    "Alla inställningar har tagits bort",
    "Alle Einstellungen gelöscht",
    "Tous les éléments sont supprimés",
    "Alle items werden verwijderd",
    "Kõik seaded kustutatud",
    "Alle indstillinger slettet",
    "Wszystkie elementy usuniete",
    "Visi vienumi atcelti",
    "Visi elem. pasalinti"
  ],
  "id_text_start_the_use": [
    "Start the use",
    "Käynnistä",
    "Starta",
    "Start",
    "Commencez l'utilisation",
    "Start het gebruik",
    "Alusta",
    "Start",
    "Rozpocznij uzytkowanie",
    "Sakt",
    "Paleisti"
  ],
  "id_text_up_down": [
    "0V / 24V",
    "0V / 24V",
    "0V / 24V",
    "0 V / 24 V",
    "0V / 24V",
    "0V / 24V",
    "0V / 24V",
    "0 V / 24 V",
    "0v / 24v",
    "0V / 24 V",
    "0 V / 24 V"
  ],
  "id_text_voltage_steps": [
    "0-1V, 2-4V, 5-7V, 8-10V",
    "0-1V, 2-4V, 5-7V, 8-10V",
    "0-1 V, 2-4 V, 5-7 V, 8-10 V",
    "0-1 V, 2-4 V, 5-7 V, 8-10 V",
    "0-1V, 2-4V, 5-7V, 8-10V",
    "0-1V, 2-4V, 5-7V, 8-10V",
    "0-1V, 2-4V, 5-7V, 8-10V",
    "0-1 V, 2-4 V, 5-7 V, 8-10 V",
    "0-1V, 2-4V, 5-7V, 8-10V",
    "0-1V, 2-4V, 5-7V, 8-10V",
    "0–1 V, 2–4 V, 5–7 V, 8–10 V"
  ],
  "id_text_analog_v_ctrl_range": [
    "0-10V = +5°C - +25°C",
    "0-10V = +5°C - +25°C",
    "0-10V = +5°C - +25°C",
    "0-10 V = +5°C - +25°C",
    "0-10V = +5°C - +25°C",
    "0-10V = +5°C - +25°C",
    "0-10V = +5°C - +25°C",
    "0-10 V = +5 °C - +25 °C",
    "0-10V = +5°C - +25°C",
    "0-10V = +5°C - +25°C",
    "0–10 V = 5–25 °C"
  ],
  "id_text_fireplace_on_off": [
    "Fireplace function Off / On",
    "Takkatoiminto pois / päällä",
    "Braskaminsstatus Av/På",
    "Kaminfunktion Aus / Ein",
    "Fonction de cheminée Off / On",
    "Open haard functie UIT/AAN",
    "Kaminafunktsioon väljas/sees",
    "Pejsefunktion OFF/ON",
    "funkcja kominkowa wylacz / wlacz",
    "Kamina funkcija Izslegta/Ieslegta",
    "Zidinio funk. ISJ. / IJ."
  ],
  "id_text_home_away_switch": [
    "Home / Away",
    "Kotona / Poissa",
    "Hemma /Borta",
    "Anwesend / Abwesend",
    "Présent / Absent",
    "Aanwezig / Afwezig",
    "Kodus / Ära",
    "Hjemme/Ude",
    "dom / poza domem",
    "Majas/Arpus majas",
    "Namuose / isv."
  ],
  "id_text_forced_fireplace_on_off": [
    "Forced fireplace mode Off / On",
    "Pakotettu takkatoiminto pois / päällä",
    "Forcerad braskaminstatus Av / På",
    "Erzwungene Kaminfunktion Aus/Ein",
    "Mode cheminée forcé Off / On",
    "Gedwongen open haard modus UIT / AAN",
    "Sunnitud kaminafunktsioon väljas/sees",
    "Tvinge pejsefunktion OFF/ON",
    "Wymuszony tryb kominkowy wylacz / wlacz",
    "Piespiedu kamina rezims Izslegts/Ieslegts",
    "Priverst. zidinio rezimo ISJ./IJ."
  ],
  "id_text_fire_alarm_none_stop": [
    "Emergency stop /  normal operation",
    "Hätä-seis / Normaalitoiminta",
    "Brandvarnare Ingen / Stopp",
    "Not-Aus / Normalbetrieb",
    "Arrêt d'urgence / fonctionnement normal",
    "Noodstop / normale werking",
    "Hädaolukord seis / Normaaltoimimine",
    "Nødstop / normal drift",
    "Zatrzymanie awaryjne / normalna praca",
    "Avarijas apturesana / normala darbiba",
    "Avarinis stabd. / iprastas veikimas"
  ],
  "id_text_boost_on_neutral": [
    "Neutral / Boost On",
    "Normaalitoiminta / Tehostus päällä",
    "Neutral / Forcering På",
    "Normalbetrieb / Stoßlüftung Ein",
    "Neutre / Boost On",
    "Neutraal / Boost Aan",
    "Normaatoimimine / Võimendus sees",
    "Neutral / Boost ON",
    "Neutrlany / Zwiekszony",
    "Neitrala/Papildu ventilac. Ieslegta",
    "neutralus / Padid."
  ],
  "id_text_forced_bypass": [
    "Forced bypass of HR Winter/Summer",
    "Suora Talvi / Kesä -ohjaus",
    "Direkt vinter-/ sommarstyrning",
    "Winter-/Sommer-Regelung",
    "Contournement forcé  hiver / d'été",
    "Geforceerde bypass Winter/Zomer",
    "Sunnitud Talv/Suvi juhtimine",
    "Tvungen bypass af varmeveksler Vint./Som. ",
    "Wymuszony tryb by-passu komory odzysku ciepla - Funkcja zima/Lato",
    "Piespiedu SA apeja ziema/vasara",
    "Priverst. rekuper. ziemai apej./vasarai"
  ],
  "id_text_week_clock_on_off": [
    "Week clock Off / On",
    "Viikkokello pois / päällä",
    "Veckour Av / På",
    "Wochenprogramm Aus / Ein",
    "Programme hebdomadaire Off / On",
    "Weekklok Uit / Aan",
    "Nädalakell väljas/sees",
    "Uge ur OFF/ON",
    "zegar tygodniowy wylacz/ wlacz",
    "Nedelas pulkstenis Izslegts/Ieslegts",
    "Savaites laikr. ISJ. / IJ."
  ],
  "id_text_selfprogrammed_input": [
    "Self-programmed input",
    "Ohjelmoitava sisääntulo",
    "Självprogrammerad ingång",
    "Programmierbarer Eingang",
    "Entrée auto-programmé",
    "Zelf geprogrammeerde invoer",
    "Digitaalne sisend välisele juhtimisele",
    "Programmerbar indgang ",
    "wlasne programowane wejscia ",
    "Pasprogrammesanas ievade",
    "Autom. program. ivestis"
  ],
  "id_text_stop_away_home_boost": [
    "Stop, Away, Home, Boost",
    "Seis, Poissa, Kotona, Tehostus",
    "Stopp, Borta, Hemma, Forcering",
    "Stopp, Abwesend, Anwesend, Stoßlüftung",
    "Arrêter, Absent, Présent, Boost",
    "Stoppen, Afwezig, Aanwezig, Boost",
    "Seis, Ära, Kodus, Võimendus",
    "Stop, Ude, Hjemme, Forcering",
    "zatrzymaj, poza domem, dom, zwieksz",
    "Apturet, Arpus majas, Majas, Papildu ventilac.",
    "Stop, isvyk., namuose, didin."
  ],
  "id_text_supply_air_temperature_control": [
    "Supply air temperature control",
    "Tuloilman lämpötilaohjaus",
    "Styrning av tilluftens temperatur",
    "Temperatursteuerung Zuluft",
    "Contrôle de la température de l'air d'alimentation",
    "Inblaastemperatuurregeling",
    "Sissepuhkeõhtu temperatuuri juhtimine",
    "Kontrol af tilluft temperatur",
    "Regulacja temperatury powietrza nawiewanego",
    "Piepludes gaisa temperaturas kontrole",
    "Tiekiamo oro temp. valdymas"
  ],
  "id_text_error": [
    "Error",
    "Vika",
    "Fel",
    "Fehler",
    "Erreur",
    "Fout ",
    "Viga",
    "Fejl",
    "blad",
    "Kluda",
    "Klaida"
  ],
  "id_text_error_or_service_remainder": [
    "Error or service remainder",
    "Vika ja huoltomuistutin",
    "Fel och servicetimer",
    "Fehler- und Wartungsanzeige",
    "Rappel d'erreur ou d'entretien",
    "Fout of onderhoudsherinnering",
    "Viga või hoolduse meeldetuletus",
    "Fejl eller servicealarm",
    "Blad lub przypomnienie obslugi",
    "Kluda vai apkopes atgadinajums",
    "Klaida arba techn. priez. priminim."
  ],
  "id_text_relay_control_coupling": [
    "Control of external liquid radiator",
    "Ulkoisen nestepatteri ohjaus",
    "Styrning av extern vätskeradiator",
    "Regelung externes Heizregister",
    "Contrôle de radiateur de liquide externe",
    "Controle van de externe vloeistofradiator",
    "Välise vedelikkalorifeeri juhtimine",
    "Kontrol af ekstern væske varmeflade",
    "Kontrola zewnetrznej chlodnicy cieczy",
    "Areja skidruma radiatora kontrole",
    "Isor. skysc. radiatoriaus vald."
  ],
  "id_text_relay_bypass_state": [
    "Bypass state",
    "Ohituspellin tila",
    "Förbigångsspjällets läge",
    "Status Bypassklappe",
    "Etat de dérivation",
    "Bypass status",
    "Möödaviigu olek",
    "Status for bypass",
    "stan by-pass'u",
    "Apejas stavoklis",
    "Apejimo busena"
  ],
  "id_text_you_may_update_now": [
    "You may update now",
    "Voit päivittää nyt",
    "Du kan uppdatera nu",
    "Sie können jetzt updaten",
    "Vous pouvez mettre à jour maintenant",
    "U kunt nu updaten",
    "Võid uuendada nüüd",
    "Du kan nu opdatere",
    "Teraz mozna uaktualnic",
    "Tagad var atjauninat",
    "Dabar galite naujinti"
  ],
  "id_text_remove_usb": [
    "Disconnect USB when done",
    "Irrota USB kun valmis",
    "Ta loss USB när du är klar",
    "USB-Stick kann jetzt entfernt werden",
    "déconnecter le USB lorsque vous avez terminé",
    "USB loskoppelen als u klaar bent",
    "Eemalda USB kui valmis",
    "Fjern USB når du er færdig",
    "Po zakonczeniu odlacz USB",
    "Kad pabeigts, atvienojiet USB",
    "Atlike atjunkite USB"
  ],
  "id_text_please_wait": [
    "Please wait",
    "Odota",
    "Vänta",
    "Bitte warten",
    "Patienter s'il vous plaît",
    "Even geduld aub",
    "Oota",
    "Vent venligst",
    "Prosze czekac",
    "Ludzu gaidit",
    "Palaukite"
  ],
  "id_text_alarm_extract_stop": [
    "Extract fan stop",
    "Poistopuhallin seis",
    "Stoppa frånluftsfläkten",
    "Abluftventilator Stopp",
    "Ventilateur d'extraction arrêt",
    "Extractieventilator stop",
    "Väljatõmbeventilaator seis",
    "Standsning af fraluftventilator ",
    "zatrzymaj wentylator wywiewny",
    "Nosuces ventilators nedarbojas",
    "Sust. istrauk. vent."
  ],
  "id_text_alarm_supply_stop": [
    "Supply fan stop",
    "Tulopuhallin seis",
    "Stoppa tilluftsfläkten",
    "Zuluftventilator Stopp",
    "Ventilateur d'alimentation arrêt",
    "Toevoerventilator stop",
    "Sissepuhkeventilaator seid",
    "Standsning af tilluftventilator ",
    "zatrzymaj wentylator nawiewny",
    "Piepludes ventilators nedarbojas",
    "Sust. tiekim. vent."
  ],
  "id_text_alarm_cell_frozen": [
    "Cell fozen",
    "Kenno jäätynyt",
    "VÅV-elementet har frusit",
    "Wärmetauscher vereist",
    "Echangeur de chaleur congelé",
    "Warmtewisselaar bevroren",
    "Soojusvaheti jäätunud",
    "Tilisning af varmeveksler",
    "Komora zamarznieta",
    "Elements sasalis",
    "Silumok. uzsal."
  ],
  "id_text_alarm_temp_sensor1": [
    "Temp1 sensor",
    "Lämpöanturi 1",
    "Temperaturgivare1",
    "Temperatursensor 1",
    "Temp1 capteur",
    "Temp1 sensor",
    "Temp.andur 1",
    "Temp1 sensor",
    "czujnik temperatury 1",
    "Temp1 sensors",
    "1 temp. jutikl."
  ],
  "id_text_alarm_temp_sensor2": [
    "Temp2 sensor",
    "Lämpöanturi 2",
    "Temperaturgivare2",
    "Temperatursensor 2",
    "Temp2 capteur",
    "Temp2 sensor",
    "Temp.andur 2",
    "Temp2 sensor",
    "czujnik temperatury 2",
    "Temp2 sensors",
    "2 temp. jutikl."
  ],
  "id_text_alarm_temp_sensor3": [
    "Temp3 sensor",
    "Lämpöanturi 3",
    "Temperaturgivare3",
    "Temperatursensor 3",
    "Temp3 capteur",
    "Temp3 sensor",
    "Temp.andur 3",
    "Temp3 sensor",
    "czujnik temperatury 3",
    "Temp3 sensors",
    "3 temp. jutikl."
  ],
  "id_text_alarm_temp_sensor4": [
    "Temp4 sensor",
    "Lämpöanturi 4",
    "Temperaturgivare4",
    "Temperatursensor 4",
    "Temp4 capteur",
    "Temp4 sensor",
    "Temp.andur 4",
    "Temp4 sensor",
    "czujnik temperatury 4",
    "Temp4 sensors",
    "4 temp. jutikl."
  ],
  "id_text_alarm_temp_sensor5": [
    "Temp5 sensor",
    "Lämpöanturi 5",
    "Temperaturgivare5",
    "Temperatursensor 5",
    "Temp5 capteur",
    "Temp5 sensor",
    "Temp.andur 5",
    "Temp5 sensor",
    "czujnik temperatury 5",
    "Temp5 sensors",
    "5 temp. jutikl."
  ],
  "id_text_alarm_filter": [
    "Filter dirty",
    "Suodatin likainen",
    "Filtret smutsigt",
    "Filter verschmutzt",
    "Filtre sale",
    "Filter vuil",
    "Filter on määrdunud",
    "Snavset filter",
    "Filtr zanieczyszczony",
    "Netirs filtrs",
    "Uzsik. filtras"
  ],
  "id_text_alarm_supply_block": [
    "Supply blocked",
    "Tulo tukossa",
    "Tilluften tilltäppt",
    "Zuluftventilator blockiert",
    "Alimentation d'air blocquée",
    "Toevoer geblokkeerd",
    "Sissepuhe blokeerunud",
    "Tilluft tilstoppet",
    "Nawiew zablokowane",
    "Pieplude bloketa",
    "Uzbl. tiekimas"
  ],
  "id_text_alarm_extract_block": [
    "Extract blocked",
    "Poisto tukossa",
    "Frånluften tilltäppt",
    "Fortluftventilator blockiert",
    "Extraction d'air blocquée",
    "Afvoer geblokkeerd",
    "Väljatõmme blokeerunud",
    "Fraluft tilstoppet",
    "wywiew zablokowany",
    "Nosuce bloketa",
    "Uzbl. istraukimas"
  ],
  "id_text_alarm_optional_temp_sensor": [
    "Optional sensor",
    "Ulkoinen anturi",
    "Extra temperaturgivare",
    "Temperatursensor optional",
    "Capteur optionnel",
    "Sensor optioneel",
    "Väline temperatuuriandur",
    "Ekstra temperatursensor",
    "czujnik opcjonalny",
    "Papildu sensors",
    "Papild. jutiklis"
  ],
  "id_text_alarm_postheater": [
    "Postheater",
    "Jälkilämmitin",
    "Eftervärmare",
    "Nachheizregister",
    "Post-chauffage",
    "Naverwarming",
    "Järelküte",
    "Eftervarmeflade ",
    "nagrzewnica wtórna",
    "Pecapsilde",
    "Papild. sildyt."
  ],
  "id_text_alarm_14": [
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "trauksme_x",
    "alarm_x"
  ],
  "id_text_alarm_15": [
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "trauksme_x",
    "alarm_x"
  ],
  "id_text_alarm_16": [
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "trauksme_x",
    "alarm_x"
  ],
  "id_text_alarm_17": [
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "trauksme_x",
    "alarm_x"
  ],
  "id_text_alarm_18": [
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "trauksme_x",
    "alarm_x"
  ],
  "id_text_alarm_19": [
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "alarm_x",
    "trauksme_x",
    "alarm_x"
  ],
  "id_text_alert_update_me": [
    "Update me!",
    "Päivitä tämä laite!",
    "Uppdatera den här!",
    "Update durchführen!",
    "Me mettre à jour",
    "Update mij!",
    "Uuenda programmi tarkvara!",
    "Opdatér",
    "Zaktualizuj mnie !",
    "Atjaunini mani!",
    "Atnaujink mane!"
  ],
  "id_text_alert_update_others": [
    "Update others!",
    "Päivitä muut laitteet!",
    "Uppdatera övriga!",
    "Update für andere Geräte!",
    "autres",
    "Update andere!",
    "Uuenda teiste pultide programmi tarkvara!",
    "Opdatér øvrige",
    "Zaktualizuj innych !",
    "Atjauninat citus!",
    "Atnaujink kitus!"
  ],
  "id_text_alert_update_in_progress": [
    "Update in progress",
    "Päivitys käynnissä",
    "Uppdatering pågår",
    "Update läuft",
    "Mettre à jour en cours",
    "Updaten in progress",
    "Toimub tarkvara uuendamine",
    "Opdatering i gang",
    "Aktualizacja w toku",
    "Notiek atjaunin.",
    "Vykdomas naujinimas"
  ],
  "id_text_trend_time_day": [
    "1 day",
    "1 päivä",
    "1 dag",
    "1 Tag",
    "1 jour",
    "1 dag",
    "1 päev",
    "1 dag",
    "1 dzien",
    "1 diena",
    "1 diena"
  ],
  "id_text_trend_time_week": [
    "1 week",
    "1 viikko",
    "1 vecka",
    "1 Woche",
    "1 semaine",
    "1 week",
    "1 nädal",
    "1 uge",
    "1 tydzien",
    "1 nedela",
    "1 savaitė"
  ],
  "id_text_1_2": [
    "1/2",
    "1/2",
    "1/2",
    "1/2",
    "1/2",
    "1/2",
    "1/2",
    "1/2",
    "1/2",
    "2016-02-01",
    "2016-02-01"
  ],
  "id_text_2_2": [
    "2/2",
    "2/2",
    "2/2",
    "2/2",
    "2/2",
    "2/2",
    "2/2",
    "2/2",
    "2/2",
    "2016-02-02",
    "2016-02-02"
  ],
  "id_text_1_3": [
    "1/3",
    "1/3",
    "1/3",
    "1/3",
    "1/3",
    "1/3",
    "1/3",
    "1/3",
    "1/3",
    "2016-03-01",
    "2016-03-01"
  ],
  "id_text_2_3": [
    "2/3",
    "2/3",
    "2/3",
    "2/3",
    "2/3",
    "2/3",
    "2/3",
    "2/3",
    "2/3",
    "2016-03-02",
    "2016-03-02"
  ],
  "id_text_3_3": [
    "3/3",
    "3/3",
    "3/3",
    "3/3",
    "3/3",
    "3/3",
    "3/3",
    "3/3",
    "3/3",
    "2016-03-03",
    "2016-03-03"
  ],
  "id_text_1_4": [
    "1/4",
    "1/4",
    "1/4",
    "1/4",
    "1/4",
    "1/4",
    "1/4",
    "1/4",
    "1/4",
    "2016-04-01",
    "2016-04-01"
  ],
  "id_text_2_4": [
    "2/4",
    "2/4",
    "2/4",
    "2/4",
    "2/4",
    "2/4",
    "2/4",
    "2/4",
    "2/4",
    "2016-04-02",
    "2016-04-02"
  ],
  "id_text_3_4": [
    "3/4",
    "3/4",
    "3/4",
    "3/4",
    "3/4",
    "3/4",
    "3/4",
    "3/4",
    "3/4",
    "2016-04-03",
    "2016-04-03"
  ],
  "id_text_4_4": [
    "4/4",
    "4/4",
    "4/4",
    "4/4",
    "4/4",
    "4/4",
    "4/4",
    "4/4",
    "4/4",
    "2016-04-04",
    "2016-04-04"
  ],
  "id_text_1_5": [
    "1/5",
    "1/5",
    "1/5",
    "1/5",
    "1/5",
    "1/5",
    "1/5",
    "1/5",
    "1/5",
    "2016-05-01",
    "2016-05-01"
  ],
  "id_text_2_5": [
    "2/5",
    "2/5",
    "2/5",
    "2/5",
    "2/5",
    "2/5",
    "2/5",
    "2/5",
    "2/5",
    "2016-05-02",
    "2016-05-02"
  ],
  "id_text_3_5": [
    "3/5",
    "3/5",
    "3/5",
    "3/5",
    "3/5",
    "3/5",
    "3/5",
    "3/5",
    "3/5",
    "2016-05-03",
    "2016-05-03"
  ],
  "id_text_4_5": [
    "4/5",
    "4/5",
    "4/5",
    "4/5",
    "4/5",
    "4/5",
    "4/5",
    "4/5",
    "4/5",
    "2016-05-04",
    "2016-05-04"
  ],
  "id_text_5_5": [
    "5/5",
    "5/5",
    "5/5",
    "5/5",
    "5/5",
    "5/5",
    "5/5",
    "5/5",
    "5/5",
    "2016-05-05",
    "2016-05-05"
  ],
  "id_text_1_6": [
    "1/6",
    "1/6",
    "1/6",
    "1/6",
    "1/6",
    "1/6",
    "1/6",
    "1/6",
    "1/6",
    "2016-06-01",
    "2016-06-01"
  ],
  "id_text_2_6": [
    "2/6",
    "2/6",
    "2/6",
    "2/6",
    "2/6",
    "2/6",
    "2/6",
    "2/6",
    "2/6",
    "2016-06-02",
    "2016-06-02"
  ],
  "id_text_3_6": [
    "3/6",
    "3/6",
    "3/6",
    "3/6",
    "3/6",
    "3/6",
    "3/6",
    "3/6",
    "3/6",
    "2016-06-03",
    "2016-06-03"
  ],
  "id_text_4_6": [
    "4/6",
    "4/6",
    "4/6",
    "4/6",
    "4/6",
    "4/6",
    "4/6",
    "4/6",
    "4/6",
    "2016-06-04",
    "2016-06-04"
  ],
  "id_text_5_6": [
    "5/6",
    "5/6",
    "5/6",
    "5/6",
    "5/6",
    "5/6",
    "5/6",
    "5/6",
    "5/6",
    "2016-06-05",
    "2016-06-05"
  ],
  "id_text_6_6": [
    "6/6",
    "6/6",
    "6/6",
    "6/6",
    "6/6",
    "6/6",
    "6/6",
    "6/6",
    "6/6",
    "2016-06-06",
    "2016-06-06"
  ],
  "id_text_1_7": [
    "1/7",
    "1/7",
    "1/7",
    "1/7",
    "1/7",
    "1/7",
    "1/7",
    "1/7",
    "1/7",
    "2016-07-01",
    "2016-07-01"
  ],
  "id_text_2_7": [
    "2/7",
    "2/7",
    "2/7",
    "2/7",
    "2/7",
    "2/7",
    "2/7",
    "2/7",
    "2/7",
    "2016-07-02",
    "2016-07-02"
  ],
  "id_text_3_7": [
    "3/7",
    "3/7",
    "3/7",
    "3/7",
    "3/7",
    "3/7",
    "3/7",
    "3/7",
    "3/7",
    "2016-07-03",
    "2016-07-03"
  ],
  "id_text_4_7": [
    "4/7",
    "4/7",
    "4/7",
    "4/7",
    "4/7",
    "4/7",
    "4/7",
    "4/7",
    "4/7",
    "2016-07-04",
    "2016-07-04"
  ],
  "id_text_5_7": [
    "5/7",
    "5/7",
    "5/7",
    "5/7",
    "5/7",
    "5/7",
    "5/7",
    "5/7",
    "5/7",
    "2016-07-05",
    "2016-07-05"
  ],
  "id_text_6_7": [
    "6/7",
    "6/7",
    "6/7",
    "6/7",
    "6/7",
    "6/7",
    "6/7",
    "6/7",
    "6/7",
    "2016-07-06",
    "2016-07-06"
  ],
  "id_text_7_7": [
    "7/7",
    "7/7",
    "7/7",
    "7/7",
    "7/7",
    "7/7",
    "7/7",
    "7/7",
    "7/7",
    "2016-07-07",
    "2016-07-07"
  ],
  "id_text_1_9": [
    "1/9",
    "1/9",
    "1/9",
    "1/9",
    "1/9",
    "1/9",
    "1/9",
    "1/9",
    "1/9",
    "2016-09-01",
    "2016-09-01"
  ],
  "id_text_2_9": [
    "2/9",
    "2/9",
    "2/9",
    "2/9",
    "2/9",
    "2/9",
    "2/9",
    "2/9",
    "2/9",
    "2016-09-02",
    "2016-09-02"
  ],
  "id_text_3_9": [
    "3/9",
    "3/9",
    "3/9",
    "3/9",
    "3/9",
    "3/9",
    "3/9",
    "3/9",
    "3/9",
    "2016-09-03",
    "2016-09-03"
  ],
  "id_text_4_9": [
    "4/9",
    "4/9",
    "4/9",
    "4/9",
    "4/9",
    "4/9",
    "4/9",
    "4/9",
    "4/9",
    "2016-09-04",
    "2016-09-04"
  ],
  "id_text_5_9": [
    "5/9",
    "5/9",
    "5/9",
    "5/9",
    "5/9",
    "5/9",
    "5/9",
    "5/9",
    "5/9",
    "2016-09-05",
    "2016-09-05"
  ],
  "id_text_6_9": [
    "6/9",
    "6/9",
    "6/9",
    "6/9",
    "6/9",
    "6/9",
    "6/9",
    "6/9",
    "6/9",
    "2016-09-06",
    "2016-09-06"
  ],
  "id_text_7_9": [
    "7/9",
    "7/9",
    "7/9",
    "7/9",
    "7/9",
    "7/9",
    "7/9",
    "7/9",
    "7/9",
    "2016-09-07",
    "2016-09-07"
  ],
  "id_text_8_9": [
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "2016-09-08",
    "2016-09-08"
  ],
  "id_text_9_9": [
    "9/9",
    "9/9",
    "9/9",
    "9/9",
    "9/9",
    "9/9",
    "9/9",
    "9/9",
    "9/9",
    "2016-09-09",
    "2016-09-09"
  ],
  "id_text_1_10": [
    "1/10",
    "1/10",
    "1/10",
    "1/10",
    "1/10",
    "1/10",
    "1/10",
    "1/10",
    "1/10",
    "2016-10-01",
    "2016-10-01"
  ],
  "id_text_2_10": [
    "2/10",
    "2/10",
    "2/10",
    "2/10",
    "2/10",
    "2/10",
    "2/10",
    "2/10",
    "2/10",
    "2016-10-02",
    "2016-10-02"
  ],
  "id_text_3_10": [
    "3/10",
    "3/10",
    "3/10",
    "3/10",
    "3/10",
    "3/10",
    "3/10",
    "3/10",
    "3/10",
    "2016-10-03",
    "2016-10-03"
  ],
  "id_text_4_10": [
    "4/10",
    "4/10",
    "4/10",
    "4/10",
    "4/10",
    "4/10",
    "4/10",
    "4/10",
    "4/10",
    "2016-10-04",
    "2016-10-04"
  ],
  "id_text_5_10": [
    "5/10",
    "5/10",
    "5/10",
    "5/10",
    "5/10",
    "5/10",
    "5/10",
    "5/10",
    "5/10",
    "2016-10-05",
    "2016-10-05"
  ],
  "id_text_6_10": [
    "6/10",
    "6/10",
    "6/10",
    "6/10",
    "6/10",
    "6/10",
    "6/10",
    "6/10",
    "6/10",
    "2016-10-06",
    "2016-10-06"
  ],
  "id_text_7_10": [
    "7/10",
    "7/10",
    "7/10",
    "7/10",
    "7/10",
    "7/10",
    "7/10",
    "7/10",
    "7/10",
    "2016-10-07",
    "2016-10-07"
  ],
  "id_text_8_10": [
    "8/10",
    "8/10",
    "8/10",
    "8/10",
    "8/10",
    "8/10",
    "8/10",
    "8/10",
    "8/10",
    "2016-10-08",
    "2016-10-08"
  ],
  "id_text_9_10": [
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "2016-10-09",
    "2016-10-09"
  ],
  "id_text_10_10": [
    "10/10",
    "10/10",
    "10/10",
    "10/10",
    "10/10",
    "10/10",
    "10/10",
    "10/10",
    "10/10",
    "2016-10-10",
    "2016-10-10"
  ],
  "id_text_list_start": [
    "Start the use",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Klar til brug ",
    "x",
    "x",
    "x"
  ],
  "id_text_list_language": [
    "Language",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Sprog",
    "x",
    "x",
    "x"
  ],
  "id_text_list_timedate": [
    "Time and date",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Tid og dato",
    "x",
    "x",
    "x"
  ],
  "id_text_list_lock_code": [
    "Lock code",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Låsekode",
    "x",
    "x",
    "x"
  ],
  "id_text_list_access_rights": [
    "Access rights",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Brugerrettighed",
    "x",
    "x",
    "x"
  ],
  "id_text_list_basic_values": [
    "Set basic values",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Indstil grundværdier",
    "x",
    "x",
    "x"
  ],
  "id_text_list_away_prof": [
    "Away profile",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Ude profil",
    "x",
    "x",
    "x"
  ],
  "id_text_list_home_prof": [
    "Home profile",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Hjemme profil",
    "x",
    "x",
    "x"
  ],
  "id_text_list_boost_prof": [
    "Boost Profile",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Boost profil",
    "x",
    "x",
    "x"
  ],
  "id_text_short_supply": [
    "Supply",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Tilluft",
    "x",
    "x",
    "x"
  ],
  "id_text_dialog_title_defrosting_cell": [
    "Defrosting the Cell",
    "Kennon sulatus",
    "Avfrostning av VÅV-element",
    "Wärmetauscher abtauen",
    "Dégivrer l'échangeur de chaleur",
    "Ontdooien van de warmtewisselaar",
    "Soojusvaheti sulatus",
    "Afrimning af varmeveksler",
    "Odmrazanie wymiennika",
    "Atkause elementu",
    "silumok. atitirp."
  ],
  "id_text_dialog_content_wait": [
    "Please wait awhile.",
    "Odota.",
    "Vänta",
    "Warten",
    "Patienter un moment s'il vous plaît .",
    "Gelieve even wachten.",
    "Oota.",
    "Vent venligst ",
    "Prosze czekac",
    "Ludzu gaidit",
    "Palaukite."
  ],
  "id_text_dialog_content_defrosting_cell": [
    "Cell defrosting is in progress.",
    "Kennon sulatus käynnissä.",
    "Avfrostning av VÅV-elementet pågår",
    "Wärmetauscher wird abgetaut",
    "Dégivrage de l'échangeur de chaleur en cours.",
    "Warmtewisselaar wordt ondooid",
    "Toimub soojusvaheti sulatus.",
    "Afrimning af varmeveksler i gang ",
    "Odszranianie wymiennika w toku",
    "Notiek elementa atkausesana",
    "Vyksta silumok. atitirp."
  ],
  "id_text_info_handedness": [
    "Handedness",
    "Kätisyys",
    "Utförande",
    "Außenluftansaugung",
    "Dextérité",
    "Handigheid",
    "Käelisus",
    "Udførelse",
    "Tryb reczny",
    "Velama puse",
    "Rankos pasirink."
  ],
  "id_text_value_handedness_left": [
    "Left",
    "Vasen",
    "Vänster",
    "Links",
    "A gouche",
    "Links",
    "Vasak",
    "Venstre ",
    "Lewa",
    "Kreisa",
    "Kaire"
  ],
  "id_text_value_handedness_right": [
    "Right",
    "Oikea",
    "Höger",
    "Rechts",
    "A droite",
    "Rechts",
    "Parem",
    "Højre",
    "Prawa",
    "Laba",
    "Desine"
  ],
  "id_text_info_exhaust_air": [
    "Exhaust Air",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Afkast",
    "x",
    "x",
    "x"
  ],
  "id_text_info_indoor_air": [
    "Indoor Air",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Indeluft",
    "x",
    "x",
    "x"
  ],
  "id_text_info_supply_cell": [
    "Supply from Cell",
    "Tulo kennosta",
    "Tilluft från VÅV-elementet",
    "Zuluft vom Wärmetauscher",
    "Alimentation de l'échangeur de chaleur",
    "Toevoer van de warmtewisselaar",
    "Soojusvahetist tulev",
    "Tilluft fra varmeveksler",
    "Nawiew",
    "Padeve no elementa",
    "Tiekim. is silumok."
  ],
  "id_text_dialog_title_cancel_test": [
    "Cancel self-test?",
    "Testin pysäytys?",
    "Stoppa testet?",
    "Test anhalten?",
    "Annuler l'auto-test?",
    "Zelftest annuleren?",
    "Peatan testi?",
    "Standse testen?",
    "Anuluj auto-test?",
    "Atcelt pasparbaudi?",
    "Atsaukti autom. testa?"
  ],
  "id_text_dialog_content_cancel_test1": [
    "Test ongoing",
    "Testi meneillään",
    "Test pågår",
    "Test läuft",
    "Essai en cours",
    "Test is lopende",
    "Test toimub",
    "Test i gang",
    "test trwa",
    "Notiek parbaude",
    "Vyksta testas"
  ],
  "id_text_dialog_content_cancel_test2": [
    "Would you like to cancel the test?",
    "Haluatko pysäyttää testin?",
    "Vill du stoppa testet?",
    "Wollen Sie den Test anhalten?",
    "Voulez-vous annuler le test?",
    "Wilt u de test annuleren?",
    "Kas soovid tühistada testi?",
    "Vil du standse testen?",
    "Czy chcialbys, aby anulowac test?",
    "Vai velaties atcelt parbaudi?",
    "Ar norite atsaukti testa?"
  ],
  "id_text_dialog_content_cancelled": [
    "Self-test cancelled.",
    "Testi pysäytetty",
    "Testet har stoppats.",
    "Test angehalten",
    "Auto-test annulé.",
    "Zelftest geannuleerd.",
    "Test tühistatud",
    "Testen er standset",
    "Autotest anulowany",
    "Pasparbaude atcelta",
    "Autom. testas atsauktas."
  ],
  "id_text_title_summer_winter_test": [
    "Summer - Winter Test",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Sommer - Vinter test",
    "x",
    "x",
    "x"
  ],
  "id_text_setting_name_flap": [
    "Bypass flap position",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Position for bypass spjæld",
    "x",
    "x",
    "x"
  ],
  "id_text_setting_value_flap_summer": [
    "Summer",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Sommer",
    "x",
    "x",
    "x"
  ],
  "id_text_setting_value_flap_winter": [
    "Winter",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Vinter",
    "x",
    "x",
    "x"
  ],
  "id_text_dialog_title_remove_all": [
    "Remove All?",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Vil du slette alt?",
    "x",
    "x",
    "x"
  ],
  "id_text_dialog_content_remove_all": [
    "Are you sure you want to remove all items from the week clock?",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Vil du slette alle uge ur indstillinger?",
    "x",
    "x",
    "x"
  ],
  "id_text_confirmation_content_all_removed": [
    "All items removed.",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Alle indstillinger slettet",
    "x",
    "x",
    "x"
  ],
  "id_text_confirmation_content_saved": [
    "Week clock is saved.",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Uge ur er gemt",
    "x",
    "x",
    "x"
  ],
  "id_text_title_fire_place_mode": [
    "Fire Place Mode",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Pejsefunktion",
    "x",
    "x",
    "x"
  ],
  "id_text_list_fire_place_mode": [
    "Fire place mode",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Pejsefunktion",
    "x",
    "x",
    "x"
  ],
  "id_text_list_duration": [
    "Duration",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Varighed",
    "x",
    "x",
    "x"
  ],
  "id_text_list_supply_speed": [
    "Supply fan speed",
    "Tuloilmap. Nopeus",
    "Tilluftsfläktens hastighet",
    "Lüftungsstufe Zuluft ",
    "Vitesse ventilateur d'alimentation",
    "Snelheid toevoerventilator",
    "Sissepuhkevent.kiirus",
    "Hastighed tilluftventilator",
    "Predkosc wentylatora nawiewnego",
    "Piepludes ventilatora atrums",
    "Tiekimo vent. greitis"
  ],
  "id_text_list_extract_speed": [
    "Extract fan speed",
    "Poistoilmap. Nopeus",
    "Frånluftsfläktens hastighet",
    "Lüftungsstufe Abluft",
    "Vitesse ventilateur d'extraction",
    "Snelheid afvoerventilator",
    "Väljatõmbevent.kiirus ",
    "Hastighed af fraluftventilator",
    "Predkosc wentylatora wywiewnego",
    "Nosuces ventilatora atrums",
    "Istrauk. vent. greitis"
  ],
  "id_text_title_temp_sensors": [
    "Temperatures and sensors",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Temperaturer og sensorer ",
    "x",
    "x",
    "x"
  ],
  "id_text_list_item_humidity": [
    "Humidity",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Fugtighed ",
    "x",
    "x",
    "x"
  ],
  "id_text_list_tem_CO2": [
    "Carbon dioxide",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "CO2",
    "x",
    "x",
    "x"
  ],
  "id_text_title_CO2_sensor": [
    "CO2 Sensor %n",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "CO2 sensor %n",
    "x",
    "x",
    "x"
  ],
  "id_text_title_display_settings": [
    "Display Settings",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Display indstillinger ",
    "x",
    "x",
    "x"
  ],
  "id_text_setting_name_timeout": [
    "Sleep mode timeout",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "Timeout for dvale ",
    "x",
    "x",
    "x"
  ],
  "id_text_date": [
    "Date",
    "Päivämäärä",
    "Datum",
    "Datum",
    "Date",
    "Datum",
    "Kuupäev",
    "Dato",
    "data",
    "Datums",
    "Data"
  ],
  "id_text_title_modbus": [
    "Modbus",
    "Modbus",
    "Modbus",
    "Modbus",
    "Modbus",
    "Modbus",
    "Modbus",
    "Modbus",
    "modbus",
    "Modbus",
    "Modbus"
  ],
  "id_text_cooling_mode": [
    "Cooling",
    "Viilennys",
    "Kylning",
    "KRG",
    "Réfrigération",
    "Koeling",
    "Jahutus",
    "Køling",
    "chlodzenie",
    "Dzesesana",
    "Vesinimas"
  ],
  "id_text_today": [
    "Today",
    "Tänään",
    "Idag",
    "Heute",
    "Aujourd'hui",
    "Vandaag",
    "Täna",
    "I dag",
    "dzisiaj",
    "Sodien",
    "Siandien"
  ],
  "id_text_temp_setting": [
    "°C setting",
    "°C asetus",
    "°C inställning",
    "°C Einstellung",
    "Réglage de °C",
    "Instelling van °C",
    "°C seadistus",
    "°C indstillinger",
    "ustawienia temperatury",
    "°C",
    "°C"
  ],
  "id_text_dialog_error_popup": [
    "Unit is in fault mode.",
    "Kone on vikatilassa.",
    "Apparat feltillstånd.",
    "Gerät im Fehlermodus",
    "Appareil est en mode de défaut.",
    "Unit is defect",
    "Seade on häires",
    "Aggregat er i fejltilstand",
    "Urzadzenie znajduje sie w trybie awaryjnym.",
    "Iekarta ir klumes rezima",
    "Ireng. klaidos rez."
  ],
  "id_text_ip_address": [
    "IP -address",
    "IP -osoite",
    "IP -adress",
    "IP-Adresse",
    "Adresse IP",
    "IP-adres",
    "IP-aadress",
    "IP-adresse",
    "adres IP",
    "IP adrese",
    "IP adresas"
  ],
  "id_text_unit_off": [
    "Unit standby",
    "Valmiustila",
    "Standby läge",
    "Standby",
    "de veille",
    "Standby",
    "Ootereziimis",
    "Standbytilstand",
    "czuwanie",
    "Iekartas dikstave",
    "Ireng. parengt. rez."
  ],
  "id_text_unit_off_2": [
    "Do you want to start unit?",
    "Käynnistetäänkö laite?",
    "Vill du starta om apparaten?",
    "Wollen Sie das Gerät starten?",
    "Voulez-vous commencer à l'unité?",
    "Wil je apparaat te starten?",
    "Sa tahad, et alustada üksus?",
    "ønsker du at starte aggregat?",
    "uruchom. centrale?",
    "Vai velaties iedarbinat iekartu?",
    "Ar norite paleisti ireng.?"
  ],
  "id_text_bus_fault": [
    "Bus fault",
    "Väylävika",
    "Bus fault",
    "Bus-Fehler",
    "Bus fault",
    "Bus fault",
    "Bus fault",
    "Bus fault",
    "Bus fault",
    "Kopnes atteice",
    "Magistrales gedimas"
  ],
  "id_text_web_next": [
    "Next",
    "Seuraava",
    "Nästa",
    "Nächster",
    "Suivant",
    "Volgende",
    "Järgmine",
    "Næste",
    "Następny",
    "Nākamais",
    "Kitas"
  ],
  "id_text_web_finish": [
    "Finish",
    "Valmis",
    "Klar",
    "Fertig",
    "Fin",
    "Einde",
    "Valmis",
    "Klar",
    "Koniec",
    "Beigt",
    "Baigta"
  ],
  "id_text_web_start": [
    "Start",
    "Aloita",
    "Starta",
    "Start",
    "Départ",
    "Start",
    "Alusta",
    "Start",
    "Start",
    "Sākt",
    "Pradėti"
  ],
  "id_text_web_welcome": [
    "Welcome to MyVallox Ventilation Setup!",
    "Tervetuloa aloittamaan MyVallox-järjestelmän käyttöönotto!",
    "Välkommen att starta upp MyVallox!",
    "Willkommen zum Start des MyVallox-Systems!",
    "Bienvenue à  MyVallox Setup!",
    "Welkom op MyVallox Ventilatie Setup!",
    "Tere tulemast kasutama MyVallox juhtimist!",
    "Velkommen til opstart af MyVallox!",
    "Witamy w instalatorze MyVallox Ventilation",
    "Laipni lūdzam MyVallox iekārtas iestatīšanā!",
    "Sveiki apsilankę „MyVallox“ vėdinimo sąrankoje!"
  ],
  "id_text_web_access": [
    "Access Rights and Parental Controls",
    "Käyttöoikeudet ja lapsilukko",
    "Användarrättigheter och barnlås",
    "Zugriffsrechte und Kindersicherung",
    "Droits d'accès et le contrôle parental",
    "Toegangsrechten en ouderlijke controle",
    "Kasutajaõigused ja lapselukk",
    "Brugerrettigheder og børnesikring",
    "Zasady dostępu i kontrola rodzicielska",
    "Piekļuves tiesības un vecāku kontrole",
    "Prieigos teisės ir apsaugos nuo vaikų valdymas"
  ],
  "id_text_web_very_limited_1": [
    "The user can change a preset ventilation profile and see the basic values of the machine.",
    "Käyttäjä voi vaihtaa käyttöprofiilia ja tutkia laitteen tietoja.",
    "Användaren kan ändra ventilationsprofilen och granska aggregatets uppgifter.",
    "Der Benutzer kann das Lüftungsprofil wechseln und Gerätedaten ansehen.",
    "L'utilisateur peut modifier un profil de ventilation prédéfini et  voir les valeurs de base de la machine.",
    "De gebruiker kan de fabrieksinstellingen van een profiel wijzigen en de basis waarden van de machine raadplegen.",
    "Kasutaja võib muuta kasutajaprofiili ja vaadata ventilatsiooniseadme andmeid.",
    "Bruger kan ændre ventilationsprofilen og se aggregatets grundindstillinger.",
    "Użytkownik może zmienić obecny profil wentylacji i sprawdzić podstawowe wartości urządzenia",
    "Lietotājs var izmainīt iestatīto ventilēšanas profilu un apskatīt iekārtas pamatrādītājus.",
    "Naudotojas gali keisti nustatytą vėdinimo profilį ir matyti pagrindines įrenginio vertes."
  ],
  "id_text_web_very_limited_2": [
    "However, the user cannot edit most of the settings.",
    "Käyttäjä ei kuitenkaan voi muokata järjestelmän asetuksia.",
    "Användaren kan dock inte ändra systeminställningarna.",
    "Der Benutzer kann jedoch keine Systemeinstellungen bearbeiten.",
    "Toutefois, l'utilisateur ne peut pas modifier la plupart des paramètres.",
    "Let op, de gebruiker kan niet alle instellingen aanpassen",
    "Kasutaja ei saa siiski muuta kõiki seadistusi.",
    "Bruger kan ikke ændre systemindstillinger. ",
    "Jednakże użytkownik nie może edytować większości ustawień.",
    "Taču lietotājs nevar rediģēt lielāko daļu iestatījumu.",
    "Tačiau naudotojas negali redaguoti daugelio nuostatų."
  ],
  "id_text_web_limited_1": [
    "The user can see and edit basic functions of the ventilation machine.",
    "Käyttäjä voi tutkia ja muokata laitteen perusasetuksia.",
    "Användaren kan granska och ändra basinställningarna i aggregatet.",
    "Der Benutzer kann die Grundeinstellungen des Gerätes ansehen und bearbeiten.",
    "L'utilisateur peut voir et modifier les fonctions de base de la machine de ventilation.",
    "De gebruiker kan de basis functies van het ventilatietoestel zien en aanpassen.",
    "Kasutaja võib vaadata ja muuta ventilatsiooniseadme põhiseadistusi.",
    "Bruger kan se og ændre aggregatets grundindstillinger.",
    "Użytkownik może zobaczyć oraz edytować podstawowe funkcje urządzenia wentylacyjnego.",
    "Lietotājs var aplūkot un izmainīt ventilācijas iekārtas pamatfunkcijas.",
    "Naudotojas gali matyti ir redaguoti pagrindines vėdinimo įrenginio funkcijas."
  ],
  "id_text_web_limited_2": [
    "Access to expert settings is locked.",
    "Pääsy erikoisasetuksiin on estetty.",
    "Åtkomst till specialinställningarna är nekad.",
    "Der Zugriff auf die speziellen Einstellungen ist gesperrt.",
    "Accès aux réglages d'experts est bloqué.",
    "De toegang tot expert settings is geblokkeerd",
    "Ligipääs eriseadetele on keelatud.",
    "Ingen adgang til avancerede indstillinger. ",
    "Dostęp do ustawień specjalistycznych jest zablokowany.",
    "Piekļuve specializētajiem iestatījumiem ir bloķēta.",
    "Prieiga prie eksperto nuostatų yra užrakinta."
  ],
  "id_text_web_free": [
    "The user able to access and edit all the features and functions of the ventilation machine.",
    "Käyttäjällä on täysi pääsy laitteen kaikkiin asetuksiin.",
    "Användaren har fullständig åtkomst till alla inställningar i aggregatet.",
    "Der Benutzer hat vollen Zugriff auf alle Geräteeinstellungen.",
    "L'utilisateur est en mesure d'accéder aux caractéristiques et de modifier toutes les fonctions de la machine de ventilation.",
    "Het is mogelijk voor de gebruiker om al de toepassingen en functies van de ventilatie unit te beheren en aan te passen",
    "Kasutajal on ligipääs ventilatsiooniseadme kõigile seadistustele.",
    "Bruger har adgang til alle indstillinger i aggregatet. ",
    "Użytkownik ma możliwość dostępu i edycji wszystkich funkcji i możliwości urządzenia wentylacyjnego.",
    "Lietotājs var piekļūt un rediģēt visus ventilācijas iekārtas iestatījumus un funkcijas.",
    "Naudotojas gali prieiti ir redaguoti visas vėdinimo įrenginio funkcijas ir ypatybes."
  ],
  "id_text_web_profiles": [
    "Profiles",
    "Käyttöprofiilit",
    "Ventilationsprofiler",
    "Lüftungsprofile",
    "Profils",
    "Profielen",
    "Kasutajaprofiilid",
    "Ventilationsprofil",
    "Profile",
    "Profili",
    "Profiliai"
  ],
  "id_text_web_summary": [
    "Summary",
    "Yhteenveto",
    "Sammandrag",
    "Zusammenfassung",
    "Résumé",
    "Overzicht",
    "Kokkuvõte",
    "Oversigt",
    "Podsumowanie",
    "Kopsavilkums",
    "Santrauka"
  ],
  "id_text_web_ok": [
    "OK",
    "OK",
    "OK",
    "OK",
    "OK",
    "OK",
    "OK",
    "OK",
    "OK.",
    "OK",
    "Gerai"
  ],
  "id_text_web_cancel": [
    "Cancel",
    "Peruuta",
    "Ångra",
    "Abbrechen",
    "Annuler",
    "Annuleren",
    "Tühista",
    "Annuller",
    "Kasowanie",
    "Atcelt",
    "Atšaukti"
  ],
  "id_text_web_confirmation": [
    "Are you sure?",
    "Oletko varma?",
    "Är du säker?",
    "Sind Sie sicher?",
    "êtes-vous sûr?",
    "bent u zeker?",
    "Kas oled kindel?",
    "Er du sikker?",
    "Jesteś pewien?",
    "Vai vēlaties atcelt?",
    "Ar esate tikri?"
  ],
  "id_text_web_range": [
    "0-10V = 5-25&deg;C",
    "0-10V = 5-25&deg;C",
    "0-10V = 5-25&deg;C",
    "0-10 V = 5-25&deg;C",
    "0-10V = 5-25°C",
    "0-10V = 5-25°C",
    "0-10V = 5-25&deg;C",
    "0-10V = 5-25&deg;C",
    "0-10V = 5-25&deg;C",
    "0-10V = 5-25&deg;C",
    "0–10 V = 5–25 &deg;C"
  ],
  "id_text_web_adjustment": [
    "Temperature adjustment target",
    "Lämpötilasäädön kohde/tapa",
    "Alternativ för temperaturreglering",
    "Alternativen der Temperaturregelung",
    "Objectif de réglage de la température",
    "Doel temperatuuraanpassing",
    "Temperatuuride seadistamine",
    "Indstilling for temperaturregulering",
    "Regulacja temperatury docelowej",
    "Temperatūras ieregulēšanas alternatīvas",
    "Temperatūros reguliavimo alternatyvos"
  ],
  "id_text_web_cannot": [
    "N/A",
    "Ei saatavilla",
    "Inte tillgänglig",
    "Nicht verfügbar",
    "Pas disponible",
    "Niet beschikbaar",
    "Ei ole saadaval",
    "Ikke tilgængelig",
    "Niedostępne",
    "Nav piemērojams",
    "Nėra duomenų"
  ],
  "id_text_web_start_tests": [
    "Run tests",
    "Aja testit",
    "Kör testen",
    "Tests starten",
    "Exécutez les tests",
    "Start het testen",
    "Käivita testid",
    "Kør test",
    "Uruchom testy",
    "Veikt pārbaudes",
    "Veikimo testai"
  ],
  "id_text_web_no_errors": [
    "No errors",
    "Ei vikoja",
    "Inga fel",
    "Keine Fehler",
    "Aucun défaut",
    "Geen fouten",
    "Vigasid ei ole",
    "Ingen fejl",
    "Bez błędów",
    "Nav kļūdu",
    "Nėra klaidų"
  ],
  "id_text_web_mark": [
    "Mark as solved",
    "Kuittaa",
    "Kvittera",
    "Bestätigen",
    "Marquer comme résolu",
    "Markeren als opgelost",
    "Kinnita",
    "Bekræft",
    "Oznacz jako rozwiązane",
    "Atzīmēt kā atrisinātu",
    "Pažymėti kaip išspręstą"
  ],
  "id_text_web_defrost": [
    "Note! Defrost will stop automatically when all the ice has melted.",
    "Huom! Sulatus päättyy automaattisesti, kun kaikki jää on sulanut.",
    "Obs! Avfrostningen slutar automatiskt när all is har smultit.",
    "Achtung: Wenn alles Eis geschmolzen ist, endet das Abtauen automatisch.",
    "Remarque! Dégivrage arrête automatiquement lorsque toute la glace a fondu.",
    "Let op! Ontdooiïng stopt automatisch als al het ijs is gesmolten.",
    "NB! Sulatus lõpeb automaatselt, kui kogu jää on sulanud.",
    "OBS! Afrimning stopper automatisk, når al isen er smeltet. ",
    "Uwaga! Rozmrażanie zatrzyma się automatycznie gdy cały lód stopnieje.",
    "Ievērot! Atkausēšana apstāsies automātiski, kad ir izkusis viss ledus.",
    "Pastaba! Atitirpinimas bus baigtas automatiškai, kai ištirps ledas."
  ],
  "id_text_web_info": [
    "Information",
    "Tietoja",
    "Information",
    "Daten",
    "Informations",
    "Informatie",
    "Andmed",
    "Information",
    "Informacja",
    "Informācija",
    "Informacija"
  ],
  "id_text_web_unit_status": [
    "Unit status",
    "Laitteen tila",
    "Aggregatets status",
    "Gerätestatus",
    "état de l'unité",
    "Status unit",
    "Seadme olek",
    "Aggregat status",
    "Status jednostki",
    "Iekārtas statuss",
    "Įrenginio būsena"
  ],
  "id_text_web_power": [
    "Power",
    "Tila",
    "Status",
    "Status",
    "Statut",
    "Toestand",
    "Olek",
    "Status",
    "Zasilanie",
    "Statuss",
    "Būsena"
  ],
  "id_text_web_details": [
    "Unit details",
    "Laitteen tiedot",
    "Uppgifter om aggregatet",
    "Angaben zum Gerät",
    "Détails de l'unité",
    "Unit informatie",
    "Seadme andmed",
    "Oplysninger om aggregatet ",
    "Szczegóły jednostki",
    "Iekārtas dati",
    "Įrenginio informacija"
  ],
  "id_text_web_config": [
    "Configuration",
    "Konfiguraatio",
    "Konfiguration",
    "Konfiguration",
    "configuration",
    "Configuratie",
    "Konfiguratsioon",
    "Konfiguration",
    "Konfiguracja",
    "Konfigurācija",
    "Konfigūracija"
  ],
  "id_text_web_config_help": [
    "Please give the missing configuration number",
    "Anna puuttuva konfiguraationumero",
    "Ge det saknade konfigurationsnumret",
    "Fehlende Konfigurationsnummer eingeben",
    "Veuillez donner le numéro de configuration manquant",
    "Alstublieft, geef het ontbrekende configuratie nummer",
    "Sisesta puuduv konfiguratsiooninumber",
    "Angiv manglende konfigurationsnummer",
    "Uzupełnij brakujące cyfry konfiguracji",
    "Lūdzu parādīt trūkstošo konfigurācijas numuru",
    "Pateikite trūkstamą konfigūracinį numerį"
  ],
  "id_text_web_continue": [
    "Continue",
    "Jatka",
    "Fortsätt",
    "Weiter",
    "Continuer",
    "Doorgaan",
    "Jätka",
    "Fortsæt",
    "Kontynuuj",
    "Turpināt",
    "Tęsti"
  ],
  "id_text_web_diagnostics": [
    "Diagnostics",
    "Diagnostiikka",
    "Diagnostik",
    "Diagnostik",
    "Diagnose",
    "Diagnose",
    "Diagnostika",
    "Diagnostik",
    "Diagnostyki",
    "Diagnostika",
    "Diagnostika"
  ],
  "id_text_web_dashboard": [
    "Dashboard",
    "Ohjauspaneeli",
    "Kontrollpanel",
    "Reglereinheit",
    "Panneau de commande",
    "Bedieningspaneel",
    "Juhtpult",
    "Kontrolpanel",
    "Tablica rozdzielcza",
    "Vadības pults",
    "Valdymo skydelis"
  ],
  "id_text_web_temperatures": [
    "Temperatures",
    "Lämpötilat",
    "Temperaturer",
    "Temperaturen",
    "Températures",
    "Temperaturen",
    "Temperatuurid",
    "Temperaturer",
    "Temperatury",
    "Temperatūras",
    "Temperatūros"
  ],
  "id_text_web_sensors": [
    "Sensors",
    "Anturit",
    "Givare",
    "Sensoren",
    "Capteurs",
    "Sensoren",
    "Andurid",
    "Følere",
    "Czujniki",
    "Sensori",
    "Jutikliai"
  ],
  "id_text_web_days": [
    "Days",
    "Päivät",
    "Dagar",
    "Tage",
    "Journées",
    "Dagen",
    "Päevad",
    "Dage",
    "Dni",
    "Dienas",
    "Dienos"
  ],
  "id_text_web_weeks": [
    "Weeks",
    "Viikot",
    "Veckor",
    "Wochen",
    "Semaines",
    "Weken",
    "Nädalad",
    "Uger",
    "Tygodnie",
    "Nedēļas",
    "Savaitės"
  ],
  "id_text_web_refresh": [
    "Refresh",
    "Päivitä",
    "Uppdatera",
    "Aktualisieren",
    "Renouveler",
    "Vernieuwen",
    "Värskenda",
    "Updater",
    "Odśwież",
    "Atjaunot",
    "Atnaujinti"
  ],
  "id_text_web_unlock": [
    "Unlock",
    "Avaa",
    "Öppna",
    "Entsperren",
    "Dégager",
    "Ontgrendelen",
    "Ava",
    "Åben",
    "Odblokuj",
    "Atbloķēt",
    "Atrakinti"
  ],
  "id_text_web_activate": [
    "Activate",
    "Ota käyttöön",
    "Ta i bruk",
    "Anwenden",
    "Activer",
    "Activeren",
    "Aktiveeri",
    "Anvend",
    "Aktywuj",
    "Aktivizēt",
    "Aktyvuoti"
  ],
  "id_text_web_note": [
    "Info",
    "Info",
    "Info",
    "Info",
    "Info",
    "Info",
    "Info",
    "Info",
    "Informacja",
    "Info",
    "Informacija"
  ],
  "id_text_web_none": [
    "None",
    "Ei käytössä",
    "Inte i användning",
    "Nicht verwendet",
    "OFF",
    "UIT",
    "Ei ole kasutusel",
    "Anvend ikke",
    "Żaden",
    "Nav",
    "Pastaba"
  ],
  "id_text_web_network_error": [
    "Network error occured. Check your network connection and reload webpage. If this occurs all the time please reboot the ventilation machine.",
    "Verkkoyhteys virhe. Tarkista verkkoyhteys ja päivitä web -sivu. Jos virhe ei häviä, käynnistä ilmastointikone uudelleen.",
    "Nätverksfel. Kontrollera nätanslutningen och uppdatera webbsidan. Om felet kvarstår, starta ventilationsaggregatet på nytt.",
    "Fehler in der Netzwerkverbindung. Netzwerkverbindung überprüfen und Webseite aktualisieren. Wenn der Fehler weiterhin auftritt, Lüftungsgerät neu starten.",
    "Erreur de réseau est survenue. Vérifiez votre connexion réseau et recharger la page Web. Si cela se produit fréquemment, veuillez redémarrer la machine de ventilation.",
    "Netwerkfout opgetreden. Controleer uw netwerkverbinding en herlaad de webpagina. Bij veelvuldige foutmelding, gelieve de ventilatie unit opnieuw op te starten.",
    "Võrguühenduse viga. Kontrolli võrguühendust ja värskenda lehekülge. Kui viga ei kao, taaskäivita ventilatsiooniseade.",
    "Netværksfejl. Kontroller netværksforbindelsen og genindlæs hjemmesiden. Hvis fejlen opstår igen, genstartes aggregatet. ",
    "Wystąpił błąd sieci. Sprawdź połączenie sieciowe i przeładuj stronę. Jeżeli błąd będzie się powtarzać ponownie uruchom urządzenie wentylacyjne.",
    "Tīkla kļūda. Pārbaudiet tīkla savienojumu un pārstartējiet vietni. Ja problēma turpinās, lūdzu, pārstartējiet ventilācijas iekārtu.",
    "Įvyko tinklo klaida. Patikrinkite savo interneto ryšį ir iš naujo įkelkite puslapį. Jeigu problema išlieka, paleiskite iš naujo vėdinimo įrenginį."
  ],
  "id_text_web_info_content": [
    "Welcome to Vallox ventilation remote control.",
    "Tervetuloa Vallox ilmastointikoneen etähallintasovellukseen.",
    "Välkommen till Vallox fjärrkontroll!/Välkommen till fjärrkontrollen för Vallox ventilationsaggregat!",
    "Willkommen bei der Fernbedienung Ihres Vallox-Lüftungsgerätes.",
    "Bienvenue sur le régulateur de ventilation Vallox à distance",
    "Welkom tot de Vallox ventilatie afstandsbediening",
    "Tere tulemast Vallox ventilatsiooniseadme kaugjuhtimisse",
    "Velkommen til Vallox fjernbetjening ",
    "Witamy w systemie sterowania wentylacji Vallox",
    "Laipni lūdzam Vallox ventilācijas attālinātā vadībā.",
    "Sveikiname apsilankius „Vallox“ vėdinimo nuotolinio valdymo puslapyje."
  ],
  "id_text_web_current_temperatures": [
    "Current temperatures",
    "Lämpötilat nyt",
    "Nuvarande temperaturer",
    "Temperaturen aktuell",
    "Températures actuelles",
    "Huidige temperatuur",
    "Temperatuurid praegu",
    "Aktuelle temperaturer  ",
    "Aktualne temperatury",
    "Šābrīža temperatūras",
    "Esamos temperatūros"
  ],
  "id_text_web_no_cloud_connection": [
    "You are not connected to the Cloud service.",
    "Et ole kirjautuneena pilvipalveluun.",
    "Du är inte inloggad på molntjänsten./Du är inte ansluten till molntjänsten.",
    "Sie sind nicht beim Cloud-Dienst eingeloggt.",
    "Vous n'êtes pas branchés sur le service Mon espace",
    "U bent niet verbonden met de \"Cloud\" service",
    "Ei ole ühendatud pilveserveriga",
    "Du er ikke tilsluttet Cloud service ",
    "Nie jesteś połączony z serwisem Cloud",
    "Nav savienojuma ar Cloud pakalpojumu.",
    "Nesate prisijungę prie debesijos paslaugos."
  ],
  "id_text_web_connect_to_cloud": [
    "Connect",
    "Yhdistä",
    "Anslut",
    "Verbinden",
    "Connecter",
    "Verbinden",
    "Ühenda",
    "Tilslut",
    "Połącz",
    "Pievienoties",
    "Prisijungti"
  ],
  "id_text_web_cloud_user": [
    "Connected. This device is registered to",
    "Laite rekisteröity pilvipalvelussa käyttäjälle",
    "Aggregatet är registrerat för",
    "Das Gerät ist im Cloud-Dienst registriert",
    "Connecté. Cet appareil est régistré pour",
    "Verbonden. Dit toestel is geregistreerd tot",
    "Ühendatud. Seade on registreeritud pilveserveris kasutajale",
    "Aggregatet er registreret til ",
    "Połączony. To urządzenie jest zarejestrowane na",
    "Savienojums izveidots. Šī iekārta ir reģistrēta",
    "Prisijungta. Šis įrenginys užregistruotas"
  ],
  "id_text_web_cloud_service": [
    "Cloud service",
    "Pilvipalvelu",
    "Molntjänst",
    "Cloud-Dienst",
    "Service Mon espace",
    "\"Cloud\" service",
    "Pilveserver",
    "Cloud service ",
    "Serwis Cloud",
    "Cloud pakalpojums",
    "Debesijos paslauga"
  ],
  "id_text_web_previous": [
    "Previous",
    "Edellinen",
    "Föregående",
    "Vorige",
    "Précédent",
    "Vorige",
    "Eelmine",
    "Forrige ",
    "Poprzedni",
    "Iepriekšējais",
    "Ankstesnis"
  ],
  "id_text_web_socket_not_supported": [
    "Web socket connections are not supported by your browser.",
    "Selaimesi ei tuo web socket yhteyksiä.",
    "Din webbläsare stöder inte websocket.",
    "Ihr Browser unterstützt keine Web-Socket Verbindungen.",
    "Les fiches de connection internet ne sont pas supportées",
    "Webaansluitingen worden niet ondersteund door uw browser",
    "Teie brauser ei toeta web pistikühendusi",
    "Din browser understøtter ikke Websocket forbindelsen",
    "Połączenia sieciowe nie są obsługiwane przez twoją przeglądarkę",
    "Jūsu pārlūks neatbalsta tīmekļa spraudkontakta savienojumus.",
    "Tinklo lizdo jungtys nepalaikomos jūsų naršyklės."
  ],
  "id_text_web_please_wait": [
    "Please wait",
    "Odota hetki",
    "Vänta ett ögonblick",
    "Einen Moment bitte",
    "Veuillez patienter",
    "Gelieve te wachten",
    "Oodake hetk",
    "Vent venligst ",
    "Proszę czekać",
    "Lūdzu uzgaidīt",
    "Palaukite"
  ],
  "id_text_web_fetching_logs": [
    "Fetching logs",
    "Haetaan lokitietoja…",
    "Logguppgifter söks …",
    "Lade Protokolldaten ...",
    "Atteindre le log data",
    "Ophalen log gegevens",
    "Otsitakse logiinfot…",
    "Indlæser log data ",
    "Pobieranie danych dziennika logowania",
    "Informācijas iegūšana",
    "Gaunama žurnalo informacija"
  ],
  "id_text_web_defrosting_ongoing": [
    "Defrosting is ongoing. This can take about 30 minutes.",
    "Sulatustoiminto käynnissä. Tämä saattaa kestää n. 30 minuuttia.",
    "Avfrostning pågår. Det kan ta cirka 15-45 minuter.",
    "Abtaufunktion in Betrieb. Dies kann ca. 15-45 Minuten dauern.",
    "Dégivrage est activé. Ceci peut prendre 15-45 minutes",
    "Ontdooiing is bezig. Dit kan ongeveer 15-45 minuten duren",
    "Toimub sulatus. See võib kesta umbes 15-45 minutit.",
    "Afrimning aktiv. Dette kan tage ca. 15-45 minutter",
    "Rozmrażanie włączone. Może to potrwać 15-45 minut",
    "Notiek atkausēšana. Tā var ilgt līdz 30 minūtēm.",
    "Vyksta atitirpinimas. Tai gali trukti iki 30 min."
  ],
  "id_text_web_reboot_device": [
    "Configuration has been changed. Reboot device by turning it off and then on again.",
    "Konfiguraatio on muuttunut. Käynnistä kone uudelleen käyttämällä virrat hetkeksi pois ja laittamalla ne takaisin päälle.",
    "Konfigurationen har ändrats. Starta aggregatet på nytt genom att slå av strömmen en stund och därefter på igen.",
    "Die Konfiguration wurde geändert. Gerät neu starten: Strom kurz ausschalten und wieder einschalten.",
    "La configuration a été changée. Redémarrer l'appareil en arrêtant et puis mettant en marche de nouveau.",
    "Instellingen werden gewijzigd. Herstart het toestel door uit en opnieuw aan te zetten",
    "Konfiguratsioon on muutunud. Eemalda seade vooluvõrgust ja lülita uuesti vooluvõrku.",
    "Konfigurationsdata er ændret. Genstart aggregatet.",
    "Konfiguracja została zmieniona. Zrestartuj urządzenie porzez jego ponowne uruchomienie",
    "Konfigurācija ir izmainīta. Pārstartējiet iekārtu, izslēdzot un no jauna ieslēdzot to.",
    "Konfigūracija buvo pakeista. Paleiskite įrenginį iš naujo išjungdami ir dar kartą jį įjungdami."
  ],
  "id_text_web_reboot_title": [
    "Reboot",
    "Uudelleen käynnistys",
    "Omstart",
    "Neustart",
    "Redémarrage",
    "Herstarten",
    "Reboot",
    "Genstart",
    "Restart",
    "Pārstartēt",
    "Paleisti iš naujo"
  ],
  "id_text_web_error_title": [
    "Error",
    "Virhetilanne",
    "Fel",
    "Störung",
    "Erreur",
    "Fout",
    "Veateade",
    "Fejl",
    "Błąd",
    "Kļūda",
    "Klaida"
  ],
  "id_text_web_no_data_available": [
    "No log data available",
    "Lokitietoa ei saatavilla",
    "Logguppgifter inte tillgängliga",
    "Keine Protokolldaten verfügbar",
    "Données pas disponibles",
    "Geen log data beschikbaar",
    "Logiinfo puudub",
    "Ingen log data tilgængelig ",
    "Brak dostępnych danych",
    "Nav pieejami reģistra dati",
    "Nėra žurnalo duomenų"
  ],
  "id_text_web_disconnect_from_cloud": [
    "Disconnect",
    "Katkaise yhteys",
    "Disconnect",
    "Ausloggen",
    "Disconnect",
    "Disconnect",
    "Disconnect",
    "Disconnect",
    "Disconnect",
    "Atslēgties",
    "Atjungti"
  ],
  "id_text_web_cloud_connection_active": [
    "Connected to the Cloud Service",
    "Yhdistetty pilvipalveluun.",
    "Connected to the Cloud Service",
    "Verbunden mit Cloud-Dienst",
    "Connected to the Cloud Service",
    "Connected to the Cloud Service",
    "Connected to the Cloud Service",
    "Connected to the Cloud Service",
    "Connected to the Cloud Service",
    "Savienojums ar Cloud pakalpojumu",
    "Prisijungti prie debesijos paslaugos"
  ],
  "id_text_web_signout": [
    "Sign out",
    "Kirjaudu ulos",
    "Logga ut",
    "Ausloggen",
    "Fermer",
    "Afmelden",
    "Logi välja",
    "Log ud",
    "Wypisz się",
    "Izrakstīties",
    "Atsijungti"
  ],
  "id_text_license_info": [
    "License",
    "License",
    "License",
    "Lizenz",
    "License",
    "License",
    "License",
    "License",
    "License",
    "Licence",
    "Licencija"
  ],
  "id_text_web_account": [
    "Account",
    "Tili",
    "Konto",
    "Account",
    "Compte",
    "Mijn account",
    "Konto",
    "Konto",
    "Konto",
    "Konts",
    "Paskyra"
  ],
  "id_text_web_check_error_log": [
    "Device error! Please check the error log for more information",
    "Laitevika! Lisätietoja virhetilanteesta saat vikalokista.",
    "Aggregatfel! Närmare uppgifter om felsituationen hittar du felloggen.",
    "Gerätefehler! Weitere Angaben zur Störung im Fehlerprotokoll.",
    "Appareil fautif, veuillez contrôler le 'error log' pour plus d'infos.",
    "Toestel fout, controleer alstublieft de error log voor meer informatie.",
    "Seadme viga! Lisateavet saad vealogist.",
    "Aggregatfejl. Tjek venligst fejllog for yderligere info. ",
    "Błąd urządzenia! Proszę sprawdzić komunikat błędu by uzyskać więcej informacji.",
    "Iekārtas kļūda! Plašāka informācija ir pieejama kļūdu reģistrā",
    "Įrenginio klaida! Norėdami sužinoti daugiau, patikrinkite klaidos žurnalą"
  ],
  "id_text_web_ip_address_change": [
    "Device will reboot after entering configuration number and device IP address may change. ",
    "Laite käynnistyy uudelleen konfiguroinnin jälkeen. Laitteen IP osoite saattaa muuttua.",
    "Device will reboot after entering configuration number and device IP address may change. ",
    "Device will reboot after entering configuration number and device IP address may change. ",
    "Device will reboot after entering configuration number and device IP address may change. ",
    "Device will reboot after entering configuration number and device IP address may change. ",
    "Device will reboot after entering configuration number and device IP address may change. ",
    "Device will reboot after entering configuration number and device IP address may change. ",
    "Device will reboot after entering configuration number and device IP address may change. ",
    "Iekārta pēc konfigurācijas pārstartēsies, un iekārtas IP adrese var izmainīties.",
    "Po pakartotinės konfigūracijos įrenginys pasileis iš naujo ir gali pasikeisti įrenginio IP adresas. "
  ],
  "id_text_web_change_lock_code": [
    "Change lock code",
    "Vaihda lukkokoodi",
    "Byt låskod",
    "Sperrcode ändern",
    "Modifier le code de verrouillage",
    "Toegangscode aanpassen",
    "Muuda parooli",
    "Ændre låsekode",
    "Zmień kod blokady",
    "Mainīt bloķēšanas kodu",
    "Pakeiskite užrakto kodą"
  ],
  "id_text_web_enter_old_code": [
    "Enter current code",
    "Syötä nykyinen koodi",
    "Mata in nuvarande kod",
    "Aktuellen Code eingeben",
    "Entrer code actuel",
    "Huidige code invoeren",
    "Sisesta praegune parool",
    "Indtast aktuel kode",
    "Podaj aktualny kod",
    "Ievadīt šābrīža kodu",
    "Įveskite esamą kodą"
  ],
  "id_text_web_enter_new_code": [
    "Enter new code",
    "Syötä uusi koodi",
    "Mata in ny kod",
    "Neuen Code eingeben",
    "Entrer nouveau code",
    "Nieuwe code invoeren",
    "Sisesta uus parool",
    "Indtast ny kode",
    "Podaj nowy kod",
    "Ievadīt jauno kodu",
    "Įveskite naują kodą"
  ],
  "id_text_web_enter_new_code_again": [
    "Enter new code again",
    "Syötä uusi koodi uudellen",
    "Mata in nya kod på nytt",
    "Neuen Code eirneut eingeben",
    "Confirmer nouveau code",
    "Nieuwe code nogmaals invoeren",
    "Sisesta veel kord uus parool",
    "Indtast ny kode igen",
    "Znów podaj nowy kod",
    "Atkārtoti ievadīt jauno kodu",
    "Dar kartą įveskite naują kodą"
  ],
  "id_text_web_cloud_graph_day": [
    "Day",
    "Päivä",
    "Day",
    "Day",
    "Day",
    "Day",
    "Day",
    "Day",
    "Day",
    "Day",
    "Day"
  ],
  "id_text_web_cloud_graph_week": [
    "Week",
    "Viikko",
    "Week",
    "Week",
    "Week",
    "Week",
    "Week",
    "Week",
    "Week",
    "Week",
    "Week"
  ],
  "id_text_web_cloud_graph_month": [
    "Month",
    "Kuukausi",
    "Month",
    "Month",
    "Month",
    "Month",
    "Month",
    "Month",
    "Month",
    "Month",
    "Month"
  ],
  "id_text_web_cloud_graph_all": [
    "All",
    "Kaikki",
    "All",
    "All",
    "All",
    "All",
    "All",
    "All",
    "All",
    "All",
    "All"
  ],
  "id_text_web_cloud_graph_previous": [
    "Previous",
    "Edellinen",
    "Föregående",
    "Vorige",
    "Précédent",
    "Vorige",
    "Eelmine",
    "Forrige ",
    "Poprzedni",
    "Poprzedni",
    "Poprzedni"
  ],
  "id_text_web_cloud_graph_next": [
    "Next",
    "Seuraava",
    "Nästa",
    "Nächster",
    "Suivant",
    "Volgende",
    "Järgmine",
    "Næste",
    "Następny",
    "Następny",
    "Następny"
  ],
  "id_text_web_cloud_graph_export": [
    "Export",
    "Lataa",
    "Ladda ner",
    "Export",
    "Exporter",
    "Exporteren",
    "Ekspordi",
    "Eksport",
    "Eksportuj",
    "Eksports",
    "Eksportuoti"
  ],
  "id_text_web_cloud_graph_jan": [
    "January",
    "Tammikuu",
    "Januari",
    "Januar",
    "Janvier",
    "Januari",
    "Jaanuar",
    "Januar",
    "Styczeń",
    "Janvāris",
    "Sausis"
  ],
  "id_text_web_cloud_graph_feb": [
    "February",
    "Helmikuu",
    "Februari",
    "Februar",
    "Février",
    "Februari",
    "Veebruar",
    "Februar",
    "Luty",
    "Februāris",
    "Vasaris"
  ],
  "id_text_web_cloud_graph_mar": [
    "March",
    "Maaliskuu",
    "Mars",
    "März",
    "Mars",
    "Maart",
    "Märts",
    "Marts",
    "Marzec",
    "Marts",
    "Kovas"
  ],
  "id_text_web_cloud_graph_apr": [
    "April",
    "Huhtikuu",
    "April",
    "April",
    "Avril",
    "April",
    "Aprill",
    "April",
    "Kwiecień",
    "Aprīlis",
    "Balandis"
  ],
  "id_text_web_cloud_graph_may": [
    "May",
    "Toukokuu",
    "Maj",
    "Mai",
    "Mai",
    "Mei",
    "Mai",
    "Maj",
    "Maj",
    "Maijs",
    "Gegužė"
  ],
  "id_text_web_cloud_graph_jun": [
    "June",
    "Kesäkuu",
    "Juni",
    "Juni",
    "Juin",
    "Juni",
    "Juuni",
    "Juni",
    "Czerwiec",
    "Jūnijs",
    "Birželis"
  ],
  "id_text_web_cloud_graph_jul": [
    "July",
    "Heinäkuu",
    "Juli",
    "Juli",
    "Juillet",
    "Juli",
    "Juuli",
    "Juli",
    "Lipiec",
    "Jūlijs",
    "Liepa"
  ],
  "id_text_web_cloud_graph_aug": [
    "August",
    "Elokuu",
    "Augusti",
    "August",
    "Août",
    "Augustus",
    "August",
    "August",
    "Sierpień",
    "Augusts",
    "Rugpjūtis"
  ],
  "id_text_web_cloud_graph_sep": [
    "September",
    "Syyskuu",
    "September",
    "September",
    "Septembre",
    "September",
    "September",
    "September",
    "Wrzesień",
    "Septembris",
    "Rugsėjis"
  ],
  "id_text_web_cloud_graph_oct": [
    "October",
    "Lokakuu",
    "Oktober",
    "Oktober",
    "Octobre",
    "Oktober",
    "Oktoober",
    "Oktober",
    "Październik",
    "Oktobris",
    "Spalis"
  ],
  "id_text_web_cloud_graph_nov": [
    "November",
    "Marraskuu",
    "November",
    "November",
    "Novembre",
    "November",
    "November",
    "November",
    "Listopad",
    "Novembris",
    "Lapkritis"
  ],
  "id_text_web_cloud_graph_dec": [
    "December",
    "Joulukuu",
    "December",
    "Dezember",
    "Décembre",
    "December",
    "Detsember",
    "December",
    "Grudzień",
    "Decembris",
    "Gruodis"
  ],
  "id_text_web_grant_access": [
    "Grant visitor access",
    "Myönnä vieralijaoikeus",
    "Bevilja gästanvändarrättigheter",
    "Gastzugriff gewähren",
    "Accès visiteur autorisé",
    "Bezoekerstoegang toestaan",
    "Külalispääsu andmine",
    "Vig besøgende adgang",
    "Udziel dostępu gościom",
    "Piešķirt viesa piekļuvi",
    "Garantuoti lankytojo prieigą"
  ],
  "id_text_web_remove_access": [
    "Remove",
    "Poista",
    "Ta bort",
    "Entfernen",
    "Supprimer",
    "Verwijderen",
    "Eemalda",
    "Fjern",
    "Usuń",
    "Noņemt",
    "Šalinti"
  ],
  "id_text_web_send_email": [
    "Send email",
    "Lähetä sähköposti",
    "Skicka e-post",
    "E-Mail senden",
    "Envoyer email",
    "Stuur e-mail",
    "Saada e-kiri",
    "Send e-mail",
    "Wyślij e-mail",
    "Nosūtīt e-pastu",
    "Siųsti el. laišką"
  ],
  "id_text_web_device_offline": [
    "The ventilation unit is offline.",
    "Ilmanvaihtokone ei ole yhteydessä palvelimeen.",
    "Ventilationsaggregatet är offline.",
    "Das Lüftungsgerät ist offline.",
    "L'appareil de ventilation est déconnecté.",
    "De ventilatie-eenheid is off-line",
    "Ventilatsiooniseade on ühenduseta.",
    "Ventilationsenheden er offline.",
    "Urządzenie wentylacyjne nie jest połączone.",
    "Ventilācijas iekārta ir bezsaistes režīmā.",
    "Vėdinimo įrenginys išjungtas."
  ],
  "id_text_web_cloud_connecting_button": [
    "Connecting…",
    "Yhdistää…",
    "Ansluter…",
    "Verbindungsaufbau…",
    "Connexion en cours…",
    "Verbinding maken…",
    "Ühendamine ...",
    "Tilslutter...",
    "Łączę...",
    "Savienojas...",
    "Jungiamasi…"
  ],
  "id_text_web_cloud_connecting_message": [
    "Trying to connect to MyVallox Cloud.",
    "Yrittää yhdistää pilvipalveluun",
    "Försöker ansluta till MyVallox Cloud",
    "Verbindungsversuch mit MyVallox Cloud.",
    "Tentative de connexion à MyVallox Cloud.",
    "Systeem porbeert verbinding te maken met MyVallox Cloud.",
    "Proovitakse luua ühendust MyVallox Cloudiga.",
    "Forsøger at oprette forbindelse til MyVallox Cloud.",
    "Próba połączenia z MyVallox Cloud.",
    "Notiek pieslēgšanās MyVallox Cloud.",
    "Bandoma prisijungti prie „MyVallox Cloud“."
  ],
  "id_text_web_cloud_fail_button": [
    "Retry",
    "Yritä uudelleen",
    "Försök på nytt",
    "Erneut versuchen",
    "Nouvelle tentative",
    "Opnieuw proberen",
    "Proovi uuesti",
    "Prøv igen",
    "Ponowna próba",
    "Mēģināt vēlreiz",
    "Bandyti vėl"
  ],
  "id_text_web_cloud_fail_message": [
    "Could not connect to MyVallox Cloud.",
    "Pilvipalveluun ei saatu yhteyttä",
    "Kunde inte ansluta till MyVallox Cloud",
    "Verbindung mit MyVallox Cloud nicht möglich.",
    "Echec de connexion à MyVallox Cloud.",
    "Verbinding met MyVallox Cloud niet gelukt.",
    "Ühenduse loomine MyVallox Cloudiga ei õnnestunud.",
    "Kunne ikke oprette forbindelse til MyVallox Cloud.",
    "Nie mogę połączyć się z MyVallox Cloud.",
    "Pieslēgšanās MyVallox Cloud neizdevās.",
    "Negalima prisijungti prie „MyVallox Cloud“."
  ],
  "id_text_web_cloud_oldsw_button": [
    "Preparing update…",
    "Alustaa päivitystä",
    "Förbereder uppdatering…",
    "Update wird vorbereitet…",
    "Préparation de la MAJ en cours…",
    "Update voorbereiden…",
    "Uuenduse ettevalmistamine ...",
    "Forbereder opdatering...",
    "Przygotowywanie aktualizacji...",
    "Atjauninājuma sagatavošana…",
    "Ruošiamasi naujinimui…"
  ],
  "id_text_web_cloud_oldsw_message": [
    "Preparing software update.",
    "Päivityksen alustus käynnissä",
    "Förbereder uppdatering",
    "Software-Update wird vorbereitet.",
    "MAJ du logiciel.",
    "Software-update wordt voorbereid.",
    "Valmistatakse ette tarkvarauuendust.",
    "Forbereder softwareopdatering.",
    "Przygotowywanie aktualizacji oprogramowania.",
    "Programmatūras atjauninājuma sagatavošana.",
    "Ruošiamasi programinės įrangos naujinimui."
  ],
  "id_text_web_cloud_update_button": [
    "Updating…",
    "Päivittää…",
    "Uppdaterar…",
    "Aktualisierung läuft…",
    "Mise à jour en cours…",
    "Bezig met update…",
    "Uuendamine ...",
    "Opdaterer...",
    "Aktualizowanie...",
    "Atjaunināšana…",
    "Naujinama…"
  ],
  "id_text_web_cloud_update_message": [
    "Installing software update.",
    "Päivityksen asennus käynnissä",
    "Installerar uppdatering",
    "Software-Update wird installiert.",
    "Installation de la MAJ en cours.",
    "Software-update wordt geïnstalleerd.",
    "Installitakse tarkvarauuendust.",
    "Installerer softwareopdatering.",
    "Instalowanie aktualizacji oprogramowania.",
    "Programmatūras atjauninājuma instalēšana.",
    "Diegiamas programinės įrangos naujinimas."
  ],
  "id_text_web_signup_url": [
    "https://cloud.vallox.com/signup/",
    "https://cloud.vallox.com/signup/",
    "https://cloud.vallox.com/signup/",
    "https://cloud.vallox.com/signup/",
    "https://cloud.vallox.com/signup/",
    "https://cloud.vallox.com/signup/",
    "https://cloud.vallox.com/signup/",
    "https://cloud.vallox.com/signup/",
    "https://cloud.vallox.com/signup/",
    "https://cloud.vallox.com/signup/",
    "https://cloud.vallox.com/signup/"
  ],
  "device_model_data": [
    null,
    "Vallox 096 MV",
    "Vallox 110 MV",
    "Vallox 145 MV",
    "Vallox 245 MV",
    "ValloPlus 270 MV",
    "ValloPlus 350 MV",
    "ValloPlus 510 MV",
    "ValloPlus 850 MV",
    "Vallox TSK Multi 50 MV",
    "Vallox TSK Multi 80 MV",
    "ValloMulti 200 MV",
    "ValloMulti 300 MV",
    "DV96 Adroit",
    "DV110 Adroit",
    "DV145 Adroit",
    "DV245 Adroit",
    "DV TSK Multi 50 Adroit",
    "DV TSK Multi 80 Adroit"
  ],
  "device_type_data": [
    null,
    "3722",
    "3702",
    "3712",
    "3732",
    "3608",
    "3609",
    null,
    null,
    null,
    null,
    null
  ]
}

// Combined localization and data model solution.
// A hierarchy of localization strings with corresponding arbitrary
// data (setting values, Vallox device constants, ...).
var L10n = L10n || function () {

        // TextMap configuration
        // Map Moment locale ids to TextMap indexes.
        // The languages are listed in TextMap.id_txt_language_not_translated.
        // Note: make sure that the order is correct and that you use
        // Moment id (e.g., sv vs. se).
        var languages = ['en', 'fi', 'sv', 'de', 'fr', 'nl', 'et', 'da', 'pl', 'lv', 'lt'];

        var dataListeners = {'*': []};

        // This is the same for every language (see TextMap.id_text_degr_celcius).
        var centigrade = '&deg;C';
        // Convenience variables for I/O settings
        var updown = {txt: 'up_down'};
        var emptyrange = {txt: ''};

        var programmed = {
            duration: {
                txt: 'value_name_duration',
                data: {value: {hours: 0, minutes: 1}, modbus: VlxDevConstants.EXT_EXTRA_TIME}
            },
            supply: {txt: 'supply_fan', data: {value: "--", modbus: VlxDevConstants.EXT_EXTRA_SUPP_FAN}},
            extract: {txt: 'extract_fan', data: {value: "--", modbus: VlxDevConstants.EXT_EXTRA_EXTR_FAN}},
            temperature: {
                txt: 'value_name_temperature',
                data: {value: "--", modbus: VlxDevConstants.EXT_EXTRA_AIR_TEMP_TARGET}
            },
            timerenabled: {
                txt: 'value_name_timer',
                data: {value: false, modbus: VlxDevConstants.EXT_EXTRA_TIMER_ENABLED}
            }
        };
        // Convenience function VlxDevConstants
        // cyc( 'boost', 'timer_enabled' ) -> VlxDevConstants.A_CYC_BOOST_TIMER_ENABLED
        function cyc(profile, post) {
            var key = sprintf('A_CYC_%s_%s',
                profile.toUpperCase(), post.toUpperCase());
            var v = VlxDevConstants[key];
            if (v) {
                return v;
            }
            console.error('Bad VlxDevConstant: ' + key);
        }


        // Convenience function for sensor definitions.
        // type: rh or co2
        // id: integer or string, the correct VlxDevConstant is
        // calculated as follows:
        // type, string -> VlxDevConstants.A_CYC_<string>
        // type, integer -> VlxDevConstants.A_CYC_<type>_SENSOR_<integer>
        function sensor(type, id) {
            var modbus = sprintf('ext_sen_%s',
                _.isString(id) ? id : sprintf('%s_sensor_%s', type, id));
            return {
                x: '', data: {
                    value: 0, hidden: true,
                    unit: type == 'rh' ? '%' : 'ppm',
                    modbus: VlxDevConstants[modbus.toUpperCase()], meta: 'l10n.hide'
                }
            }
        }

        // Note: Profiles are the same in Wizard and on Dashboard.
        // However some of the semantics are different.
        // Humidity and co2 are switches in Wizard and
        // (viewable) amounts on Dashboard.
        function wizardProfile(txt, profile) {
            return _.defaults({txt: txt},
                {
                    fanspeed: {
                        txt: 'info_txt_fan_speed',
                        data: {
                            value: "--", modbus: cyc(profile, 'speed_setting'),
                            unit: '%'
                        }
                    },
                    supply: {
                        txt: 'info_txt_supply_air',
                        data: {
                            value: "--", unit: centigrade,
                            min: 5, max: 25, modbus: cyc(profile, 'air_temp_target')
                        }
                    },
                    humidity: {
                        txt: 'info_txt_humidity',
                        data: {value: true, modbus: cyc(profile, 'rh_ctrl_enabled')}
                    },
                    co2: {
                        txt: 'info_txt_CO2',
                        data: {value: true, modbus: cyc(profile, 'co2_ctrl_enabled')}
                    }
                });
        }

        function dashboardProfile(txt) {
            return {
                txt: txt,
                // Dummy property. Only needed for showing
                // disabled state. Value never shown.
                humidity: {
                    txt: 'info_txt_humidity',
                    data: {value: 0}
                },
                // Dummy property. Only needed for showing
                // disabled state. Value never shown.
                co2: {
                    txt: 'info_txt_CO2',
                    data: {value: 0}
                },

                activate: {
                    txt: 'web_activate',
                    data: {value: false}
                }
            }
        }


        // The localisation string can be defined in different ways.
        // The search order is:
        //   1. entry.txt: TextMap id without id_text_ prefix.
        //   2. entry.cid: where cid is the current language id (see languages above).
        //   3. entry.x: Value matches all languages.
        var dictionary = {
            language: {
                txt: 'title_language', data: {value: 'en',modbus: VlxDevConstants.EXT_LANGUAGE},
                list: _.map(languages, function (val, index) {
                    return {
                        x: TextMap.id_txt_language_not_translated[index],
                        data: {value: val}
                    }
                })
            },
            // Strings used by wizard
            wizard: {
                // Common
                back: {txt: 'web_previous'},
                next: {txt: 'web_next'},
                finish: {txt: 'web_finish'},
                search: {fi: 'Haku', x: 'Search'},
                add: {fi: 'Lisää uusi', x: 'Add New'},
                on: {txt: 'value_on'},
                off: {txt: 'value_off'},
                rpm: {txt: 'rpm'},
                // Start page
                start: {
                    title: {txt: 'web_start'},
                    welcome: {txt: 'web_welcome'},
                    // Value is delta between system time and the set time.
                    // Thus, the value as moment can be calculated with delta2moment (see below).
                    time: {txt: 'time', data: {value: 0}},
                    twentyfour: {
                        txt: 'setting_name_24h',
                        data: {value: true, modbus: VlxDevConstants.A_CYC_12_HOUR_CLOCK_ENABLED}
                    },
                    dst: {
                        txt: 'setting_name_daysaving',
                        data: {value: false, modbus: VlxDevConstants.A_CYC_SUMMER_TIME_AUTO_ENAB}
                    },
                    // Hint is needed for JSON parsing.
                    date: {
                        txt: 'date', data: {
                            value: "--", modbus: VlxDevConstants.EXT_CYC_DATE,
                            hint: 'moment'
                        }
                    }
                },
                // Access Rights page
                access: {
                    title: {txt: 'title_access_rights'},
                    header: {txt: 'web_access'},
                    pin: {txt: 'password', data: {value: '0000', modbus: VlxDevConstants.EXT_USER_PASSWORD}},
                    level: {
                        txt: 'value_name_level',
                        levels: [
                            {
                                txt: 'value_level_free',

                                info: [
                                    {txt: 'web_free'}
                                ]
                            },
                            {
                                txt: 'value_level_limited',
                                info: [

                                    {txt: 'web_limited_1'},
                                    {txt: 'web_limited_2'}
                                ]
                            },
                            {
                                txt: 'value_level_very_limited',
                                info: [
                                    {txt: 'web_very_limited_1'},
                                    {txt: 'web_very_limited_2'}
                                ]
                            }

                        ],
                        data: {value: 0, modbus: VlxDevConstants.EXT_CYC_RESTORE_SERVICE_MODE}
                    },
                    parental: {
                        txt: 'value_name_parental',
                        data: {value: false, modbus: VlxDevConstants.A_CYC_PARENTAL_CTRL_ENABLED}
                    }
                },
                // Expert Settings page
                expert: {
                    title: {txt: 'menu_expert_settings'},
                    header: {txt: 'menu_expert_settings'},
                    // Fan value is the max( supply, extract). It is stored
                    // so we can easily see if the maximum changes.
                    // See function fanMax in wizard.js.
                    fan: {
                        txt: 'fan_settings', data: {value: -1},
                        supply: {
                            txt: 'info_txt_supply_air',
                            // Hint is needed for REST.
                            data: {
                                value: "--", amount: '---', unit: '%',
                                modbus: VlxDevConstants.EXT_CYC_SUPP_FAN_SPEED, hint: 'rpm'
                            }
                        },
                        extract: {
                            txt: 'extract_air',
                            // Hint is needed for REST.
                            data: {
                                value: "--", amount: '---', unit: '%',
                                modbus: VlxDevConstants.EXT_CYC_EXTR_FAN_SPEED, hint: 'rpm'
                            }
                        }
                    },

                    profiles: {
                        txt: 'web_profiles',
                        home: {
                            txt: 'title_at_home',
                            fanspeed: {
                                txt: 'info_txt_fan_speed', data: {
                                    value: "--", modbus: VlxDevConstants.A_CYC_HOME_SPEED_SETTING, unit: '%'
                                }
                            },
                            supply: {
                                txt: 'info_txt_supply_air',
                                data: {
                                    value: "--",
                                    unit: centigrade,
                                    min: 5,
                                    max: 25,
                                    modbus: VlxDevConstants.EXT_HOME_AIR_TEMP_TARGET
                                }
                            },
                            humidity: {
                                txt: 'info_txt_humidity',
                                data: {value: true, modbus: VlxDevConstants.A_CYC_HOME_RH_CTRL_ENABLED}
                            },
                            co2: {
                                txt: 'info_txt_CO2',
                                data: {value: true, modbus: VlxDevConstants.A_CYC_HOME_CO2_CTRL_ENABLED}
                            }
                        },
                        away: {
                            txt: 'title_away',
                            fanspeed: {
                                txt: 'info_txt_fan_speed', data: {
                                    value: "--", modbus: VlxDevConstants.A_CYC_AWAY_SPEED_SETTING, unit: '%'
                                }
                            },
                            supply: {
                                txt: 'info_txt_supply_air',
                                data: {
                                    value: "--",
                                    unit: centigrade,
                                    min: 5,
                                    max: 25,
                                    modbus: VlxDevConstants.EXT_AWAY_AIR_TEMP_TARGET
                                }
                            },
                            humidity: {
                                txt: 'info_txt_humidity',
                                data: {value: true, modbus: VlxDevConstants.A_CYC_AWAY_RH_CTRL_ENABLED}
                            },
                            co2: {
                                txt: 'info_txt_CO2',
                                data: {value: true, modbus: VlxDevConstants.A_CYC_AWAY_CO2_CTRL_ENABLED}
                            }
                        },
                        boost: {
                            txt: 'title_boost',
                            fanspeed: {
                                txt: 'info_txt_fan_speed', data: {
                                    value: "--", modbus: VlxDevConstants.A_CYC_BOOST_SPEED_SETTING, unit: '%'
                                }
                            },
                            supply: {
                                txt: 'info_txt_supply_air',
                                data: {
                                    value: "--",
                                    unit: centigrade,
                                    min: 5,
                                    max: 25,
                                    modbus: VlxDevConstants.EXT_BOOST_AIR_TEMP_TARGET
                                }
                            },
                            humidity: {
                                txt: 'info_txt_humidity',
                                data: {value: true, modbus: VlxDevConstants.A_CYC_BOOST_RH_CTRL_ENABLED}
                            },
                            co2: {
                                txt: 'info_txt_CO2',
                                data: {value: true, modbus: VlxDevConstants.A_CYC_BOOST_CO2_CTRL_ENABLED}
                            },
                            timer: {
                                txt: 'value_name_timer',
                                data: {
                                    value: true,
                                    modbus: VlxDevConstants.EXT_BOOST_TIMER_ENABLED
                                }
                            },
                            duration: {
                                txt: 'value_name_duration',
                                data: {
                                    value: 128, minutesflag: true,
                                    modbus: VlxDevConstants.EXT_BOOST_TIME
                                }
                            }

                        },
                        fireplace: {
                            txt: 'menu_fire_place',
                            duration: {
                                txt: 'value_name_duration',
                                data: {
                                    value: 66, minutesflag: true,
                                    modbus: cyc('fireplace', 'time')
                                }
                            },
                            supply: {
                                txt: 'supply_fan',
                                data: {
                                    value: "--", unit: '%',
                                    modbus: VlxDevConstants.A_CYC_FIREPLACE_SUPP_FAN
                                }
                            },
                            extract: {
                                txt: 'extract_fan',
                                data: {value: "--", unit: '%', modbus: VlxDevConstants.A_CYC_FIREPLACE_EXTR_FAN}
                            },
                            timer: {
                                txt: 'value_name_timer', data: {
                                    value: true,
                                    modbus: cyc('fireplace', 'timer_enabled')
                                }
                            }
                        }
                    }
                },
                // Summary page
                summary: {

                    title: {txt: 'web_summary'}
                }
            },
            // Control panels have each their own root.
            // Common definitions
            // Device time as moment. This is kept in sync
            // with wizard.start.time by syncTimes function below.
            // Note: This is the device time on the last value
            // change (either to wizard.start.time or this).
            // If you want to get the current device time,
            // you need to get it from wizard.start.time delta.
            // Hint is needed for JSON parsing.
            moment: {x: '', data: {value: "--", modbus: VlxDevConstants.EXT_CYC_TIME, hint: 'moment'}},
            blank: {x: ''},
            ok: {txt: 'web_ok'},
            cancel: {txt: 'web_cancel'},
            confirmation: {txt: 'web_confirmation'},
            humidity: {txt: 'info_txt_humidity'},
            co2: {txt: 'info_txt_CO2'},
            days: {txt: 'info_txt_value_d'},
            years: {txt: 'info_txt_value_y'},
            /**
             * Expert datamodel starts here
             */
            generalsettings: {

                browserip: {data: {value: "", modbus: VlxDevConstants.EXT_BROWSER_IP}},
                browserport: {data: {value: "80", modbus: VlxDevConstants.EXT_BROWSER_PORT}},
                datapolling: {
                    interval: {data: {value: 20, modbus: VlxDevConstants.EXT_DATA_POLLING_INTERVAL}},
                    enabled: {data: {value: true, modbus: VlxDevConstants.EXT_DATA_POLLING_ENABLED}},
                    allowuiupdates: {data: {value: true, modbus: VlxDevConstants.EXT_DATA_POLLING_UI_UPDATE_ENABLED}}
                },
                showwizard: {data: {value: false, modbus: VlxDevConstants.EXT_SHOW_WIZARD}},
                listenerenabled: {data: {value: false, modbus: VlxDevConstants.EXT_LISTENER_ENABLED}},
                listenerskipper: {data: {value: 0, modbus: VlxDevConstants.EXT_LISTENER_SKIPPER}},
                updateuidata: {data: {value: false, modbus: VlxDevConstants.EXT_UPDATE_UI_DATA}},
                pagesloaded: {data: {value: false, modbus: VlxDevConstants.EXT_PAGES_LOADED}},
                devicestate: {data: {value: 0, modbus: VlxDevConstants.A_CYC_STATE}},
                defrosting: {data: {value: 0, modbus: VlxDevConstants.EXT_CYC_DEFROSTING}},
                devicemode: {data: {value: 0, modbus: VlxDevConstants.A_CYC_MODE}},
                graphduration: {data: {value: 1, modbus: VlxDevConstants.EXT_GRAPH_DURATION_IN_DAYS}},
                initialdataloaded: {data: {value: false, modbus: VlxDevConstants.EXT_BOOT_FINISHED}},
                servicedelay: {data: {value: 4458789, modbus: VlxDevConstants.EXT_DATA_SC}},
                configdone: {data: {value: 0, modbus: VlxDevConstants.EXT_CONFIG_DONE}},
                offlinemode: {data: {value: 0, modbus: VlxDevConstants.EXT_OFFLINE_MODE}},
                uuidvalue: {data: {value: '', modbus: VlxDevConstants.EXT_UUID_STRING}},




                networkerrornote: {
                    title: {txt: 'web_error_title'},
                    content: {txt: 'web_network_error'},
                    sticky: {data: {value: true}},
                    closable: {data: {value: true}},
                    type: {data: {value: 0}} // 0 = error , 1=info
                },
                socketnotsupportederror: {
                    title: {txt: 'web_error_title'},
                    content: {txt: 'web_socket_not_supported'},
                    sticky: {data: {value: true}},
                    closable: {data: {value: true}},
                    type: {data: {value: 0}} // 0 = error , 1=info
                },
                graphswaitnote: {
                    title: {txt: 'web_please_wait'},
                    content: {txt: 'web_fetching_logs'},
                    sticky: {data: {value: true}},
                    closable: {data: {value: true}},
                    type: {data: {value: 1}} // 0 = error , 1=info
                },
                defrostwaitnote: {
                    title: {txt: 'web_please_wait'},
                    content: {txt: 'web_defrosting_ongoing'},
                    sticky: {data: {value: true}},
                    closable: {data: {value: true}},
                    type: {data: {value: 1}} // 0 = error , 1=info
                },
                rebootinfonote: {
                    title: {txt: 'web_reboot_title'},
                    content: {txt: "web_reboot_device"},
                    sticky: {data: {value: true}},
                    closable: {data: {value: true}},
                    type: {data: {value: 1}} // 0 = error , 1=info
                },
                ipchanged: {
                    title: {txt: 'web_info'},
                    content: {txt: "web_ip_address_change"},
                    sticky: {data: {value: true}},
                    closable: {data: {value: false}},
                    type: {data: {value: 1}} // 0 = error , 1=info
                },
                infonote: {
                    title: {txt: 'Info'},
                    content: {txt: "Did you know ?"},
                    sticky: {data: {value: true}},
                    closable: {data: {value: true}},
                    type: {data: {value: 1}} // 0 = error , 1=info
                }

            },
            legends: {
                datetext: {txt: 'web_info'}
            },
            nodataavailable: {txt: 'web_no_data_available'},


            expert: {
                txt: 'menu_expert_settings',
                io: {
                    txt: 'input_output_settings',
                    analog: [
                        {
                            txt: 'web_none',
                            range: {txt: null}
                        },
                        {
                            txt: 'stop_away_home_boost',
                            range: {txt: 'voltage_steps'}
                        },
                        {
                            txt: 'supply_air_temperature_control',
                            // todo: TextMap
                            range: {x: '0-10V = 5-25&deg;C'}
                        }
                    ],
                    digital: [
                        {txt: 'web_none', range: null},
                        {txt: 'fireplace_on_off', range: updown},
                        {txt: 'home_away_switch', range: updown},
                        {txt: 'forced_fireplace_on_off', range: updown},
                        {txt: 'fire_alarm_none_stop', range: updown},
                        {txt: 'boost_on_neutral', range: updown},
                        {txt: 'forced_bypass', range: updown},
                        {txt: 'week_clock_on_off', range: updown},
                        {txt: 'selfprogrammed_input', range: updown, programmed: true}

                    ],
                    title: {txt: 'selfprogrammed_input'},


                    inputs: {
                        // Value for each selection denotes index of either analog or digital list above.
                        analog: {txt: 'analog_input', data: {value: 0, modbus: VlxDevConstants.EXT_ANALOG_INPUT_MODE}},
                        // If digital input's value is 0, then the programmed property is in play.
                        digital1: {
                            txt: 'digital_input_1', data: {value: 1, modbus: VlxDevConstants.EXT_DIGITAL_INPUT_1_MODE},
                            programmed: _.clone(programmed)
                        },
                        digital2: {
                            txt: 'digital_input_2', data: {value: 2, modbus: VlxDevConstants.EXT_DIGITAL_INPUT_2_MODE},
                            programmed: _.clone(programmed)
                        }
                    },
                    relay: {
                        txt: 'error_relay', data: {value: 0, modbus: VlxDevConstants.A_CYC_RELAY_MODE},
                        list: [
                            {txt: 'service_remainder'}, // [sic]
                            {txt: 'error'},
                            {txt: 'error_or_service_remainder'}, // [sic]
                            {txt: 'fire_alarm'},
                            {txt: 'relay_bypass_state'},
                            {txt: 'relay_control_coupling'},
                            {txt: 'web_none'}
                        ]
                    }
                },
                parental: {
                    txt: 'value_name_parental'
                },
                antifreeze: {
                    txt: 'antifreezing_settings',
                    method: {
                        txt: 'method', data: {value: 0, modbus: VlxDevConstants.A_CYC_DEFROST_MODE},
                        list: [
                            {txt: 'info_txt_value_bypass'},
                            {txt: 'supply_fan_stop'}
                        ]
                    },
                    humidity: {
                        txt: 'info_txt_humidity',
                        data: {value: "--", min: -50, max: 50, step: 5, modbus: VlxDevConstants.EXT_CYC_DEFROST_RH_OFFSET}
                    },
                    temperature: {
                        txt: 'outdoor_air_degrees',
                        data: {value: "--", min: 0, max: 100, step: 5, modbus: VlxDevConstants.EXT_CYC_DEFROST_TEMP_PARAM}
                    }
                },
                sensors: {
                    txt: 'extra_settings_for_sensors',
                    adjustment: {
                        txt: 'web_adjustment',
                        data: {value: 1, modbus: VlxDevConstants.A_CYC_SUPPLY_HEATING_ADJUST_MODE},
                        list: [
                            {txt: 'info_txt_supply_air'},
                            {txt: 'extract_air'},
                            {txt: 'cooling_mode'}
                        ]
                    },
                    humidity: {
                        txt: 'info_txt_humidity', data: {value: 0, modbus: VlxDevConstants.A_CYC_RH_LEVEL_MODE},
                        list: [
                            {txt: 'automatic'},
                            {txt: 'manual'}
                        ]
                    },
                    limits: {
                        humidity: {
                            txt: 'humidity_limit',
                            data: {value: "--", min: 0, max: 100, modbus: VlxDevConstants.A_CYC_RH_BASIC_LEVEL}
                        },
                        co2: {
                            txt: 'co2_limit',
                            data: {
                                value: "--", min: 500, max: 2000, step: 100, unit: 'ppm',
                                modbus: VlxDevConstants.A_CYC_CO2_THRESHOLD
                            }
                        }
                    }
                },
                modbus: {
                    txt: 'modbus_settings',
                    address: {
                        txt: 'address', data: {
                            value: 1, min: 1, max: 247, unit: ' ',
                            modbus: VlxDevConstants.A_CYC_MODBUS_ADDRESS
                        }
                    },
                    speed: {
                        txt: 'baud_rate', data: {value: 192, modbus: VlxDevConstants.A_CYC_MODBUS_BAUD_X100},
                        list: _.map([96, 192, 384, 576, 1152], function (n) {
                            return {x: n * 100, data: {value: n}};
                        })
                    },
                    parity: {
                        txt: 'parity', data: {value: 0, modbus: VlxDevConstants.EXT_MODBUS_PARITY},
                        list: [
                            {txt: 'no'},
                            {txt: 'even'},
                            {txt: 'odd'}
                        ]
                    },
                    endbit: {
                        txt: 'stop_bit', data: {value: 1, modbus: VlxDevConstants.EXT_MODBUS_STOPBIT},
                        list: [
                            {x: '1', data: {value: 1}},
                            {x: '2', data: {value: 2}}
                        ]
                    }
                },
                settings: {
                    txt: 'menu_restore_and_save_settings',
                    initial: {
                        save: {
                            txt: 'save_installation_s',
                            data: {modbus: VlxDevConstants.EXT_CYC_SAVE_INSTALLATION_SETTINGS}
                        },
                        load: {
                            txt: 'restore_installation_s',
                            data: {
                                confirmation: 'confirmation',
                                modbus: VlxDevConstants.EXT_CYC_RESTORE_INSTALLATION_SETTINGS
                            }
                        }
                    },
                    user: {
                        save: {txt: 'save_user_s', data: {modbus: VlxDevConstants.EXT_CYC_SAVE_USER_SETTINGS}},
                        load: {
                            txt: 'restore_user_s',
                            data: {confirmation: 'confirmation', modbus: VlxDevConstants.EXT_CYC_RESTORE_USER_SETTINGS}
                        }
                    },
                    factory: {
                        txt: 'restore_factory_s',
                        data: {confirmation: 'confirmation', modbus: VlxDevConstants.EXT_CYC_RESTORE_FACTORY_SETTINGS}
                    }
                }
            },
            /**
             * Service datamodel starts here
             */

            service: {
                txt: 'menu_service_menu',
                diagnostics: {
                    txt: 'title_service_diagnostics_d',
                    ok: {txt: 'ok'},
                    failed: {txt: 'failed'},
                    skipped: {txt: 'not_tested'},
                    testing: {txt: 'testing_ongoing'},

                    cannot: {txt: 'web_cannot'},
                    efficiency: {txt: 'efficiency', data: {value: 1, modbus: VlxDevConstants.A_CYC_EFFICIENCY_TEST}},
                    bypass: {
                        txt: 'info_txt_value_bypass',
                        data: {value: 1, modbus: VlxDevConstants.A_CYC_BY_PASS_TEST}
                    },
                    heater: {txt: 'menu_heater_test', data: {value: 1, modbus: VlxDevConstants.A_CYC_HEATER_TEST}},
                    preheating: {txt: 'preheating', data: {value: 0, modbus: VlxDevConstants.A_CYC_EXTRA_HEATER_TEST}},
                    supply: {
                        txt: 'value_name_supply',
                        data: {value: "--", unit: centigrade, modbus: VlxDevConstants.A_CYC_TEMP_SUPPLY_AIR}
                    },
                    cell: {
                        txt: 'info_supply_cell',
                        data: {value: "--", unit: centigrade, modbus: VlxDevConstants.A_CYC_TEMP_SUPPLY_CELL_AIR}
                    },
                    exhaust: {
                        txt: 'value_name_exhaust',
                        data: {value: "--", unit: centigrade, modbus: VlxDevConstants.A_CYC_TEMP_EXHAUST_AIR}
                    },
                    outdoor: {
                        txt: 'info_txt_outdoor_air',
                        data: {value: "--", unit: centigrade, modbus: VlxDevConstants.A_CYC_TEMP_OUTDOOR_AIR}
                    },
                    extract: {
                        txt: 'extract_air',
                        data: {value: "--", unit: centigrade, modbus: VlxDevConstants.A_CYC_TEMP_EXTRACT_AIR}
                    },
                    start: {
                        txt: 'web_start_tests',
                        data: {value: 0, confirmation: 'service.diagnostics.confirmation'}
                    },
                    confirmation: {txt: 'menu_start_test'},
                    // Value (truthy/falsy) signals whether tests are currently running.
                    ongoing: {
                        txt: 'testing_ongoing',
                        data: {value: false, modbus: VlxDevConstants.EXT_CYC_START_SELFTEST}
                    }
                },

                mode: {
                    txt: 'test_display', data: {value: 0, modbus: VlxDevConstants.EXT_TEST_MODE_SWITCH},
                    fan: {
                        txt: 'menu_fan_test',
                        supply: {
                            txt: 'value_name_supply',
                            data: {value: "--", modbus: VlxDevConstants.A_CYC_IN_SUPPLY_FAN}
                        },
                        extract: {txt: 'extract_air', data: {value: "--", modbus: VlxDevConstants.A_CYC_IN_EXTRACT_FAN}}
                        /*
                         supply: {txt: 'value_name_supply', data: {value: 50, modbus: VlxDevConstants.A_CYC_SUPP_FAN_TEST}},
                         extract: {txt: 'extract_air', data: {value: 50, modbus: VlxDevConstants.A_CYC_EXTR_FAN_TEST }}
                         */


                    },
                    heater: {
                        txt: 'menu_heater_test',
                        post: {
                            txt: 'postheating', data: {value: false, modbus: VlxDevConstants.A_CYC_IN_HEATER},
                            type: {
                                x: '', data: {value: 0, modbus: VlxDevConstants.EXT_CYC_POST_HEATER_TYPE},
                                list: [
                                    {x: ''},
                                    {txt: 'setting_value_electric'},
                                    {txt: 'setting_value_vkl'}
                                ]
                            }
                        },
                        extra: {
                            txt: 'preheating', data: {value: false, modbus: VlxDevConstants.A_CYC_IN_EXTRA_HEATER},
                            type: {
                                x: '', data: {value: 0, modbus: VlxDevConstants.EXT_CYC_EXTRA_HEATER_TYPE},
                                list: [
                                    {x: ''},
                                    {txt: 'setting_value_electric'},
                                    {txt: 'setting_value_vkl'},
                                    {txt: 'setting_value_mlv'}
                                ]
                            }
                        },
                        flap: {
                            txt: 'bypass_position', data: {value: 0, modbus: VlxDevConstants.A_CYC_IN_BYPASS},
                            list: [
                                {txt: 'winter'},
                                {txt: 'summer'}
                            ]
                        }
                    }
                },
                // Error log value is a list, where each item is an error object,
                // with the following properties:
                //   code: integer [0-19]. Maps to the log.messages
                //   times: integer. How many times the error has happened.
                //   severity: integer. Only mild (2) and severe (1) are shown.
                //   status: integer [0-2]. Passive, solved and active respectively.
                //   first: Moment. First appearance.
                //   latest. Moment. Latest appearance.
                // Hint is needed for JSON parsing.
                log: {
                    txt: 'menu_error_log', data: {
                        value: [], modbus: VlxDevConstants.EXT_CYC_FAULT_ARRAY,
                        hint: 'log'
                    },
                    first: {txt: '1st_appeared'},
                    times: {txt: 'times_appeared'},
                    latest: {txt: 'latest_appearance'},
                    severity: {txt: 'severity'},
                    status: {txt: 'status'},
                    severe: {txt: 'severe'},
                    mild: {txt: 'mild'},
                    active: {txt: 'active'},
                    solved: {txt: 'solved'},
                    passive: {txt: 'not_active'},

                    empty: {txt: 'web_no_errors'},

                    button: {txt: 'web_mark', data: {value: null}},
                    // When the user marks an error as solved, the value
                    // of acknowledge will be the error's index in the log list.
                    acknowledge: {
                        data: {
                            value: null,
                            modbus: VlxDevConstants.EXT_ERROR_SOLVED
                        }
                    },
                    // Error codes map to messages indexes
                    messages: [
                        // The index zero denotes OK in the device and as such
                        // should never be present in the error log. However, it
                        // needs to be included here for the other indexes to match.
                        {x: ''},
                        {txt: 'alarm_extract_stop'},  // 1
                        {txt: 'alarm_supply_stop'},   // 2
                        {txt: 'alarm_cell_frozen'},   // 3
                        {txt: 'alarm_temp_sensor1'},  // 4
                        {txt: 'alarm_temp_sensor2'},  // 5
                        {txt: 'alarm_temp_sensor3'},  // 6
                        {txt: 'alarm_temp_sensor4'},  // 7
                        {txt: 'alarm_temp_sensor5'},  // 8
                        {txt: 'alarm_filter'},        // 9
                        {txt: 'alarm_optional_temp_sensor'}, // 10
                        {txt: 'alarm_postheater'},           // 11
                        // todo: Identifier not yet in the TextMap.
                        // todo: After the TextMap has been updated change x to txt.
                        {x: 'alarm_water_heater_radiator_freeze_prevent'}  // 12
                    ]
                },
                defrost: {
                    txt: 'title_cell_defrost',

                    info: {txt: 'web_defrost'},
                    start: {txt: 'menu_start_defrost', data: {value: null}},
                    // Value (truthy/falsy) signals whether tests are currently running.
                    ongoing: {
                        txt: 'menu_defrosting', data: {
                            value: false,
                            modbus: VlxDevConstants.EXT_DEFROST_ON
                        }
                    }
                }
            },

            /**
             * Info page datamodel starts here
             */


            info: {
                txt: 'web_info',
                //
                status: {
                    txt: 'web_unit_status',

                    power: {txt: 'web_power', data: {value: true, modbus: VlxDevConstants.EXT_CYC_POWER}},
                    // The value is hours.
                    down: {txt: 'info_power_down', data: {value: 0, modbus: VlxDevConstants.EXT_CYC_CURRENT_UP_TIME}},
                    used: {
                        txt: 'info_txt_used_days',
                        data: {value: {years: 3, hours: 400}, modbus: VlxDevConstants.EXT_CYC_TOTAL_UP_TIME}
                    }
                },
                time: {txt: 'title_time_date'},
                // Note: The rest of time data is under wizard.start property.
                details: {
                    txt: 'web_details',
                    model: {txt: 'info_model', data: {value: '--', modbus: VlxDevConstants.A_CYC_MACHINE_MODEL}},

                    config: {
                        txt: 'web_config', data: {
                            // The value is an 8-digit integer array. The array item semantics:
                            // 0: serial number msw
                            // 1: serial number lsw
                            // 2: machine type
                            // 3: machine model
                            // 4: master password
                            // 5: configuration msw
                            // 6: configuration lsw
                            // 7: configuration checksum
                            // The default value passes the checksum check
                            value: [1, 1, 1, 1, 1, 1, 1, 7],
//                    value: [0,0,0,0,0,0,0,0,0],
                            modbus: VlxDevConstants.EXT_CYC_CONFIG_NUMBER
                        },
                        viewer: {x: 'XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XX'},

                        help: {txt: 'web_config_help'},

                        button: {txt: 'web_continue', data: {value: '', modbus: VlxDevConstants.EXT_CONFIG_BUTTON}}
                    },
                    serial: {
                        txt: 'info_serial_no',
                        data: {value: '--', modbus: VlxDevConstants.EXT_CYC_SERIAL_NUMBER}
                    },

                    type: {txt: 'info_type', data: {value: '--', modbus: VlxDevConstants.EXT_MACHINE_TYPE}}
                },

                diagnostics: {
                    txt: 'web_diagnostics',
                    software: {
                        txt: 'info_sw_version',
                        data: {value: '--', modbus: VlxDevConstants.EXT_CYC_APPL_SW_VERSION}
                    },
                    rh: {
                        txt: 'info_rh_sensors', data: {value: 0, modbus: VlxDevConstants.EXT_NUM_OF_RH_SENSORS},
                        sensors: _.map(_.flatten(['analog_sensor_input', _.range(6)]),
                            _.partial(sensor, 'rh'))
                    },
                    co2: {
                        txt: 'info_co2_sensors', data: {value: 0, modbus: VlxDevConstants.EXT_NUM_OF_CO2_SENSORS},
                        sensors: _.map(_.range(6), _.partial(sensor, 'co2'))
                    },
                    hand: {
                        txt: 'info_handedness', data: {value: 0, modbus: VlxDevConstants.A_CYC_SIDEDNESS},
                        list: [
                            {txt: 'value_handedness_left'},
                            {txt: 'value_handedness_right'}
                        ]
                    }
                }
            },

            /**
             * Dashboard datamodel starts here
             */


            dashboard: {
                txt: 'web_dashboard',
                // Note: some of the profile settings are under Wizard.
                // See the wizardProfile and dashboardProfile function definitions above.

                profile: {
                    txt: 'web_profiles',
                    data: {value: 0},
                    list: [
                        dashboardProfile('title_at_home'),
                        dashboardProfile('title_away'),
                        dashboardProfile('title_boost'),
                        dashboardProfile('menu_fire_place')
                    ],
                    // Currently active profile. Value is profile.list index.
                    active: {x: '', data: {value: 0, modbus: VlxDevConstants.EXT_CYC_ACTIVE_PROFILE}},
                    humidity: {
                        txt: 'info_txt_humidity',
                        data: {value: "--", modbus: VlxDevConstants.A_CYC_RH_VALUE}
                    },
                    co2: {
                        txt: 'info_txt_CO2',
                        data: {value: "--", modbus: VlxDevConstants.A_CYC_CO2_VALUE}
                    },
                    symbols: {
                        // The value range for each symbols is [0-2].
                        // Bigger value denotes "bigger" symbol.
                        fan: {x: '', data: {value: 0}},
                        rh: {x: '', data: {value: 2, modbus: VlxDevConstants.A_CYC_RH_LEVEL}},
                        co2: {x: '', data: {value: 2, modbus: VlxDevConstants.A_CYC_CO2_LEVEL}}
                    },
                    // Global fan speed.
                    fanspeed: {
                        txt: 'value_name_fan_speed',
                        data: {value: "--", unit: '%', modbus: VlxDevConstants.A_CYC_FAN_SPEED}
                    },
                    cell: {
                        txt: 'info_txt_cell_status', data: {value: 0, modbus: VlxDevConstants.A_CYC_CELL_STATE},
                        list: [
                            {txt: 'info_txt_value_heat'},
                            {txt: 'info_txt_value_cool'},
                            {txt: 'info_txt_value_bypass'},
                            {txt: 'melting'}
                        ]
                    }
                },

                now: {
                    txt: 'web_current_temperatures',
                    // Due to View limitations (item paths must be
                    // unique), we store labels differently.
                    indoor: {
                        x: '', data: {value: "--", modbus: VlxDevConstants.EXT_TEMP_NOW_EXTRACT_AIR},
                        label: {txt: 'indoor'}
                    },
                    outdoor: {
                        x: '', data: {value: "--", modbus: VlxDevConstants.EXT_TEMP_NOW_OUTDOOR_AIR},
                        label: {txt: 'outdoor'},
                        swoosh: {txt: 'content_out'}
                    },
                    supply: {
                        x: '', data: {value: "--", modbus: VlxDevConstants.EXT_TEMP_NOW_SUPPLY_AIR},
                        label: {txt: 'supply'},
                        swoosh: {txt: 'content_in'}
                    },
                    exhaust: {
                        x: '', data: {value: "--", modbus: VlxDevConstants.EXT_TEMP_NOW_EXHAUST_AIR},
                        label: {txt: 'exhaust'}
                    }
                },
                filter: {
                    txt: 'title_filter_status',
                    changed: {
                        txt: 'info_txt_filters_changed',
                        // Hint is needed for JSON parsing.
                        data: {
                            value: '--', modbus: VlxDevConstants.EXT_CYC_FILTER_CHANGED_DATE,
                            hint: 'moment'
                        }
                    },
                    // Next value is not used because it can be more
                    // reliably calculated from changed and interval.
                    // However, the value is needed to force the recalculation
                    // by its Viewers.
                    next: {txt: 'info_txt_next_reminder', data: {value: ''}},
                    reminder: {txt: 'info_txt_filters'},
                    interval: {
                        txt: 'info_txt_reminder_interval',
                        data: {
                            value: '--', modbus: VlxDevConstants.EXT_FILTER_CHANGE_INTERVAL,
                            min: 1, max: 12
                        }
                    },
                    months: {txt: 'info_txt_months'},
                    // Ad text is a separate entry, so we can easily
                    // manipulate it in the viewer.
                    ad: {txt: 'info_txt_order_filters'}
                },

                // The actual sensors are under info.diagnostics
                sensordata: {txt: 'web_sensors'},
                graphs: {
                    txt: 'menu_temps_sensors',
                    refresh: {txt: 'web_refresh', data: {value: 0, modbus: VlxDevConstants.EXT_REFRESH_GRAPHS}}
                },
                week: {
                    txt: 'menu_week_clock', data: {value: true, modbus: VlxDevConstants.A_CYC_WEEKLY_TIMER_ENABLED},
                    clear: {txt: 'remove_all_items', data: {value: '', modbus: VlxDevConstants.EXT_CLEAR_WEEK_EVENTS}},
                    confirmation: [
                        {txt: 'query1_w_c_remove'},
                        {txt: 'query2_w_c_remove'},
                        {txt: 'query3_w_c_remove'}
                    ],
                    // Value only signals when the week display
                    // has changed. Marks contains the actual
                    // profile markings: {time: profile},
                    // where time is of format 'HH:mm d' and
                    // profile is 'home', 'away' or 'boost'.
                    // Hint is used by REST.
                    cells: {
                        x: '',
                        data: {value: null, marks: {}, modbus: VlxDevConstants.EXT_CYC_WEEKLY_EVENTS, hint: 'weekcells'}
                    },
                    oldcells: {data: {marks: {}, modbus: VlxDevConstants.EXT_CYC_OLD_WEEKLY_EVENTS}}

                }
            },


            // ------------------------------------------------------------
            // Settings
            // Some of the properties are under wizard.access.
            // ------------------------------------------------------------
            settings: {
                grantaccess: {
                    title: {txt: 'web_grant_access'},
                    editor: {
                        data: {
                            value: '',
                            valid: false,
                            modbus: VlxDevConstants.EXT_GRANT_ACCESS_EMAIL
                        }
                    },
                    sendbutton: {
                        txt: 'web_send_email',
                        data: {
                            value: '',
                            url: '/api/grantaccess/',
                            modbus: VlxDevConstants.EXT_GRANT_ACCESS_SEND
                        }
                    },
                    emailvalid: {
                        data: {
                            value: false,
                            modbus: VlxDevConstants.EXT_GRANT_ACCESS_EMAIL_VALID
                        }
                    },
					sendaccessrequest: {
                        data: {
                            value: '',
                            url: '/api/grantaccess/'
                        }
					},
					removeaccess: {
                        // TODO localize
                        txt: 'web_remove_access',
                        data: {
                            value: '',
                            url: '/api/grantaccess/'
                        }
					}
                },
                enterpin: {
                    title: {txt: 'title_lock_code'}
                },
                changepin: {
                    title: {txt: 'web_change_lock_code'},

                    oldpin: {txt: 'web_enter_old_code', data: {value: ''}},
                    newpin: {txt: 'web_enter_new_code', data: {value: ''}},
                    newpin2: {txt: 'web_enter_new_code_again', data: {value: '',modbus: VlxDevConstants.EXT_LC_CHANGED}}

                },

                pin: {x: '', data: {value: '0000'}},

                unlock: {txt: 'web_unlock', data: {value: ''}},
                // The value is copied from pin when the unlock is clicked.
                login: {x: '', data: {value: '', modbus: VlxDevConstants.EXT_SERVICE_MODE}},
                // The value is either accepted, denied or enabled.
                response: {x: '', data: {value: 'enabled'}},
                pinchanged: {x: '', data: {value: 0}}
            },
            // If value is non-empty, the note is shown.
            // If data.html is false, the text is escaped.
            //
            note: {
                txt: 'web_info',
                data: {
                    value: '', modbus: VlxDevConstants.EXT_INFOBANNER_CONTENT,
                    html: false,
                    hint: 'info_note'
                }
            },
            // Cloud demo. Subject to major changes in the future.
            cloud: {
                //status if device connected to cloud; 2 equals success; 0 offline
                //connection status
                connectionstatus: {
                    data: {
                        value: true,
                        modbus: VlxDevConstants.EXT_CLOUD_CONNECTION_STATUS
                    }
                },
                txt: 'web_cloud_service',
                //text for textfield used in dashboard.js -> uiDefs.settings.cloud
                notconnected: {txt: 'web_no_cloud_connection'},
                //text for textfield used in dashboard.js -> uiDefs.settings.cloud
                connected: {txt: 'web_cloud_connection_active'},

                connecting: {
                    //Connecting... (button should be disabled)
                    txt: 'web_cloud_connecting_button',//'web_cloud_connecting_button',
                    message: {
                        //Trying to connect to server
                        txt: 'web_cloud_connecting_message',//'web_cloud_connecting_message'
                    },
                    data: {
                        //needs to be added to trigger  visibility function for this button
                    }
                },
                fail: {
                    //Could not connect to server
                    txt: 'web_cloud_fail_button',//'web_cloud_fail_button',
                    message: {
                        //Retry button
                        txt: 'web_cloud_fail_message'//'web_cloud_fail_message'
                    },
                    data: {
                        value: '',
                        url: '',//brand specific url is created at button click

                        //triggers iowebdatatodevice.js case VlxDevConstants.EXT_CLOUD_CONNECT:
                        modbus: VlxDevConstants.EXT_CLOUD_CONNECT
                    }
                },
                prepareupdate: {
                    //Could not connect to server
                    txt: 'web_cloud_oldsw_button',//'web_cloud_fail_button',
                    message: {
                        //Retry button
                        txt: 'web_cloud_oldsw_message' //'web_cloud_fail_message'
                    },
                    data: {

                    }
                },
                update: {
                    //Could not connect to server
                    txt: 'web_cloud_update_button',//'web_cloud_fail_button',
                    message: {
                        //Retry button
                        txt: 'web_cloud_update_message',//'web_cloud_fail_message'
                    },
                    data: {

                    }
                },





                //cloud_offline

                //cloud_online

                //cloud_sw_ver_old

                //cloud_sw_updating

                connect: {
                    // text for connect button
                    txt: 'web_connect_to_cloud',
                    data: {
                        value: '',
                        url: '',//brand specific url is created at button click

                        //triggers iowebdatatodevice.js case VlxDevConstants.EXT_CLOUD_CONNECT:
                        modbus: VlxDevConstants.EXT_CLOUD_CONNECT
                    }

                },
                disconnect: {
                    //text for disconnect button
                    txt: 'web_disconnect_from_cloud',
                    data: {
                        value: '',

                        //triggers iowebdatatodevice.js case VlxDevConstants.EXT_CLOUD_DISCONNECT:
                        modbus: VlxDevConstants.EXT_CLOUD_DISCONNECT,
                        hidden: true
                    }
                },
                errornotes: {
                    duplicate_email: {
                        title: {x: 'Access error'},
                        content: {x: 'User already exists!'}
                    },
                    invalid_email: {
                        title: {x: 'Access error'},
                        content: {x: 'Invalid email!'}
                    },
                    invalid_uid: {
                        title: {x: 'Access error'},
                        content: {x: 'Invalid device ID!'}
                    },
                    server_error: {
                        title: {x: 'Access error'},
                        content: {x: 'Something went wrong!'}
                    }

                },
                accessrights: {
                    data: {value: [], modbus: VlxDevConstants.EXT_ACCESSRIGHTS_ARRAY}
                },
                user: {
                    txt: 'web_cloud_user',
                    data: {value: 'jotain', hidden: true, modbus: VlxDevConstants.EXT_USERNAME}
                },
                // Model parts only used by the Cloud Web UI.
                ui: {
                    devices: {
                        data: {value: [],modbus: VlxDevConstants.EXT_GRANT_ACCESS_EMAIL_LIST},
                        // Currently active deviceId.
                        activeid: {data: {value: null}}
                    }
                },
                account:  {
                    txt: 'web_account'
                },
                signout: {
                    txt: 'web_signout'
                }
            }
        };

        function path2obj(s) {
            var path = s.split(/[\.]/);
            var obj = _.reduce(path, function (acc, v) {
                return acc[v];
            }, dictionary);
            if (!obj) {
                throw new Error('Invalid L10n path: ' + s);
            }
            return obj;
        }

        function find(search, node, key) {
            if (key == 'data') {
                if (node[search.key] + '' == search.value) {
                    search.found = true;
                    // Returning false terminates _.forOwn
                    return false;
                }
            }
            else {
                // Since we are not in a data node and the
                // target has not yet been found, let's dig
                // deeper with recursion.
                _.forOwn(node, _.partial(find, search));
                if (search.found) {
                    if (key != null) {
                        search.path.push(key);
                    }
                    return false;  // terminates _.forOwn
                }
            }
        }

        // Using fine granularity guarantees the correct time
        // within seconds.
        var deltaGranularity = 'milliseconds';

        // Delta is a difference from th current time.
        // Note: delta is subtracted from the current time.
        function delta2moment(delta) {
            return moment().subtract(delta, deltaGranularity);
        }

        // Calculating the delta between the given Moment and the
        // current time.
        function moment2delta(m) {
            return moment().diff(m, deltaGranularity);
        }

        function register(fun, path) {
            dataListeners[path] = dataListeners[path] || [];
            dataListeners[path].push(fun);
//            console.log("Listener path:" + path);
        }

        // Data model bootstrapping.
        // Make sure that 'moment' and 'wizard.start.time'
        // are in sync.
        var syncMeta = {};

        function syncTimes(path, data, meta) {
            if (meta != syncMeta) {
                if (path == 'moment') {
                    if (moment.isMoment(data.value) && data.value.isValid()) {
                        L10n.value('wizard.start.time',
                            moment2delta(data.value), syncMeta);
                    } else {
                        console.error('Bad Moment: ' + data.value);
                    }
                } else {
                    L10n.value('moment', delta2moment(data.value), syncMeta);
                }
            }
        }

        register(syncTimes, 'moment');
        register(syncTimes, 'wizard.start.time');

        return {
            dictionary: function () {
                return dictionary;
            },
            // Registers a listener function.
            // L10n supports simple
            // registering and calling convention:
            //    Contents of path data changed.
            //    register( fun, path ) -> fun( path, data )
            //    triggered by data function
            // Note: special path '*' attaches the listener
            // to _every_ path.
            register: register,
            //  Unregistering listener function.
            unregister: function (fun, path) {
                _.pull(dataListeners[path], fun);
            },
            // Returns the (current) localisation for given path.
            // Both of the following work:
            // L10n.str( L10n.dictionary().wizard.start.language );
            // L10n.str( 'wizard.start.language' );
            // Note: the function name is a little bit misleading, since
            // the result can be of any type.
            str: function (obj) {

                if (obj == null) {

//                    console.log("L10n.str warning: Object is null");
                    return "";

                }

                var entry = obj;
                if (_.isString(obj)) {
                    entry = path2obj(obj);
                }
                // Current language
                var cid = path2obj('language').data.value;
                if (entry.txt) {
                    var txt = TextMap['id_text_' + entry.txt];
                    if (_.isUndefined(txt)) {
                        console.error('Invalid TextMap id: ' + entry.txt);
                        return ''
                    }
                    return txt[_.indexOf(languages, cid)];
                }
                // Current language index
                return txt || entry[cid] || entry.x;
            },
            /**
             *
             * @param obj
             * @returns {*}
             */
            locStr: function (aTextmapId) {

                var result='';

                // Current language
                var cid = path2obj('language').data.value;
                if (aTextmapId) {
                    var txt = TextMap[aTextmapId];
                    if (_.isUndefined(txt)) {
                        console.error('Invalid TextMap id: ' + aTextmapId);
                        result='';
                    } else {
                        result = txt[_.indexOf(languages, cid)];
                    }
                }
                return result;

            },
            // Returns/modifies the data object for given path.
            // If data argument is given, its contents are _assigned_
            // to old path data. Thus, the fields not present in data
            // are not affected.
            // However, if the given data _only_ has value property, it is
            // compared to old value. The comparison is done between
            // string representations for non-objects.
            // Arguments:
            // path: Node path string
            // data: Data to be merged in the old data (must be object!).
            // meta: If present, meta argument will be passed as is to the
            //       registered listeners.
            data: function (path, data, meta) {
                if (!( _.isUndefined(data) || _.isObject(data) )) {
                    throw new Error('Data is not object: ' + data);
                }
                var old = path2obj(path).data;
                if (!_.isUndefined(data)) {
                    if (_.has(data, 'value')
                        && _.keys(data).length == 1) {
                        var equality = _.isObject(data.value)
                            ? _.isEqual(data.value, old.value)
                            : _.isEqual("" + data.value, '' + old.value);
                        if (equality) {
//                            console.log('No change to ' + path);
                            return;
                        }
                    }
                    _.assign(old, data);
                    // We must clone the listener array before notifications,
                    // since the listeners must be able to register/unregister.
                    _.each(_.clone(dataListeners[path]), function (fun) {
                        fun(path, old, meta);
                    });
                    // Global listeners
                    _.each(_.clone(dataListeners['*']), function (fun) {
                        fun(path, old, meta);
                    });
//                    console.log('Data changed: ' + path + ' -> ' + JSON.stringify(old));
                } else {
                    return old;
                }
            },
            // Convenience shorthand function for data function.
            // value( path ) -> data( path ).value
            // value( path, value ) -> data( path, {value: value} )
            // value( path, value, meta ) -> data( path, {value: value}, meta )
            value: function (path, value, meta) {
                if (_.isUndefined(value)) {
                    var data = this.data(path);
                    return _.isNull(data) ? null : data.value;
                } else {
                    this.data(path, {value: value}, meta);
                }
            },
            // Returns the node for the given path.
            // The node is parent for data and localizations.
            node: function (path) {
                return path2obj(path)
            },
            // Searches the node whose data property
            // contains key: value -property.
            // In order to avoid false negatives, the
            // comparison is done between string representations
            // of values.
            // Returns the path or null.
            find: function (key, value) {
                var search = {key: key, value: value + '', found: false, path: []};
                if (!_.isUndefined(value)) {
                    find(search, dictionary, null);
                }
                return search.found ? search.path.reverse().join('.') : null;
            },
            // Returns true if the given language ID is one of the
            // supported languages.
            // langId: Must be "canonical" Moment ID.
            isSupportedLanguage: function (langId) {
                return languages.indexOf(langId) >= 0;
            },
            // Delta is a difference from th current time.
            // Note: delta is subtracted from the current time.
            // This is public due to TimeEditor (in Dashboard).
            delta2moment: delta2moment,
            // Calculating the delta between the given Moment and the
            // current time.
            // This is public due to TimeEditor (in Dashboard).
            moment2delta: moment2delta,
            // Populates service.log with random error entries.
            // count: Number of entries to generate.
            // Note: Use only for testing!
            generateErrorLog: function (count) {
                var maxCode = L10n.node('service.log.messages').length - 1;
                L10n.value('service.log',
                    _.map(_.range(count), function (i) {
                        return {
                            code: _.random(1, maxCode),
                            times: _.random(10),
                            severity: _.random(3),
                            status: _.random(2),
                            first: moment().subtract(_.random(20), 'days'),
                            latest: moment().subtract(_.random(24), 'hours')
                        }
                    }));
            }
        }
    }();

(function() {(window["JST"] = window["JST"] || {})["configurationform"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="dashboard-tray">\n    <h1>' +
__e( L10n.str( 'info.details.config' ) ) +
'</h1>\n    <div class="wizard-hr"></div>\n    ' +
__e( L10n.str( 'info.details.config.help' ) ) +
'\n    <div class="dashboard-view-placeholder" dashboard="configconfig"></div>\n    <div class=\'dashboard-align-center\' id="config-error-text"></div>\n</div>\n<div id="config-continue-button" class="dashboard-view-placeholder" dashboard="configcontinue"></div>';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["configurationpage"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 // Configuration has its own page definition to make
   // sure that the "global" selectors in initializeDashboard
   // do not affect it. ;
__p += '\n<div data-role="header" data-tap-toggle="false" data-transition="none"\n     class="dashboard-header" data-theme="none">\n    <div class="ui-disabled configuration-header"></div>\n</div>\n<div data-role="content" class="ui-content dashboard-content">\n<div class="configuration-panel" ></div>\n<div class="dashboard-box-margin">\n    <div class="dashboard-box">\n        <div class="dashboard-form"></div>\n    </div>\n</div>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardcell"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var fmt = L10n.value( 'wizard.start.twentyfour' ) ? 'ddd HH:mm' : 'ddd h:mm a';
   var  title = sprintf( "%s: %s",
        time.locale( L10n.value( 'language' ) ).format( fmt ),
        L10n.str( 'wizard.expert.profiles.' + profile ) ); ;
__p += '\n<div class="dashboard-cell-' +
((__t = ( profile )) == null ? '' : __t) +
'" dashboard="' +
((__t = ( profile )) == null ? '' : __t) +
'"\n        title="' +
__e( title ) +
'" ></div>';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardcloudpanel"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var devices = L10n.value( 'cloud.ui.devices' );
   var accessDevices = L10n.value( 'cloud.accessrights' );
   var activeId = L10n.value( 'cloud.ui.devices.activeid' );

    //console.log( "accessDevices: ", JSON.stringify(accessDevices));
    //console.log( "devices: ", JSON.stringify(devices));

;
__p += '\n<div class="dashboard-cloud-device-headline">My Devices</div>\n';

   _.each( devices, function( device ) {
        var cls = [
           device.deviceid == activeId ? 'dashboard-cloud-device-active' : '',
           device.online ? 'dashboard-cloud-device-online' : 'ui-disabled device-offline'].join( ' ' );
;
__p += '\n\n<div class="dashboard-cloud-device ' +
((__t = ( cls )) == null ? '' : __t) +
'" dashboard="' +
((__t = ( device.deviceid )) == null ? '' : __t) +
'">\n    <div class="device-name">\n        <a target="_top" href=\'/cloudui/index.html?deviceid=' +
__e(device.deviceid) +
'\'>' +
__e( device.name ) +
'</a>\n    </div>\n</div>\n';
 } );


if( accessDevices.length > 0) {

;
__p += '\n<div class="dashboard-cloud-gap"></div>\n<div class="dashboard-cloud-device-headline">My Visitor Devices</div>\n';


_.each( accessDevices, function( device ) {
        var cls = [
           device.deviceid == activeId ? 'dashboard-cloud-device-active' : '',
           device.online ? 'dashboard-cloud-device-online' : 'ui-disabled device-offline'].join( ' ' );
;
__p += '\n<div class="dashboard-cloud-device ' +
((__t = ( cls )) == null ? '' : __t) +
'" dashboard="' +
((__t = ( device.deviceid )) == null ? '' : __t) +
'">\n    <div class="device-name">\n        <a target="_top" href=\'/cloudui/index.html?deviceid=' +
__e(device.deviceid) +
'\'>' +
__e( device.name ) +
'</a>\n    </div>\n</div>\n';

    } );
}
;
__p += '\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboarddashboardform"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="dashboard-mobile-title">\n    ' +
__e( L10n.str( 'dashboard' ) ) +
'\n</div>\n\n<div class="dashboard-note-placeholder"></div>\n\n<div class="dashboard-tray" id="profiletext">\n\n    <h1>' +
__e( L10n.str( 'dashboard.profile' ) ) +
'</h1>\n    <div class="wizard-hr"></div>\n    <div class="dashboard-controls">\n        <div class="dashboard-left">\n            <div id="profileradios">\n                ' +
((__t = ( JST.dashboardprofileradios() )) == null ? '' : __t) +
'\n            </div>\n        </div>\n        <div class="dashboard-right">\n            <div class="dashboard-profile">\n                <div class="dashboard-profile-stack">\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                     dashboard="hometext" profile="0"></div>\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                         dashboard="awaytext" profile="1"></div>\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                         dashboard="boosttext" profile="2"></div>\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                         dashboard="fireplacetext" profile="3"></div>\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                         dashboard="homeactivate" profile="0"></div>\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                         dashboard="awayactivate" profile="1"></div>\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                         dashboard="boostactivate" profile="2"></div>\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                         dashboard="fireplaceactivate" profile="3"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="dashboard-controls">\n    <div class="dashboard-right">\n        <div class="dashboard-tray" id="profilesymbols">\n            <h2 class="dashboard-h2">' +
__e( L10n.str( 'info' ) ) +
'</h2>\n            <div class="dashboard-profile">\n                <div class="dashboard-profile-left">\n                    <div class="dashboard-profile-visuals" id="swoosh">\n                        <div class="dashboard-visual-left">\n                            <div class="dashboard-view-placeholder" dashboard="leftvisual"></div>\n                        </div>\n                        <div class="dashboard-visual-center">\n                        </div>\n                        <div class="dashboard-visual-right">\n                            <div class="dashboard-view-placeholder" dashboard="rightvisual"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dashboard-profile-right">\n                    <div class="dashboard-profile-icons">\n                        <div class="dashboard-profile-icons-stack"\n                             id="fan"></div>\n                        <div class="dashboard-profile-icons-left"\n                             id="rh"></div>\n                        <div class="dashboard-profile-icons-right"\n                             id="co2"></div>\n                    </div>\n                </div>\n                <div class="dashboard-profile-stack">\n                    <p></p>\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                         dashboard="homepic" profile="0"></div>\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                         dashboard="awaypic" profile="1"></div>\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                         dashboard="boostpic" profile="2"></div>\n                    <div class="dashboard-hide dashboard-view-placeholder"\n                         dashboard="fireplacepic" profile="3"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="dashboard-left">\n        <div class="dashboard-tray">\n            <h2 class="dashboard-h2">' +
__e( L10n.str( 'dashboard.now' ) ) +
'</h2>\n            <div class="dashboard-now">\n                <div class="dashboard-now-left">\n                    <div class="dashboard-view-placeholder" dashboard="nowleft"></div>\n                </div>\n                <div class="dashboard-now-center">\n                    <div class="dashboard-temperature-icon"></div>\n                </div>\n                <div class="dashboard-now-right">\n                    <div class="dashboard-view-placeholder" dashboard="nowright"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="dashboard-left">\n        <div class="dashboard-tray dashboard-view-placeholder" dashboard="filter"></div>\n    </div>\n    <div class="dashboard-right">\n        <div class="dashboard-tray dashboard-view-placeholder" dashboard="sensordata"></div>\n    </div>\n</div>\n\n\n<div class="dashboard-tray" id=\'dashboard-graphs\'>\n    <div class="dashboard-editor-h1">' +
__e( L10n.str( 'dashboard.graphs' ) ) +
'</div>\n    <div class="dashboard-view-placeholder" dashboard="graphbuttons"></div>\n    <div class="dashboard-hr"></div>\n    <div class="dashboard-controls">\n        ';
 if(opts.cloud) { ;
__p += '\n            <div class=\'dashboard-graph-controls\'>\n                <button data-role="button" href="#"\n                   class="ui-link ui-btn ui-shadow ui-corner-all graph-button" role="button" id=\'graphPrev\'\n                   onclick="javascript:Communication.graphButtonClicked(\'prev\');">' +
__e( L10n.locStr('id_text_web_cloud_graph_previous')) +
'</button>\n                <button data-role="button" href="#"\n                   class="ui-link ui-btn ui-shadow ui-corner-all graph-button" role="button" id=\'graph-day\'\n                   onclick="javascript:Communication.graphButtonClicked(\'day\');">' +
__e( L10n.locStr('id_text_web_cloud_graph_day')) +
'</button>\n                <button data-role="button" href="#" class="ui-link ui-btn ui-shadow ui-corner-all graph-button" role="button" id=\'graph-week\'\n                   onclick="javascript:Communication.graphButtonClicked(\'week\');">' +
__e( L10n.locStr('id_text_web_cloud_graph_week')) +
'</button>\n                <button data-role="button" href="#" class="ui-link ui-btn ui-shadow ui-corner-all graph-button selected" role="button" id=\'graph-month\'\n                   onclick="javascript:Communication.graphButtonClicked(\'month\');">' +
__e( L10n.locStr('id_text_web_cloud_graph_month')) +
'</button>\n                <button data-role="button" href="#" class="ui-link ui-btn ui-shadow ui-corner-all graph-button" role="button" id=\'graph-all\'\n                   onclick="javascript:Communication.graphButtonClicked(\'all\');">' +
__e( L10n.locStr('id_text_web_cloud_graph_all')) +
'</button>\n                <button data-role="button" href="#"\n                   class="ui-link ui-btn ui-shadow ui-corner-all graph-button" role="button" id=\'graphNext\' disabled\n                   onclick="javascript:Communication.graphButtonClicked(\'next\');">' +
__e( L10n.locStr('id_text_web_cloud_graph_next')) +
'</button>\n            </div>\n        ';
 } ;
__p += '\n    </div>\n    <div id="chart1" style="width:100%; height:400px;"></div>\n    <div class="dashboard-controls chart-legend">\n        <div class="dashboard-align-center">\n            <div id="chartlegends"></div>\n        </div>\n    </div>\n     ';
 if(opts.cloud) { ;
__p += '\n        <div class="dashboard-controls">\n            <div class="dashboard-right">\n                <a data-role="button" href="/api/export/logs/' +
__e( L10n.value( 'cloud.ui.devices.activeid' ) ) +
'" target="_blank"\n                   class="ui-link ui-btn ui-shadow ui-corner-all graph-button" role="button" id=\'exportCSV\' style="float:right;">\n                    ' +
__e( L10n.locStr('id_text_web_cloud_graph_export')) +
'</a>\n            </div>\n        </div>\n     ';
 } ;
__p += '\n</div>\n\n<div class="dashboard-tray">\n    <div class="dashboard-view-placeholder" dashboard="weekclock"></div>\n    <div class="dashboard-hr"></div>\n<div id="weekclock">\n  <div class="dashboard-week">\n   ';
 var sideFormat = L10n.value( 'wizard.start.twentyfour' ) ? 'HH:mm' : 'h:mm a';
      var m = moment().locale( L10n.value( 'language' ) );
      _.each( _.range( 1, 8 ), function( i ) {
        m.day( i % 7 );
      ;
__p += '\n   <div class="dashboard-week-' +
((__t = ( i )) == null ? '' : __t) +
' dashboard-week-header">\n        ' +
__e( m.format( 'dddd' ) ) +
'\n   </div>\n   ';
 } ) ;
__p += '\n   </div>\n   ';
 m.minutes( 0 );
    _.each( _.range( 24 ), function( h ) {
        m.hours( h ); ;
__p += '\n        <div class="dashboard-day-hour dashboard-week-side" dashboard-time="' +
__e( m.format( 'HH:mm' ) ) +
'">\n           ' +
__e( m.format( sideFormat ) ) +
'\n        </div>\n        <div class="dashboard-week">\n        ';
 _.each( _.range( 1, 8 ), function( i ) {
            m.day( i % 7 ) ;
__p += '\n            <div class="dashboard-limit-0 dashboard-week-' +
((__t = ( i )) == null ? '' : __t) +
' dashboard-week-cell"\n                 dashboard-time="' +
__e( m.format( 'HH:mm d' ) ) +
'">\n            </div>\n        ';
 } ) ;
__p += '\n        </div>\n     ';
 } ) ;
__p += '\n    <div class="dashboard-limit-0">\n    <div class="ui-disabled dashboard-view-placeholder"\n         dashboard="clearweek" id="clearweek"></div>\n    </div>\n</div>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboarddialog"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="dashboard-dialog">\n    <div class="dashboard-dialog-header">\n        <div class="dashboard-dialog-header-title">\n            <div class="dashboard-dialog-title"><p>' +
__e( L10n.str( title ) ) +
'</p></div>\n        </div>\n        <div class="dashboard-dialog-header-buttons">\n            <div class="dashboard-dialog-ok"></div>\n            <div class="dashboard-dialog-cancel"></div>\n        </div>\n    </div>\n    ' +
((__t = ( JST.dashboarditems( arguments[0] ) )) == null ? '' : __t) +
'\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboarderroritem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var status = ['passive', 'active', 'solved']; ;
__p += '\n<div class="dashboard-error-text">\n    ' +
__e( L10n.str( 'service.log.messages.' + item.code ) ) +
'\n</div>\n<div class="dashboard-error-status" dashboard="' +
((__t = ( index )) == null ? '' : __t) +
'">\n    ' +
__e( L10n.str( 'service.log.' + status[item.status] ) ) +
'\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboarderrorlog"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n   ';
 var empty = true;
      _.each( errors, function( err, index ) {
        // Only mild (2) and severe (1) errors are shown. Index is still "real".
        if( err.severity == 1 || err.severity == 2 ) {
           if( empty ) {
    ;
__p += '\n   <div data-role="collapsible-set" data-inset="false"\n        data-icon="" data-iconpos="">\n   ';
 }
           empty = false;

   ;
__p += '\n      <div class="dashboard-error-item" data-role="collapsible" data-collapsed="true">\n        <h4>' +
((__t = ( JST.dashboarderroritem( {item: err, index: index} ) )) == null ? '' : __t) +
'</h4>\n        <div class="dashboard-limit-1 dashboard-editor-items">\n            ';
 _.each( properties, function( prop ) { ;
__p += '\n            <div class="dashboard-editor-left">\n                ' +
__e( L10n.str( 'service.log.' + prop ) ) +
'\n            </div>\n            <div class="dashboard-editor-right">\n                ' +
((__t = ( htmlFuns[prop]( {value: err[prop]} ) )) == null ? '' : __t) +
'\n            </div>\n            ';
 } ) ;
__p += '\n            <div class="dashboard-editor-left"></div>\n            ';

            var btnCls = '';
            if (err.status == 2) {
                btnCls='ui-disabled';
            }

            ;
__p += '\n            <div class="dashboard-editor-right"><a href="#" data-role="button" errorindex="' +
((__t = ( index )) == null ? '' : __t) +
'"\n                                                   class="' +
((__t = ( btnCls )) == null ? '' : __t) +
'" >\n                ' +
__e( L10n.str( 'service.log.button' ) ) +
'\n            </a></div>\n        </div>\n      </div>\n    ';
 } } ) ;
__p += '\n    ';
 if( empty ) { ;
__p += '\n        <div class="dashboard-no-errors">' +
__e( L10n.str( 'service.log.empty' ) ) +
'</div>\n    ';
 } else { ;
__p += '\n        </div>\n    ';
 } ;
__p += '\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboarderrornote"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="dashboard-base-note">\n    <div class="dashboard-popup-title"><p>' +
__e( title ) +
'</p></div>\n    <div>\n        <div class="dashboard-error-note-image"></div>\n        ' +
__e( text ) +
'\n    </div>\n    <a href="#" data-role="button"><div class="dashboard-base-note-button">OK</div></a>\n</div>\n\n\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardexpertform"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="dashboard-mobile-title">\n    ' +
__e( L10n.str( 'expert' ) ) +
'\n</div>\n\n<div class="dashboard-note-placeholder"></div>\n\n<div class="dashboard-limit-1 dashboard-controls">\n    <div class="dashboard-left-first">\n        <div class=" dashboard-tray dashboard-view-placeholder" dashboard="fan"></div>\n    </div>\n    <div class="dashboard-right">\n        <div class="dashboard-tray dashboard-view-placeholder" dashboard="sensors"></div>\n    </div>\n    <div class="dashboard-left">\n        <div class="dashboard-tray dashboard-view-placeholder" dashboard="antifreeze"></div>\n    </div>\n    <div class="dashboard-right">\n        <div class="dashboard-tray dashboard-view-placeholder" dashboard="modbus"></div>\n    </div>\n</div>\n\n<div class="dashboard-limit-1 dashboard-tray">\n<h2 class="dashboard-h2">' +
__e( L10n.str( 'expert.io' ) ) +
'</h2>\n\n<div class="dashboard-controls">\n    <div class="dashboard-left">\n    ';
 _.each( ['analog', 'digital1', 'digital2'], function( input ) {
        var path = 'expert.io.inputs.' + input;
        var list = /([a-z]+)/.exec( input )[1]
        var cls = input == 'analog' ? 'dashboard-io-active' : '';
    ;
__p += '\n        <div class="dashboard-io-left">\n        <div class="dashboard-io-button ' +
((__t = ( cls )) == null ? '' : __t) +
'" dashboard="' +
((__t = ( input )) == null ? '' : __t) +
'">\n            <p><span class="dashboard-io-input">' +
__e( L10n.str( path ) ) +
'</span><br>\n                <span class="dashboard-io-selection" l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'">\n                    ' +
__e( L10n.str( 'expert.io.' + list + '.' + L10n.data( path ).value ) ) +
'\n                </span>\n            </p>\n        </div>\n        </div>\n     ';
 } ) ;
__p += '\n    </div>\n    <div class="dashboard-right">\n        ';
 _.each( ['analog', 'digital1', 'digital2'], function( input ) {
            var selected = L10n.data( 'expert.io.inputs.' + input ).value;
            var list = /([a-z]+)/.exec( input )[1]
            var cls = input != 'analog' ? 'dashboard-hide' : '';
        ;
__p += '\n        <div class="dashboard-io-radiogroup ' +
((__t = ( cls )) == null ? '' : __t) +
'" dashboard="' +
((__t = ( input )) == null ? '' : __t) +
'">\n            ';
 _.each( L10n.node( 'expert.io.' + list ),
                       function( radio, index ) {
            ;
__p += '\n            <div class="' +
((__t = ( index == selected ? 'dashboard-io-radioactive' : 'dashboard-io-radio' )) == null ? '' : __t) +
'"\n                 dashboard="' +
((__t = ( index )) == null ? '' : __t) +
'">\n                <p><span class="dashboard-io-radio-input">' +
__e( L10n.str( radio ) ) +
'</span>\n                    ';
 if( radio.programmed ) { ;
__p += '\n                    <span class="dashboard-edit"></span>\n                    ';
 } ;
__p += '\n                    <br>\n                   <span class="dashboard-io-radio-range">' +
((__t = ( L10n.str( radio.range ) )) == null ? '' : __t) +
'</span>\n                </p>\n            </div>\n            ';
 } ) ;
__p += '\n        </div>\n        ';
 } ) ;
__p += '\n        <!-- Dialog -->\n        <div class="dashboard-dialog-placeholder" dashboard=\'programmed\'></div>\n    </div>\n</div>\n</div>\n\n<div class="dashboard-limit-1 dashboard-controls">\n    <div class="dashboard-left">\n        <div class="dashboard-tray dashboard-view-placeholder" dashboard=\'relay\'></div>\n    </div>\n    ';
 if( !opts.cloud ) { ;
__p += '\n    <div class="dashboard-right">\n        <div class=" dashboard-tray dashboard-view-placeholder"\n             dashboard="confignumber" id="confignumber"></div>\n    </div>\n    ';
 } ;
__p += '\n    <div class="dashboard-right">\n        <div class="dashboard-tray dashboard-view-placeholder" dashboard="settings"></div>\n    </div>\n    ';
 var parentalSide = opts.cloud ? 'right' : 'left'; ;
__p += '\n    <div class="dashboard-' +
((__t = ( parentalSide )) == null ? '' : __t) +
'">\n        <div class=" dashboard-tray dashboard-view-placeholder" dashboard="parental"></div>\n    </div>\n</div>\n\n<!-- Testing stuff, will be removed -->\n<!--<div data-role="collapsible"><h3>Miscellaneous testing stuff</h3>-->\n<!--<div class="wizard-hr"></div>-->\n\n<!-- todo: Make sure this is removed before release. -->\n<!--<div class="dashboard-view-placeholder" dashboard=\'viewtest\'></div>-->\n<!--</div>-->\n<!--<div class="wizard-hr"></div>-->\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardheader"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if( Communication ) { ;
__p += '\n    <a href="/account" class=\'home_link\' target=\'_top\'></a>\n';
 } ;
__p += '\n';
 var pages = { a: 'dashboard', b: 'info', c: 'service', d: 'expert' } ;
__p += '\n<div class="dashboard-navigation dashboard-header-navigation">\n    ';
 _.each( 'abcd', function( p ) {
        var cls = current == pages[p] ? 'dashboard-current' : '';
        if( p == 'd' ) { ;
__p += '\n        <div class="dashboard-limit-1">\n     ';
 }
        if( !cls ) {
    ;
__p += '\n        <a href="#dashboard-' +
((__t = ( pages[p] )) == null ? '' : __t) +
'-page">\n     ';
 } ;
__p += '\n        <div class="dashboard-nav-' +
((__t = ( p )) == null ? '' : __t) +
' dashboard-nav ' +
((__t = ( cls )) == null ? '' : __t) +
'">\n             <p>\n                 <span class="dashboard-nav-text">' +
__e( L10n.str( pages[p] ) ) +
'</span>\n             </p>\n        </div>\n    ';
 if( !cls ) { ;
__p += '\n        </a>\n     ';
 }
       if( p == 'd' ) { ;
__p += '\n        </div>\n       ';
 }} ) ;
__p += '\n</div>\n\n<div class="dashboard-wheel-position">\n    <a href="#dashboard-settings-page">\n        <div class="dashboard-wheel' +
((__t = ( current == 'settings' ? '-current' : '' )) == null ? '' : __t) +
'">\n        </div></a>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardinfoform"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="dashboard-mobile-title">\n    ' +
__e( L10n.str( 'info' ) ) +
'\n</div>\n\n<div class="dashboard-note-placeholder"></div>\n\n<div class="dashboard-controls">\n    <div class="dashboard-left-first">\n        <div class="dashboard-tray dashboard-view-placeholder" dashboard="unitstatus"></div>\n    </div>\n    <div class="dashboard-right">\n        <div class=" dashboard-tray dashboard-view-placeholder" dashboard="unitlanguage"></div>\n    </div>\n    <div class="dashboard-right">\n        <div class="dashboard-tray dashboard-view-placeholder" dashboard="unittime"></div>\n    </div>\n    <div class="dashboard-left">\n        <div class="dashboard-tray dashboard-view-placeholder" dashboard="unitdetails"></div>\n    </div>\n    <div class="dashboard-right">\n        <div class="dashboard-tray dashboard-view-placeholder" dashboard="unitdiagnostics"></div>\n    </div>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardinfonote"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="dashboard-base-note">\n    <div class="dashboard-popup-title"><p>' +
__e( title ) +
'</p></div>\n    <div>\n        <div class="dashboard-info-note-image"></div>\n        ' +
__e( text ) +
'\n    </div>\n    <a href="#" data-role="button"><div class="dashboard-base-note-button">OK</div></a>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboarditems"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var containerArgs = arguments[0] ;
__p += '\n<div class="dashboard-' +
((__t = ( itemtype )) == null ? '' : __t) +
'-items">\n    ';
 _.each( items, function( item ) {
    var labelString = _.isString( item.args.label ) ? item.args.label : L10n.str( item.path );
    var css='';
    if (!_.isUndefined(item.css)) {
        css = item.css;
    }

    var styles = item.styles || {};
    var label = styles.label || 'left';
    var value = styles.value || (item.args.noLabel || item.args.noValue ? 'stack' : 'right');
    if( !item.args.noLabel ) {
    ;
__p += '\n    <div class="' +
((__t = ( css )) == null ? '' : __t) +
' dashboard-' +
((__t = ( itemtype )) == null ? '' : __t) +
'-' +
((__t = ( label )) == null ? '' : __t) +
'" item-path="' +
((__t = ( item.path )) == null ? '' : __t) +
'">\n        <p class="dashboard-align-' +
((__t = ( item.args.align.label )) == null ? '' : __t) +
'">' +
__e( labelString ) +
'</p>\n    </div>\n    ';
 } ;
__p += '\n    ';

      if( !item.args.noValue ) {
    ;
__p += '\n    <div class="' +
((__t = ( css )) == null ? '' : __t) +
' dashboard-' +
((__t = ( itemtype )) == null ? '' : __t) +
'-' +
((__t = ( value )) == null ? '' : __t) +
'" item-path="' +
((__t = ( item.path )) == null ? '' : __t) +
'">\n        <div class="dashboard-align-' +
((__t = ( item.args.align.value )) == null ? '' : __t) +
'">\n            ' +
((__t = ( item.html( containerArgs ) )) == null ? '' : __t) +
'\n        </div>\n    </div>\n    ';
 } } ) ;
__p += '\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardnote"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table>\n    <tr>\n        <td class="dashboard-note-left">' +
__e( L10n.str( 'note' ) ) +
'</td>\n        <td class="dashboard-note-right">\n            ';
 if( L10n.data( 'note' ).html ) { ;
__p += '\n            ' +
((__t = ( L10n.value( 'note' ) )) == null ? '' : __t) +
'\n            ';
 } else { ;
__p += '\n            <p>' +
__e( L10n.value( 'note' ) ) +
'</p>\n            ';
 } ;
__p += '\n        </td>\n        <td class="dashboard-note-close"></td>\n    </tr>\n</table>';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardpage"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-role="header" data-tap-toggle="false" data-transition="none"\n     class="dashboard-header" data-theme="none">\n</div>\n<div data-role="content" class="ui-content dashboard-content">\n\n    <div class="dashboard-panel" ></div>\n    <div class="dashboard-box-margin">\n        <div class="dashboard-box">\n            <div class="dashboard-form"></div>\n        </div>\n    </div>\n\n</div>\n<div class="wizard-small-logo"></div>\n<div style="height: 20px; width: 120px; background-color: #2BA8E8" />\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardpanel"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="wizard-panel-device wizard-panel-device-active">\n    <p> ' +
__e( L10n.value( 'info.details.model' ) ) +
'</p>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardprofileradios"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each( _.range( 4 ), function( i ) { ;
__p += '\n        <div class="dashboard-io-button dashboard-io-input" dashboard="' +
((__t = ( i )) == null ? '' : __t) +
'">\n        <div class="dashboard-profile-radio-fan" dashboard="' +
((__t = ( i )) == null ? '' : __t) +
'"></div>\n        <p>\n            ' +
__e( L10n.str( 'dashboard.profile.list.' + i ) ) +
'\n        </p></div>\n';
 } ) ;


}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardserviceform"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="dashboard-mobile-title">\n    ' +
__e( L10n.str( 'service' ) ) +
'\n</div>\n\n<div class="dashboard-note-placeholder"></div>\n\n<div class="dashboard-tray">\n    <h1>' +
__e( L10n.str( 'service.diagnostics' ) ) +
'</h1>\n    <div class="wizard-hr"></div>\n    <div class="dashboard-controls">\n        <div class="dashboard-left">\n            <div class="dashboard-view-placeholder" dashboard="diagnostics-left"></div>\n        </div>\n        <div class="dashboard-right">\n            <div class="dashboard-view-placeholder" dashboard="diagnostics-right"></div>\n        </div>\n    </div>\n    <div class="dashboard-controls">\n        <div class="dashboard-right">\n            <div class="dashboard-view-placeholder" dashboard="run-tests"></div>\n        </div>\n        <div class="dashboard-right dashboard-hide" id="self-tests-ongoing">\n            ' +
((__t = ( JST.dashboardticker( {path: 'service.diagnostics.ongoing' } ) )) == null ? '' : __t) +
'\n        </div>\n    </div>\n\n</div>\n\n<div class="dashboard-limit-1 dashboard-tray">\n    <div class="dashboard-view-placeholder" dashboard="mode-switch"></div>\n    <div class="dashboard-hr"></div>\n    <div class="dashboard-controls" id="service-test-mode">\n        <div class="dashboard-left">\n            <div class="dashboard-view-placeholder" dashboard="fan-test"></div>\n        </div>\n        <div class="dashboard-right">\n            <div class="dashboard-view-placeholder" dashboard="heater-test"></div>\n        </div>\n    </div>\n</div>\n\n<div class="dashboard-controls">\n    <div class="dashboard-left">\n        <div class="dashboard-tray">\n            <h2 class="dashboard-h2">' +
__e( L10n.str( 'service.log' ) ) +
'</h2>\n            <div id="dashboard-error-log">\n            </div>\n        </div>\n    </div>\n    <div class="dashboard-right">\n        <div class=" dashboard-limit-0 dashboard-tray">\n            <div class="dashboard-view-placeholder"\n                 dashboard="defrost"></div>\n            <div class="dashboard-hide" id="defrosting-ongoing">\n                ' +
((__t = ( JST.dashboardticker( {path: 'service.defrost.ongoing' } ) )) == null ? '' : __t) +
'\n            </div>\n        </div>\n    </div>\n</div>';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardsettingsform"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="dashboard-note-placeholder"></div>\n\n\n<div class="dashboard-pincode dashboard-tray">\n    <div id="wheelpin" class="dashboard-view-placeholder" dashboard="wheelpin"></div>\n<div class="dashboard-lock-position dashboard-lock-locked"></div>\n</div>\n\n\n\n\n<p></p>\n';
 if( !opts.cloud ) { ;
__p += '\n<div  class="dashboard-locked dashboard-tray">\n    <h1>' +
__e( L10n.str( 'cloud' ) ) +
'</h1>\n    <div class="wizard-hr"></div>\n    <div class="dashboard-view-placeholder" dashboard="cloud"></div>\n</div>\n';
 } ;
__p += '\n\n';
 if(opts.cloud) { ;
__p += '\n<div class="dashboard-tray cloud-account">\n    <h1>' +
__e( L10n.str('cloud.account' ) ) +
'</h1>\n    <div class="wizard-hr"></div>\n    <div class="dasboard-controls">\n        <div class="dashboard-left">\n            <a href=\'/account\' target=\'_top\'><span id=\'clouduser\'></span></a>\n        </div>\n        <div class="dashboard-right">\n            <a href="/logout" class="ui-btn" target=\'_top\'>' +
__e( L10n.str('cloud.signout') ) +
'</a>\n        </div>\n    </div>\n</div>\n';
 } ;
__p += '\n\n<div class="dashboard-tray dashboard-locked ui-disabled">\n        <h1>' +
__e( L10n.str( 'wizard.access.level' ) ) +
'</h1>\n    <div class="wizard-hr"></div>\n    <div class="dashboard-controls">\n        <div class="dashboard-left">\n            <div class="dashboard-view-placeholder" dashboard="wheellevel"></div>\n        </div>\n        <div class="dashboard-right dashboard-radio-info dashboard-access-level-info">\n\n        </div>\n    </div>\n</div>\n';
 if( !opts.cloud ) { ;
__p += '\n<div class="dashboard-tray">\n    <h1>License</h1>\n    <div class="wizard-hr"></div>\n    <div class="dashboard-controls">\n        <div class="dashboard-left">\n            <a href="js/license.txt" target="_self" data-role="button">License</a>\n        </div>\n    </div>\n\n</div>\n';
 } ;
__p += '\n\n';
 if(opts.cloud) { ;
__p += '\n<div class="dashboard-tray">\n    <h1>' +
__e( L10n.str( 'settings.grantaccess.title' ) ) +
'</h1>\n    <div class="wizard-hr"></div>\n    <div class="dashboard-controls">\n        <div class="dashboard-left">\n           <div class="dashboard-email-input dashboard-view-placeholder" dashboard="gap_email_editor"></div>\n        </div>\n        <div class="dashboard-right">\n           <div class="dashboard-email-input dashboard-view-placeholder" dashboard="gap_email_send"></div>\n        </div>\n        <div id="ga-status-placeholder" class="ga-status-placeholder">\n        </div>\n        <div class="clearfix"></div>\n    </div>\n\n</div>\n';
 } ;
__p += '\n\n<!--\n';
 if(opts.cloud) { ;
__p += '\n';
 } ;
__p += '\n-->';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardticker"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 // Initially the ticker is paused. ;
__p += '\n<div class="dashboard-ticker dashboard-ticker-pause">\n    <ul>\n        <li>' +
__e( L10n.str( path ) ) +
'</li>\n        <li>' +
__e( L10n.str( path ) ) +
'</li>\n    </ul>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardview"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var edit = edit || null;
   var styles = styles || {};
   var limit = _.isUndefined( limit ) ? '' : 'dashboard-edit-limit-' + limit;
   var titleCls = styles.title || 'dashboard-view-title';
   var hdrCls = _.isUndefined( styles.header ) ? 'dashboard-header-hr' : styles.header;
;
__p += '\n<div class="dashboard-view" dashboard="' +
((__t = ( placeholder )) == null ? '' : __t) +
'-view">\n    ';
 if( title ) { ;
__p += '\n    <div class="dashboard-view-header ' +
((__t = ( hdrCls )) == null ? '' : __t) +
'">\n        <div class="dashboard-view-header-' +
((__t = ( edit ? 'left' : 'both' )) == null ? '' : __t) +
'">\n            <div class="' +
((__t = ( titleCls )) == null ? '' : __t) +
'"><p>' +
__e( L10n.str( title ) ) +
'</p></div>\n        </div>\n        ';
 if( edit ) { ;
__p += '\n         <div class="dashboard-view-header-right">\n                <div class="' +
((__t = ( limit )) == null ? '' : __t) +
'    dashboard-edit" dashboard="' +
((__t = ( placeholder )) == null ? '' : __t) +
'-edit"></div>\n         </div>\n        ';
 } ;
__p += '\n    </div>\n    ';
 } ;
__p += '\n    ';
 if( items.length ) { ;
__p += '\n      ' +
((__t = ( JST.dashboarditems( arguments[0] ) )) == null ? '' : __t) +
'\n    ';
 } ;
__p += '\n</div>\n';
 if( edit ) { ;
__p += '\n<div class="dashboard-dialog-placeholder" dashboard="' +
((__t = ( placeholder )) == null ? '' : __t) +
'"></div>\n';
 } ;


}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardviewpair"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="dashboard-controls" dashboard="' +
((__t = ( placeholder )) == null ? '' : __t) +
'-view">\n    <div class="dashboard-left">\n        <div class="dashboard-view-placeholder" dashboard="' +
((__t = ( views[0].args.placeholder )) == null ? '' : __t) +
'"></div>\n    </div>\n    <div class="dashboard-right">\n        <div class="dashboard-view-placeholder" dashboard="' +
((__t = ( views[1].args.placeholder )) == null ? '' : __t) +
'"></div>\n    </div>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboardwaitnote"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="dashboard-base-note">\n    <div class="dashboard-popup-title"><p>' +
__e( title ) +
'</p></div>\n    <div>\n        <div class="dashboard-wait-note-image"></div>\n        ' +
__e( text ) +
'\n    </div>\n</div>\n\n\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dashboargraphlegend"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="chart-graph-legend">\n    <div class="dashboard-controls">\n        <div class="dashboard-center">\n            <div class="dashboard-view-placeholder">\n                <span class="chart-legend-text">';
 print(date) ;
__p += '</span>\n            </div>\n        </div>\n        <div class="dashboard-left-first">\n            <div class="dashboard-view-placeholder">\n                <span class="chart-series-one">&#8226;</span><span class="chart-legend-text">' +
__e(text1 ) +
'<span><span class="chart-legend-units">' +
__e(value1 );
 print(unit1) ;
__p += '</span>\n            </div>\n        </div>\n        <div class="dashboard-right">\n            <div class="dashboard-view-placeholder">\n                <span class="chart-series-two">&#8226;</span><span class="chart-legend-text">' +
__e(text2 ) +
'<span><span class="chart-legend-units">' +
__e(value2 );
 print(unit2) ;
__p += '</span>\n            </div>\n        </div>\n        <div class="dashboard-right">\n            <div class="dashboard-view-placeholder">\n                <span class="chart-series-three">&#8226;</span><span class="chart-legend-text">' +
__e(text3 ) +
'<span><span class="chart-legend-units">' +
__e(value3 );
 print(unit3) ;
__p += '</span>\n\n            </div>\n        </div>\n        <div class="dashboard-left">\n            <div class="dashboard-view-placeholder">\n                <span class="chart-series-four">&#8226;</span><span class="chart-legend-text">' +
__e(text4 ) +
'<span><span class="chart-legend-units">' +
__e(value4 );
 print(unit4) ;
__p += '</span>\n\n            </div>\n        </div>\n        <div class="dashboard-right">\n            <div class="dashboard-view-placeholder">\n                <span class="chart-series-five">&#8226;</span><span class="chart-legend-text">' +
__e(text5 ) +
'<span><span class="chart-legend-units">' +
__e(value5 );
 print(unit5) ;
__p += '</span>\n            </div>\n        </div>\n        <div class="dashboard-left">\n            <div class="dashboard-view-placeholder">\n                <span class="chart-series-six">&#8226;</span><span class="chart-legend-text">' +
__e(text6 ) +
'<span><span class="chart-legend-units">' +
__e(value6 );
 print(unit6) ;
__p += '</span>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["dlgtemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="dlg-container">\n    <div class="dlg-title">' +
__e( title ) +
'</div>\n    <div class="dlg-message"><p>' +
__e( message ) +
'</p></div>\n    <div class="cf"></div>\n    <a href="#" data-role="button"><div id="dlg-cb-' +
__e( id ) +
'" class="dlg-button" data-uuid="' +
__e( id ) +
'">' +
__e( button ) +
'</div></a>\n    <div class="cf"></div>\n    </div>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editorbutton"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var data = L10n.data( path );
   var arg = arguments[0];
   var text = L10n.str( path );
   var confPath = arg.confirmation || data.confirmation;
   var confirmation = arg.confirmationString || (confPath && L10n.str( confPath ) );
   if( confirmation ) {
        var popup =  _.uniqueId( 'popup_' );
;
__p += '\n    <a href="#' +
((__t = ( popup )) == null ? '' : __t) +
'" data-rel="popup" data-role="button">' +
__e( text ) +
'</a>\n    <div data-role="popup" id="' +
((__t = ( popup )) == null ? '' : __t) +
'" data-overlay-theme="c"\n            class="dashboard-popup" data-position-to="window">\n         <div class="dashboard-popup-title"><p>' +
__e( text ) +
'</p></div>\n         <div class="dashboard-confirmation"><p>' +
__e( confirmation ) +
'</p></div>\n         <div class="dashboard-confirmation-footer">\n            <a href="#" data-rel="back">\n            <div class="dashboard-confirmation-left">\n\n            </div></a>\n             <a l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'" data-rel="back" href="#">\n             <div class="dashboard-confirmation-right">\n\n             </div></a>\n         </div>\n     </div>\n';
 } else { ;
__p += '\n    <a l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'" data-role="button" href="#">' +
__e( text ) +
'</a>\n';
 } ;
__p += '\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editorconfiguration"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form id="config-form">\n    <div class="dashboard-configuration" l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'">\n        ';

            var divs = 8; // parts + separators
            _.each( _.range( divs ), function( i ) {
        ;
__p += '\n        <div class="config-editor-fields dashboard-configuration-' +
((__t = ( i )) == null ? '' : __t) +
'">\n                <input type="text" maxlength="' +
((__t = ( i == (divs - 1)  ? 2 : 4 )) == null ? '' : __t) +
'"\n                        dashboard="' +
((__t = ( i )) == null ? '' : __t) +
'"></input>\n        </div>\n\n        ';
 } ) ;
__p += '\n    </div>\n</form>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editordate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var m = moment( L10n.value( path ) );
   m.locale( locale );
;
__p += '\n\n<table>\n<tr class="dashboard-date" l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'">\n    ';

      var cls = { DD: '', MM: '', YYYY: 'dashboard-year' };
      var seps = 0;
      _.each( order, function( part ) {
    ;
__p += '\n    <td class="dashboard-td ' +
((__t = ( cls[part] )) == null ? '' : __t) +
'">\n        <input type="number" dashboard="' +
((__t = ( part )) == null ? '' : __t) +
'"\n                value="' +
((__t = ( m.format( part ) )) == null ? '' : __t) +
'"></input>\n    </td>\n    ';
 if( seps < 2 ) {
        seps++;
    ;
__p += '\n        <td class="dashboard-separator">' +
__e( separator ) +
'</td>\n    ';
 } } ) ;
__p += '\n</tr>\n</table>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editordivider"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="' +
((__t = ( styles.divider )) == null ? '' : __t) +
'"></div>';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editorduration"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var data = L10n.data( path );
   var value = {}
   if( data.minutesflag ) {
     // Value is minutes
     value.hours = Math.floor( data.value / 60 );
     value.minutes = data.value % 60;
   } else {
     value = data.value;
   }
 ;
__p += '\n<div class="dashboard-duration" l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'">\n    <div class="dashboard-duration-hours" >\n        <input type="number" dashboard="hours"\n               value="' +
__e( value.hours ) +
'"\n               maxlength="2">\n        </input>\n    </div>\n    <div class="dashboard-duration-sep">:</div>\n    <div class="dashboard-duration-minutes">\n        <input type="number" dashboard="minutes"\n               value="' +
__e( value.minutes ) +
'"\n               maxlength="2"></input>\n    </div>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editorpin"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="dashboard-pin">\n    <input type="' +
((__t = ( password ? 'password' : 'text' )) == null ? '' : __t) +
'" maxlength=\'4\' l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'" value="' +
__e( L10n.value( path ) ) +
'">\n    </input>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editorradio"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var theme = '';
   if( horizontal ) {
     theme = 'data-theme="c" data-mini="true"';
;
__p += '\n  <fieldset data-role="controlgroup" data-type="horizontal">\n';
 } ;
__p += '\n';
  var checked = L10n.value( path );
    _.each( L10n.node( list ), function( item, index ) {
    var id = _.uniqueId( 'radio:' );
    var labelCls = styles.backgrounds ? sprintf( 'class="%s"', styles.backgrounds[index] ) : '';
;
__p += '\n    <input type="radio" name="' +
((__t = ( path )) == null ? '' : __t) +
'" id="' +
((__t = ( id )) == null ? '' : __t) +
'"\n       value="' +
((__t = ( index )) == null ? '' : __t) +
'" ' +
((__t = ( theme )) == null ? '' : __t) +
'\n    ' +
((__t = ( isSelected( checked, item, index ) ? 'checked' : '' )) == null ? '' : __t) +
' />\n    <label for="' +
((__t = ( id )) == null ? '' : __t) +
'">\n        ';
 if( labelCls ) { ;
__p += '\n            <div ' +
((__t = ( labelCls )) == null ? '' : __t) +
'>\n        ';
 } ;
__p += '\n        ' +
__e( L10n.str( item ) ) +
'\n        ';
 if( labelCls ) { ;
__p += '\n            </div>\n        ';
 } ;
__p += '\n    </label>\n';
 } ) ;
__p += '\n';
 if( horizontal ) { ;
__p += '\n  </fieldset>\n';
 } ;
__p += '\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editorselect"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="wizard-select">\n    <select data-role="none" l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'">\n        ';
  var selected = L10n.value( path );
        _.each( L10n.node( list ), function( item, index ) {
        ;
__p += '\n            <option value="' +
((__t = ( index )) == null ? '' : __t) +
'" ' +
((__t = ( isSelected( selected, item, index ) ? 'selected' : '' )) == null ? '' : __t) +
'>\n            ' +
__e( L10n.str( item ) ) +
'</option>\n        ';
 } ) ;
__p += '\n    </select>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editorslider"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 // Defaults
        var arg = arguments[0];
        var data = L10n.data( path );
        var min = arg.min || data.min || 0;
        var max = arg.max || data.max || 100;
        var step = arg.step || data.step || 1;
        var unit = arg.unit || data.unit || '%';  // Unit HTML is not escaped.
;
__p += '\n<div class="dashboard-slider" l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'">\n    <div class="dashboard-slider-value" >\n          <input type="range" max="' +
((__t = ( max )) == null ? '' : __t) +
'" min="' +
((__t = ( min )) == null ? '' : __t) +
'" step="' +
((__t = ( step )) == null ? '' : __t) +
'" data-highlight="true" data-theme="b"\n            value="' +
((__t = ( data.value )) == null ? '' : __t) +
'"></input>\n    </div>\n    <div class="dashboard-slider-unit">' +
((__t = ( unit )) == null ? '' : __t) +
'</div>\n    <div class="dashboard-slider-amount">\n        <span l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'">';
 if( data.amount ) { ;
__p += '\n        ' +
__e( data.amount ) +
'</span> ' +
__e( L10n.str( 'wizard.rpm' ) ) +
'\n    ';
 } ;
__p += '\n    </div>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editorswitch"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var selected = L10n.data( path ).value; ;
__p += '\n\n';
 // slider is deprecated, but we still use it due to problems with flipswitch ;
__p += '\n    <select data-role="slider" l10n-path=\'' +
((__t = ( path )) == null ? '' : __t) +
'\' data-theme="b">\n        <option value="" ' +
((__t = ( !selected ? 'selected' : '' )) == null ? '' : __t) +
'>' +
__e( L10n.str( 'wizard.off' ) ) +
'</option>\n    <option value="1" ' +
((__t = ( selected ? 'selected' : '' )) == null ? '' : __t) +
'>' +
__e( L10n.str( 'wizard.on' ) ) +
'</option>\n</select>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editortext"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="dashboard-align-' +
((__t = ( align.input )) == null ? '' : __t) +
'">\n    <input type="' +
((__t = ( type )) == null ? '' : __t) +
'" l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'" value="' +
__e( L10n.data( path ).value ) +
'"></input>\n</div>';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editortextviewer"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var cls = styles.text || '' ;
__p += '\n<span\n ';
 if( cls ) { ;
__p += '\n      class="' +
((__t = ( cls )) == null ? '' : __t) +
'"\n ';
 } ;
__p += '\n  >' +
__e( L10n.str( path ) ) +
'</span>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editortime"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 // m is a moment ;
__p += '\n<div class="dashboard-time" l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'">\n    <div class="dashboard-time-hours" >\n        <input type="number" dashboard="hours"\n               value="' +
__e( m.format( 'HH' ) ) +
'"\n               maxlength="2">\n        </input>\n    </div>\n    <div class="dashboard-time-sep1">:</div>\n    <div class="dashboard-time-minutes">\n        <input type="number" dashboard="minutes"\n               value="' +
__e( m.format( 'mm' ) ) +
'"\n               maxlength="2"></input>\n    </div>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["editorviewer"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="' +
((__t = ( styles.viewer )) == null ? '' : __t) +
'" l10n-path="' +
((__t = ( path )) == null ? '' : __t) +
'">' +
((__t = ( htmlFun( L10n.data( path ), self ) )) == null ? '' : __t) +
'</div>';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["grantaccessitem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="ga-status-item">\n    <div class="ga-status-email">' +
__e( email ) +
'</div>\n    <div class="ga-status-granted">' +
__e( accessGranted ) +
'</div>\n    <div class="ga-status-remove-button">\n        <a href="#" target="_self" data-email="' +
__e( email ) +
'" data-role="button">' +
__e( L10n.str( 'settings.grantaccess.removeaccess' ) ) +
'</a>\n    </div>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["wizardaccessform"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
__e( L10n.str( 'wizard.access.header' ) ) +
'</h1>\n<div class="wizard-hr"></div>\n<div class="dashboard-view-placeholder" dashboard="wizardpin"></div>\n\n<div class="wizard-hr"></div>\n\n<!--<div class="wizard-access-level">-->\n    <p>' +
__e( L10n.str( 'wizard.access.level' ) ) +
'</p>\n<!--</div>-->\n\n<div class="dashboard-controls">\n    <div class="dashboard-left">\n        <div class="dashboard-view-placeholder" dashboard="wizardaccess"></div>\n    </div>\n    <div class="dashboard-right dashboard-radio-info dashboard-access-level-info">\n\n    </div>\n</div>\n\n<div class="wizard-hr"></div>\n\n<div class="dashboard-view-placeholder" dashboard="wizardparental"></div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["wizardexpertform"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
__e( L10n.str( 'wizard.expert.header' ) ) +
'</h1>\n<div class="wizard-hr"></div>\n<h2>' +
__e( L10n.str('wizard.expert.fan') ) +
' & ' +
__e( L10n.str( 'wizard.expert.profiles' ) ) +
'</h2>\n<div class="wizard-hr"></div>\n\n <div data-role="collapsibleset">\n    <div id="collapsible-fans" class="expert-collapsible" data-role="collapsible" data-collapsed="false">\n        <h2>' +
__e( L10n.str( 'wizard.expert.fan') ) +
'</h2>\n        <div class="dashboard-view-placeholder" dashboard="wizardfans"></div>\n    </div>\n    <div id="collapsible-home" class="expert-collapsible" data-role="collapsible" data-collapsed="true">\n        <h2>' +
__e( L10n.str( 'wizard.expert.profiles.home') ) +
'</h2>\n        <div class="dashboard-view-placeholder" dashboard="wizardhome"></div>\n    </div>\n    <div id="collapsible-away" class="expert-collapsible" data-role="collapsible" data-collapsed="true">\n        <h2>' +
__e( L10n.str( 'wizard.expert.profiles.away') ) +
'</h2>\n        <div class="dashboard-view-placeholder" dashboard="wizardaway"></div>\n    </div>\n    <div id="collapsible-boost" class="expert-collapsible" data-role="collapsible" data-collapsed="true">\n        <h2>' +
__e( L10n.str( 'wizard.expert.profiles.boost') ) +
'</h2>\n        <div class="dashboard-view-placeholder" dashboard="wizardboost"></div>\n    </div>\n    <div id="collapsible-fireplace" class="expert-collapsible" data-role="collapsible" data-collapsed="true">\n        <h2>' +
__e( L10n.str( 'wizard.expert.profiles.fireplace') ) +
'</h2>\n        <div class="dashboard-view-placeholder" dashboard="wizardfireplace"></div>\n    </div>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["wizardheader"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n';
   // See wizard.js on how this template is called.
     var scope = {current: current, ids: ids, index: _.indexOf( ids, current )};
     function stepStatus( id ) {
        if( id == scope.current ) {
            return {
                step: 'wizard-step-current',
                arr: id != 'summary' ? 'wizard-arrow-active' : ''
            }
        }
        if( _.indexOf( scope.ids, id ) < scope.index ) {
            return {
                step: 'wizard-step-active',
                arr: 'wizard-arrow-active'
            }
        }
        return {
            step: '',
            arr: id != 'summary' ? 'wizard-arrow-inactive' : ''
        }
     };
     var steps = { a: 'start', b: 'access', c: 'expert', d: 'summary' };
;
__p += '\n\n<div class="wizard-steps wizard-header-navigation">\n    ';
 _.each( 'abcd', function( key, i ) {
        var cls = stepStatus( steps[key] );
    ;
__p += '\n\n        <div class="wizard-step-' +
((__t = ( key )) == null ? '' : __t) +
'\n             ' +
((__t = ( cls.arr )) == null ? '' : __t) +
'">\n            <div class="wizard-step ' +
((__t = ( cls.step )) == null ? '' : __t) +
'">\n                <p><span class="wizard-step-num">' +
((__t = ( i + 1 )) == null ? '' : __t) +
'.</span>\n                    <span class="wizard-step-text">' +
__e( L10n.str( 'wizard.' + steps[key] + '.title' ) ) +
'</span>\n                </p>\n            </div>\n        </div>\n    ';
 } ) ;
__p += '\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["wizardnextbutton"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#' +
((__t = ( target )) == null ? '' : __t) +
'" data-role="button" data-transition="none">' +
__e( text ) +
'</a>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["wizardpage"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div data-role="header" data-tap-toggle="false" data-transition="none"\n     class="wizard-header" data-theme="none">\n</div>\n<div data-role="content" class="ui-content wizard-content">\n<div class="wizard-panel"></div>\n<div class="wizard-box-margin">\n    <div class="wizard-box">\n        <div class="wizard-form">\n        </div>\n        <div class="wizard-buttons">\n            <div class="wizard-buttons-left">\n                ';
 if( back ) { ;
__p += '\n                <div class="wizard-back-button">\n                    <a href="#" data-role="button" data-rel="back" data-transition="none">\n                        ' +
__e( L10n.str( 'wizard.back' ) ) +
'\n                    </a>\n                </div>\n                ';
 } ;
__p += '\n            </div>\n            <div class="wizard-buttons-right">\n                <div class="wizard-next-button">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["wizardpanel"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="wizard-panel-device wizard-panel-device-active">\n   <p> ' +
__e( L10n.value( 'info.details.model' ) ) +
'</p>\n</div>\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["wizardstartform"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
__e( L10n.str( 'wizard.start.welcome' ) ) +
'</h1>\n<div class="wizard-hr"></div>\n\n<div class="dashboard-view-placeholder" dashboard="wizardlanguage"></div>\n\n<div class="wizard-hr"></div>\n\n<div class="dashboard-view-placeholder" dashboard="wizardtimedate"></div>\n\n';

}
return __p
}})();
(function() {(window["JST"] = window["JST"] || {})["wizardsummaryform"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h1>' +
__e( L10n.str( 'wizard.access.header' ) ) +
'</h1>\n<div class="wizard-hr wizard-dummy"></div>\n\n<div class="dashboard-view-placeholder" dashboard="summaryaccess"></div>\n\n<br/>\n<h1>' +
__e( L10n.str( 'wizard.expert.header' ) ) +
'</h1>\n<div class="wizard-hr wizard-dummy"></div>\n\n<div class="dashboard-view-placeholder" dashboard="summaryfans"></div>\n\n';
 _.each( ['home', 'away', 'boost', 'fireplace'], function( p ) { ;
__p += '\n    <!--<h2>' +
__e( L10n.str( 'wizard.expert.profiles.' + p ) ) +
'</h2>-->\n    <div class="dashboard-view-placeholder" dashboard="summary' +
((__t = ( p )) == null ? '' : __t) +
'"></div>\n<br class="wizard-dummy" />\n\n';
 } ) ;
__p += '\n';

}
return __p
}})();
//var Dashboard = Dashboard || function() {
function CreateDashBoard() {



    $('body').on('tap ', '.ga-status-remove-button', removeAccessClick);

    // Language selection is stored between sessions.
    // If the language has not been stored we use the
    // browser language if it is supported by L10n.
    // We check the availability of the storage just in case.
    if (window.localStorage) {
        var lang = window.localStorage.getItem('language');
        if (!lang) {
            // Browser locale as canonical Moment locale
            lang = moment().locale(window.navigator.language || window.navigator.userLanguage || 'en').locale();
        }
        if (L10n.isSupportedLanguage(lang)) {
            L10n.value('language', lang);
        }
        // Subsequent changes are written to the storage
        L10n.register(function (path, data) {
            window.localStorage.setItem('language', data.value);
            location.reload();
        }, 'language');
    }

    // Since initialization fully redoes the page
    // layout, we assign an unique id for each
    // initialization. This useful for editors and
    // viewers, since they can check whether their
    // selectors, listeners et al are up-to-date.
    var domId = null;

    // Editors and viewers
    var globalData = {
        get: function (path) {
            return L10n.value(path);
        },
        set: function (path, value) {
            L10n.value(path, value)
        }
    };

    function localData() {
        var data = {};
        return {
            get: function (path) {
                return data[path];
            },
            set: function (path, value) {
                data[path] = value;
            },
            data: data,
            // Assigns data contents to globalData (L10n).
            publish: function () {
                _.each(data, function (value, path) {
                    globalData.set(path, value);
                })
            }
        }
    }

    function argsData(args) {
        var data = globalData;
        if (args.data) {
            data = args.data;
            var v = L10n.value(args.path);
            // When cloning, we consider Moments separately
            data.set(args.path, moment.isMoment(v) ? moment(v) : _.clone(v))
        }
        return data;
    }

    function hideSelector(sel, flag) {
        sel.toggleClass('dashboard-hide', !!flag);
    }


    // Simple editor hierarchy.
    // The consists of editing widget and its label.
    // "Abstract" base class.
    // Arguments (args properties) ([optional=default]):
    // path: L10n path for the edit target.
    // [label=L10n.str( path )]: If given, then its value is used as the label txt.
    // [stacked=false]: If true, then the label and editor are stacked.
    // [register=false]: if true then the changed function is registered
    // [noLabel=false]: If true then the label is not shown.
    // [noValue=false]: If true then the value is not shown (implies stacked).
    // [alwaysEnabled=false]: If true then the data.disabled does not affect Editor.
    //    This useful for cases where for example Viewer behaves differently.
    // [align = {label: 'left', value='right']: Alignment of the corresponding
    //    View/Dialog item. Different Editors can define additional align properties.
    // as a L10n listener for the path in the beginning of ready function.
    // template: the template function (used in html method).
    function Editor(args, template) {
        // Constructor is also caalled when the prototype chain is crated.
        // So we must handle the call without arguments.
        if (arguments.length) {
            this.args = args || {};
            this.path = this.args.path;
            this.css = this.args.css;
            this.styles = this.args.styles || {};
            if (this.args.stacked) {
                _.defaults(this.styles, {label: 'stack', value: 'stack'});
            }
            this.args.align = _.defaults(this.args.align || {}, {label: 'left', value: 'right'});
            this.myDom = domId;
            this.editor = template;
            // In order to make an Editor a good-behaving View/Dialog item,
            // we'll create dummy data to L10n, if needed and path is set.
            var node = L10n.node(this.path);
            if (node && !node.data) {
                node.data = {};
            }
        }
    }

    Editor.prototype = {
        // Instantiates the editor template.
        // The default implementation calls the template property with
        // args collected in the constructor:
        // containerArgs: Arguments of the items container.
        html: function (containerArgs) {
            return this.editor(this.args);
        },
        // $parent. jQuery object for the editor container.
        // [data]: Storage for new values, typically localData.
        //         If not given, globalData (L10n) is used.
        ready: function ($parent, editorData) {
            this.data = argsData({path: this.path, data: editorData});
            this.parentSelector = $parent;
            if (this.args.register) {
                var self = this;
                L10n.register(function () {
                    if (self.myDom == domId) {
                        self.changed.apply(self, arguments);
                    } else {
                        // This editor is actually part of a page that
                        // no longer exists. No sense keep calling the listener.
                        L10n.unregister(arguments.callee, self.args.path);
                    }
                }, self.args.path);
            }
            // We'll call Editor.changed to make sure that
            // visibility (disabled, hidden) is up-to-date
            Editor.prototype.changed.call(this, this.args.path,
                L10n.data(this.args.path));
        },
        // L10n data listener.
        // Called in the instance context (_this_ works as expected)
        // The default implementation dims with .ui-disabled both the
        // label and value, if data.disabled is truthy.
        // Similarly hiding with .dashboard-hide
        changed: function (path, data) {
            var sel = $(sprintf('[item-path="%s"]', path), this.parentSelector);
            // we use double negation (!!) to make sure that the argument
            // is Boolean.
            if (!this.args.alwaysEnabled) {
                sel.toggleClass('ui-disabled', !!data.disabled);
            }
            sel.toggleClass('dashboard-hide', !!data.hidden);
        },
        // Called by Dialog to make sure that it can close.
        // Default implementation just returns true.
        isValid: function () {
            return true;
        }
    };

    // Text editor
    TextEditor.prototype = new Editor;
    TextEditor.prototype.constructor = TextEditor;

    // Arguments ([optional]):
    // path: L10n path for the edit target.
    // [regexp]: RegExp that validates input.
    // [type]: Type for the input field (default: text).
    // [align.input]: Text alignment of the input field (default: left)
    function TextEditor(args) {
        if (args) {
            Editor.call(this, _.defaults(args, {
                    type: 'text',
                    align: {input: args.align || 'left'}
                }),
                args.type == 'pin' ? JST.editorpin : JST.editortext);
            this.check = args.regexp
            || (_.contains(['pin', 'number'], this.args.type)
                ? /[0-9]+/ : /.*/ );
        }
    }

    TextEditor.prototype.ready = function (sel, editorData) {
        Editor.prototype.ready.call(this, sel, editorData);
        var self = this;
        this.selector = $('[l10n-path="' + this.args.path + '"]', sel);
        this.selector.focusout(function () {
            if (self.check.test($(this).val())) {
                self.data.set(self.args.path, $(this).val())
            } else {
                $(this).val(self.data.get(self.args.path));
            }
        })
    };
    TextEditor.prototype.changed = function (path, data) {
        Editor.prototype.changed.call(this, path, data);
        this.selector.val(data.value);
    };

    // PIN is a four-digit text. Implemented as a separate
    // editor due to different template.
    PinEditor.prototype = new TextEditor();
    PinEditor.prototype.constructor = PinEditor;

    // Just a call-through for TextEditor.
    // [password=false]: If true then the PIN input type is password.
    // Note: you cannot give password via type.
    function PinEditor(args) {
        TextEditor.call(this, _.defaults(args, {
            type: 'pin', stacked: true, regexp: /[0-9]{4}/, password: false
        }));
    }

    PinEditor.prototype.ready = function (sel, editorData) {
        TextEditor.prototype.ready.call(this, sel, editorData);
        this.selector.focusin(function () {
            $(this).val('');
        })
    };

    // Duration editor
    DurationEditor.prototype = new Editor;
    DurationEditor.prototype.constructor = DurationEditor;

    // Arguments ([optional]):
    // path: L10n path for the edit target.
    // [regexp]: RegExp that validates input.
    function DurationEditor(args) {
        Editor.call(this, _.defaults(args, {
                label: L10n.str(args.path) + ' (hh:mm)'
            }),
            JST.editorduration);
        this.minutesflag = L10n.data(args.path).minutesflag;
    }

    DurationEditor.prototype.ready = function (sel, editorData) {
        Editor.prototype.ready.call(this, sel, editorData);
        var self = this;

        // Trousers & suspenders type parsing since the input
        // field type=number should make sure our code only
        // sees numbers.
        function parse(s) {
            s = s.trim();
            if (s == '') {
                return 0;
            }
            return /^[0-9]+$/.test(s) ? parseInt(s, 10) : NaN;
        }

        // Arguments are field selectors.
        // After a call the data and fields are up-to-date,
        function canonize(hoursSel, minsSel) {
            var hours = parse(hoursSel.val());
            var mins = parse(minsSel.val());
            if (hours >= 0 && mins >= 0 && mins < 60) {
                // Duration cannot be zero.
                if (!hours && !mins) {
                    mins = 1;
                }
                if (self.minutesflag) {
                    self.data.set(self.args.path, hours * 60 + mins);
                } else {
                    self.data.set(self.args.path, {hours: hours, minutes: mins});
                }
            }
            self.fillFields(self.data.get(self.args.path));
        }

        var $duration = $(sprintf('[l10n-path="%s"]', self.args.path), sel);
        this.$hours = $('[dashboard="hours"]', $duration);
        this.$mins = $('[dashboard="minutes"]', $duration);

        this.$hours.focusout(function () {
            canonize($(this), self.$mins)
        });

        this.$mins.focusout(function () {
            canonize(self.$hours, $(this))
        });
    };
    DurationEditor.prototype.changed = function (path, data) {
        Editor.prototype.changed.call(this, path, data);
        this.fillFields(data.value);
    };

    DurationEditor.prototype.fillFields = function (duration) {
        if (this.minutesflag) {
            this.$hours.val(Math.floor(duration / 60));
            this.$mins.val(duration % 60);
        } else {
            this.$hours.val(duration.hours);
            this.$mins.val(duration.minutes);
        }
    };

    // Slider editor
    SliderEditor.prototype = new Editor;
    SliderEditor.prototype.constructor = SliderEditor;
    // Arguments ([optional]):
    function SliderEditor(args) {
        Editor.call(this, args, JST.editorslider);
        this.styles = _.defaults(this.styles, {label: 'slider-label'});
    }

    SliderEditor.prototype.ready = function (sel, editorData) {
        Editor.prototype.ready.call(this, sel, editorData);
        var self = this;
        this.container = $(sprintf('.dashboard-slider[l10n-path="%s"]', self.args.path), sel);

        function sliderChanged() {
            var slider = $('input', $(this));
            if (slider.val() != '') {
                self.data.set(self.args.path, slider.val())
            } else {
                slider.val(self.data.get(self.args.path));
            }
        }

        this.container.focusout(sliderChanged);
        this.container.on('slidestop', sliderChanged);
    };
    SliderEditor.prototype.changed = function (path, data) {
        Editor.prototype.changed.call(this, path, data);
        // If we store the slider in the ready, it does not work.
        // But, doing it via container is OK.
        var slider = $('input', this.container);
        slider.val(data.value);
        slider.slider('refresh');
        if (!(_.isUndefined(data.amount) || _.isNull(data.amount) )) {
            $(sprintf('.dashboard-slider-amount span[l10n-path="%s"]', this.args.path),
                this.container).html(_.escape(data.amount));
        }
    };

    // Switch editor
    // Note: jQM flipswitch widget is very particular about
    // the truthy values. Only '1' (and 1) are accepted as true,
    // everything else is false. However, the widget value for
    // false is empty string (this is actually defined in switcheditor.jst).
    // SwitchEditor tries to canonize the values to real true and false.
    SwitchEditor.prototype = new Editor;
    SwitchEditor.prototype.constructor = SwitchEditor;

    // Arguments ([optional]):
    // path: L10n path for the edit target.
    function SwitchEditor(args) {
        Editor.call(this, args, JST.editorswitch);
    }

    SwitchEditor.prototype.ready = function (sel, editorData) {
        Editor.prototype.ready.call(this, sel, editorData);
        var self = this;
        this.selectorFun = _.partial($, sprintf('[l10n-path="%s"]', self.args.path), sel);
        this.selectorFun().change(function () {
            self.data.set(self.args.path, $(this).val() ? true : false);
        })
    };
    SwitchEditor.prototype.changed = function (path, data) {
        Editor.prototype.changed.call(this, path, data);
        // Similarly to slider, a stored selector as such does not work.
        var sel = this.selectorFun();
        sel.val(data.value ? 1 : '');
        sel.slider('refresh');
    };

    // Convenience functions for list editors (e.g., RadioEditor, SelectEditor).
    // Selection value is either the value of the item (if present) or its index.
    // list: L10n path for list.
    // index: Index of the selected item.
    function listValue(list, index) {
        var node = L10n.node(sprintf('%s.%s', list, index));
        return _.isObject(node.data) && !_.isUndefined(node.data.value)
            ? node.data.value : index;
    }

    // Checks if the given node matches to value.
    // Returns true if node.data.value is equal or if
    // the there is no data.value, then if the index equals value.
    function isSelected(value, node, index) {
        var cmp = index;
        if (_.isObject(node.data) && !_.isUndefined(node.data.value)) {
            cmp = node.data.value;
        }
        return _.isEqual(value, cmp) || value == cmp;
    }

    // Finds index in list (using isSelected) matching value.
    // Returns the index of -1 if not found.
    function findIndex(list, value) {
        var index = -1;
        _.each(L10n.node(list), function (item, i) {
            if (isSelected(value, item, i)) {
                index = i;
                return false;  // terminate iteration
            }
        });
        return index;
    }

    // Radio group editor
    RadioEditor.prototype = new Editor;
    RadioEditor.prototype.constructor = RadioEditor;

    // Arguments:
    // path: L10n path for the target
    // list: L10n path to the group items.
    // [horizontal=false] If true, the buttons are laid out as mini toolbar.
    // [styles.backgrounds] If given, must contain class names for every item.
    function RadioEditor(args) {
        Editor.call(this, _.defaults(args,
            {horizontal: false, styles: {}}), JST.editorradio);
        this.args.isSelected = isSelected;
    }

    RadioEditor.prototype.ready = function (sel, editorData) {
        Editor.prototype.ready.call(this, sel, editorData);
        var self = this;
        $(sprintf('input[name="%s"]', self.args.path), sel).change(function () {
            self.data.set(self.args.path,
                listValue(self.args.list, $(this).checkboxradio().val()));
        })
    };
    RadioEditor.prototype.changed = function (path, data) {
        Editor.prototype.changed.call(this, path, data);
        $(sprintf('[value="%s"]', findIndex(this.args.list, data.value)),
            this.parentSelector).prop('checked', true);
        $('input[type=radio]', this.parentSelector).checkboxradio('refresh');
    };

    // Select (drop down) editor.
    SelectEditor.prototype = new Editor;
    SelectEditor.prototype.constructor = SelectEditor;

    // Arguments:
    // path: L10n path for the target
    // list: L10n path to the group items.
    function SelectEditor(args) {
        Editor.call(this, args, JST.editorselect);
        this.args.isSelected = isSelected;
//        this.editor = JST.editorselect;
    }

    SelectEditor.prototype.ready = function (sel, editorData) {
        Editor.prototype.ready.call(this, sel, editorData);
        var self = this;
        this.selectorFun = _.partial($, sprintf('select[l10n-path="%s"]', self.path), sel);
        this.selectorFun().change(function () {
            self.data.set(self.args.path, listValue(self.args.list, $(this).val()));
        })
    };
    SelectEditor.prototype.changed = function (path, data) {
        Editor.prototype.changed.call(this, path, data);
        $(sprintf('[value="%s"]', findIndex(this.args.list, data.value)), this.parentSelector)
            .prop('selected', true);
    };

    // Button
    // Since does not have a value per se, the clicking
    // implemented by setting a unique (_.uniqueId) value.
    // Thus, the clicking always changes value
    ButtonEditor.prototype = new Editor;
    ButtonEditor.prototype.constructor = ButtonEditor;

    // By default, there is no confirmation, but this can be changed
    // with confirmation arguments:
    // [confirmation]: Path to be shown on the confirmation popup.
    //                 Can also be given via data.confirmation.
    // [confirmationString]: String to be shown on the confirmation popup.
    function ButtonEditor(args) {
        Editor.call(this, args, JST.editorbutton);
    }

    ButtonEditor.prototype.ready = function (sel, editorData) {
        Editor.prototype.ready.call(this, sel, editorData);
        var self = this;
        $(sprintf('a[l10n-path="%s"]', this.args.path), sel).click(function () {
            self.data.set(self.args.path, _.uniqueId('click:'));
        })
    };

    // Time editor for deltas. Will keep updating itself.
    TimeEditor.prototype = new Editor;
    TimeEditor.prototype.constructor = TimeEditor;


    // Todo: Does not support register argument. Not currently needed.
    function TimeEditor(args) {
        Editor.call(this, args, JST.editortime);
        this.args.m = L10n.delta2moment(L10n.value(args.path));
    }

    TimeEditor.prototype.ready = function (sel, editorData) {
        Editor.prototype.ready.call(this, sel, editorData);
        var self = this;
        var dic = {
            hours: {sel: $('[dashboard="hours"]', sel), focused: false, format: 'HH'},
            mins: {sel: $('[dashboard="minutes"]', sel), focused: false, format: 'mm'}
        };

        function updateTime() {
            var m = L10n.delta2moment(self.data.get(self.args.path));
            _.each(dic, function (t, k) {
                if (!t.focused) {
                    t.sel.textinput().val(m.format(t.format));
                }
            });
        }

        function parseTime() {
            var m = moment({
                hours: dic.hours.sel.val(),
                minutes: dic.mins.sel.val()
//                seconds: dic.secs.sel.val()
            });
            if (m.isValid()) {
                self.data.set(self.args.path, L10n.moment2delta(m));
            } else {
                updateTime();
            }
        }

        _.each(dic, function (t) {
            t.sel.focusout(function () {
                t.focused = false;
                parseTime();
            });
            t.sel.focusin(function () {
                t.focused = true;
            })
        });
        function updater() {
            if (self.myDom == domId) { // && dic.hours.sel.is( ':visible') ) {
                updateTime();
                _.delay(updater, 800);
            }
        }

        updater();
    };

    // Date editor
    DateEditor.prototype = new Editor;
    DateEditor.prototype.constructor = DateEditor;

    // Arguments ([optional]):
    // path: L10n path for the edit target.
    function DateEditor(args) {
        var locale = L10n.value('language');
        var fmt = momentFormats.date;
        var separator = null;
        var localFormat = moment.localeData(locale).longDateFormat(fmt);
        var order = null;
        _.each('./-:', function (sep) {
            order = localFormat.split(sep);
            if (order.length > 1) {
                separator = sep;
                return false;
            }
        });

        Editor.call(this, _.defaults(args, {
                type: 'text',
                align: {input: 'center'},
                locale: locale,
                fmt: fmt,
                label: sprintf('%s (%s)',
                    L10n.str(args.path),
                    localFormat),
                separator: separator,
                order: order
            }),
            JST.editordate);
    }

    DateEditor.prototype.ready = function (sel, editorData) {
        Editor.prototype.ready.call(this, sel, editorData);
        var self = this;
        this.selector = $('[l10n-path="' + this.args.path + '"]', sel);
        $('[dashboard]', this.selector).focusout(function () {
            var m = self.dateMoment();
            if (m.isValid()) {
                self.data.set(self.args.path, m)
            } else {
                self.dateMoment(moment(self.data.get(self.args.path)));
            }
        })
    };

    DateEditor.prototype.dateMoment = function (m) {
        if (m) {
            _.each(this.args.order, function (p) {
                $(sprintf('[dashboard="%s"]', p), this.selector)
                    .val(m.format(p));
            });
        } else {
            var parts = [];
            _.each(this.args.order, function (p) {
                parts.push($(sprintf('[dashboard="%s"]', p), this.selector)
                    .val());
            });
            return moment(parts.join(this.args.separator),
                this.args.fmt, this.args.locale, true);
        }
    };

    DateEditor.prototype.changed = function (path, data) {
        Editor.prototype.changed.call(this, path, data);
        this.dateMoment(moment(data.value));
    };

    // ------------------------------------------------------------------------------

    // Note: Fletcherish is a checksum implementation alternative
    // that is not currently in use.

    // Fletcher checksum with only the first checkbyte
    // nums: array of integers
    function calculateFletcherish(nums) {
        var sum1 = 0;
        var sum2 = 0;
        _.each(nums, function (n) {
            sum1 = ( sum1 + n ) % 255;
            sum2 = ( sum2 + sum1 ) % 255;
        });
        return 255 - (sum1 + sum2) % 255;
    }

    function checkFletcherish(args) {
        var nums = _.isArray(args) ? args : _.toArray(arguments);
        return calculateFletcherish(nums.splice(0, 7)) == _.last(nums);
    }

    // Returns true if the given configuration number is valid (checksum is OK).
    // numbers: array of 8 integers. Last one is the checksum.
    // If an array item is empty string, it is considered zero.
    function checkConfigurationNumber(numbers) {
/*
        var sum = _.reduce(numbers.slice(0, 7), function (sum, n) {
                return sum + n;
            }, 0) & 0xff;
        var result= (sum == ( _.last(numbers ))) ;
        return result;
*/
        return IoDataHelper.doCheckConfigurationNumber(numbers);

    }

    // Configuration editor.
    // Editor is four hexadecimal fields with checksum checking.
    // Note: Registering is not supported by design.
    ConfigurationEditor.prototype = new Editor;
    ConfigurationEditor.prototype.constructor = ConfigurationEditor;

    function ConfigurationEditor(args) {
        Editor.call(this, args, JST.editorconfiguration);
    }

    ConfigurationEditor.prototype.ready = function (sel, editorData) {
        Editor.prototype.ready.call(this, sel, editorData);
        var self = this;

        // For (minor) security purposes, the current configuration number
        // is not shown to the user. The number editing begins with a
        // clean slate.
        // Note: even the model that the editor sees is typically
        // local data, since configuration is always edited in Dialog.
        var numbers = _.map(_.range(7), _.constant(''));

        this.valid = false;
        // Regex test is needed, since parseInt is non-intuitively forgiving.
        var good = /^\s*[a-f0-9]+\s*$/i;
        this.selector = $(sprintf('[l10n-path="%s"] [dashboard]',
            this.args.path), sel);
        this.selector.focusout(function () {
            var index = $(this).attr('dashboard');
            var s = $(this).val();
            var num = parseInt(s, 0x10);
            if (num >= 0 && good.test(s)) {
                numbers[index] = num;
                self.valid = checkConfigurationNumber(numbers);
                if (self.valid) {
                    // We assign clone just in case.
                    self.data.set(self.args.path, _.clone(numbers));
                }
            } else {
                var old = numbers[index];
                $(this).val(_.isNumber(old) ? sprintf('%x', old) : old);
            }
        })
    };

    ConfigurationEditor.prototype.isValid = function () {

        $('#config-continue-button').toggleClass('ui-disabled');

        $('.dashboard-configuration').toggleClass('dashboard-configuration-invalid');

        _.delay(function(){
            $('.dashboard-configuration').toggleClass('dashboard-configuration-invalid');

            // this will clear code if needed
            //$('.config-editor-fields input').val('');

            $('#config-continue-button').toggleClass('ui-disabled');



        },2000);
        return this.valid;
    };


    // Viewer is kind of a pseudo editor in a sense that it only
    // provides way to present information via Editor interface.
    Viewer.prototype = new Editor;
    Viewer.prototype.constructor = Viewer;

    // [htmlFun]: Function that when called with data will return
    //            the HTML representation for the View. Default
    //            function simply returns the html-escaped data.value
    //            enclosed in <p> tags. Function will also receive 'this' for
    //            the second argument.
    // [styles.viewer]: Style for the enclosing div. Can be any style.
    //                The default style is dashboard-viewer.
    // Note: unlike Editors, Viewers register default is true;
    function Viewer(args) {
        Editor.call(this, _.defaults(args, {register: true}), JST.editorviewer);
        this.args.htmlFun = this.args.htmlFun
        || function (data) {
            return sprintf('<p>%s</p>', _.escape(data.value))
        };
    }

    Viewer.prototype.html = function (containerArgs) {
        this.args.styles = _.defaults(this.styles,
            {
                viewer: containerArgs.itemtype == 'view'
                    ? 'dashboard-view-viewer' : 'dashboard-viewer'
            });
        return Editor.prototype.html.call(this, containerArgs);
    };
    Viewer.prototype.ready = function (sel, editorData) {
        Editor.prototype.ready.call(this, sel, editorData);
        this.selector = $(sprintf('[l10n-path="%s"]', this.args.path), sel);
        if (this.args.autoUpdate) {
            var waitTime = this.args.autoUpdate;
            var self = this;

            function updater(waitTime) {
                self.changed.call(self, self.args.path, L10n.data(self.args.path));
                if (self.myDom == domId) {
                    _.delay(updater, waitTime, waitTime)
                }
            }

            _.delay(updater, waitTime, waitTime)
        }
    };
    Viewer.prototype.changed = function (path, data) {
        Editor.prototype.changed.call(this, path, data);
        this.selector.html(this.args.htmlFun(data, this));
    };

    // Miscellaneous Viewer functions (htmlFun)
    // Service diagnostics test status.

    // Escapes HTML in text and wraps it into P tag.
    function safeP(text) {
        return sprintf('<p>%s</p>', _.escape(text));
    }

    function testStatus(data) {
        var pathStyles = ['skipped', 'ok', 'failed', 'testing', 'cannot'];
        var index = data.value;
        var ps = index < 0 || index >= _.size(pathStyles)
            ? _.last(pathStyles) : pathStyles[index];
        return sprintf('<p><span class="dashboard-test-%s">%s</span><p>',
            ps, _.escape(L10n.str('service.diagnostics.' + ps)))
    }

    // Selection viewer. The listPath argument must be provided with _.partial.
    function selectHtmlFun(listPath, data) {
        var index = findIndex(listPath, data.value);
        return safeP(L10n.str(listPath + '.' + index));
    }

    var momentFormats = {
        time: {twentyfour: 'HH:mm', twelve: 'h:mm a'},
        date: 'l',
        both: {twentyfour: 'l, HH:mm', twelve: 'l, h:mm a'}
    };
    // If value is not moment it is considered delta (in seconds).
    // Options can be given via _.partial.
    // Options:
    // fmt: Moment format (see momentFormats)
    function timeHtmlFun(fmt, data) {
        // Something weird happens with moment locales, when the
        // language (in L10n) is changed. We seem to get around
        // it by cloning the moment and setting the locale explicitly.
        var m = moment.isMoment(data.value)
            ? moment(data.value) : L10n.delta2moment(data.value);
        m.locale(L10n.value('language'));
        var f = fmt;
        if (_.has(fmt, 'twentyfour') && _.has(fmt, 'twelve')) {
            f = L10n.value('wizard.start.twentyfour') ? fmt.twentyfour : fmt.twelve;
        }
        return safeP(m.format(f));
    }

    function switchHtmlFun(data) {
        return safeP(L10n.str(data.value ? 'wizard.on' : 'wizard.off'));
    }

    // Appends the unit to the value.
    // unit: Unit string, will not be escaped.
    function unitHtmlFun(unit, data) {
        return sprintf('<p>%s%s</p>', _.escape(data.value), unit);
    }

    // Similar to unitHtmlFun, but data.unit is used as the unit
    function dataUnitHtmlFun(data) {
        return unitHtmlFun(data.unit, data);
    }

    // Shows duration as 04:01
    function durationHtmlFun(data) {
        var d = {};
        if (data.minutesflag) {
            d.hours = Math.floor(data.value / 60);
            d.minutes = data.value % 60;
        } else {
            d = data.value;
        }
        return safeP(sprintf('%02s:%02s', d.hours, d.minutes));
    }

    // Shows 50% (1200rpm). Amount name is a remnant from earlier confusion
    // but now rpm == amount is deeply fixed everywhere in the code.
    function amountHtmlFun(data) {
        return safeP(sprintf('%s%%',
            data.value, data.amount, L10n.str('wizard.rpm')));
    }

    // ----------------------------------------------------------------------------------
    // Text is a like a viewer that just shows the path string.
    Text.prototype = new Editor;
    Text.prototype.constructor = Text;

    // [styles.text]. Styles for enclosing span.
    // Note: Text is always stacked and does not have value.
    function Text(args) {
        Editor.call(this, _.defaults(args, {noValue: true, stacked: true}),
            JST.editortextviewer);
        this.args.styles = this.styles;
    }


    // Divider is convenience Viewer for adding a divider line
    // between items.
    Divider.prototype = new Editor;
    Divider.prototype.constructor = Divider;

    // Note: Divider is always stacked and does not have value.
    // [styles.divider]: Class used by the divider div (default wizard-hr).
    function Divider(args) {
        Editor.call(this, _.defaults(args || {}, {
                path: 'blank', noLabel: true, stacked: true,
                styles: {divider: 'wizard-hr'}
            }),
            JST.editordivider);
    }

    // ----------------------------------------------------------------------------------
    // Dialogs

    // Arguments:
    // placeholder: dashboard attribute of the matching placeholder.
    // [title]: L10n path to the title.
    // items: widget editors.
    // ok: function called after OK button has been pressed.
    //     The function receives localData instance as argument.
    // [extraSurroundings]: Object with left, top, right and bottom properties that
    //     define extra space around the dialog. Tapping into this "zone" does not
    //     close the dialog. The space without extra surroundings is the area
    //     covered by the dialog placeholder parent.
    function Dialog(args) {
        this.args = args || {};
        this.args.extraSurroundings = _.defaults(this.args.extraSurroundings || {},
            {left: 0, top: 0, right: 0, bottom: 0}
        );
        this.args.itemtype = 'editor';
    }

    // Class methods et al

    Dialog.threshold = 250; // milliseconds
    Dialog.lastShow = moment();
    Dialog.surroundings = null;

    Dialog.closeAll = function () {
        if (moment().diff(Dialog.lastShow, 'milliseconds') > Dialog.threshold) {
            // We close _every_ dialog. This overkill is needed because
            // some other view might have an open dialog that is not visible.
            $('.dashboard-dialog').addClass('dashboard-hide');
            $('.dashboard-dialog-hide').removeClass('dashboard-dialog-hide');
            Dialog.surroundings = null;
        }
        if (!dashboardOptions.cloud) {
            IoDataHelper.uiUpdatesEnabled(true);
            IoDataHelper.skipper(1);
        }
    };

    Dialog.register = function () {
        // Since the handlers' bound selector is $body, there
        // is no need to do the binding more than once. The
        // register function is called from show because we
        // we want to be sure that $body is ready.
        if (!Dialog.registered) {
            var $body = $('body');
            // Cancel button pressed
            if (!dashboardOptions.cloud) {
                IoDataHelper.uiUpdatesEnabled(false);
            }
            $body.on('tap ', '.dashboard-dialog-cancel', Dialog.closeAll);
            function inSurroundings(event) {
                var sel = Dialog.surroundings.selector;
                var offset = sel.offset();
                var extra = Dialog.surroundings.extra;
                var zone = {
                    left: offset.left - extra.left,
                    top: offset.top - extra.top,
                    right: offset.left + sel.outerWidth() + extra.right,
                    bottom: offset.top + sel.outerHeight() + extra.bottom
                };
                var x = event.pageX;
                var y = event.pageY;
                return x >= zone.left && x <= zone.right
                    && y >= zone.top && y <= zone.bottom
            }

            // We use virtual mouse events to make sure
            // that touch devices work as well.

            // since this didn't work with scrolling handler is taken out of use
            /*
             $body.on( 'vmousedown', function( event ) {
             if( Dialog.surroundings && !inSurroundings( event )) {
             Dialog.closeAll();
             }
             });
             */
            // Esc button closes dialogs.
            $body.keydown(function (event) {
                if (event.keyCode == 27) {
                    Dialog.closeAll();
                }
            });

            // Page change closes dialogs.
            $(':mobile-pagecontainer').pagecontainer({
                change: function () {
                    Dialog.closeAll();
                }
            });

            Dialog.registered = true;
        }
    };

    Dialog.prototype = {
        // Shows the dialog
        // $hideWhileShown: selector that denotes the contents
        // that should be hidden when the dialog is visible.

        beforeShow: function() {
            // default implementation is empty
        },

        show: function ($hideWhileShown) {

            this.beforeShow();
            // Just in case
            Dialog.closeAll();

            if (!dashboardOptions.cloud) {
                IoDataHelper.uiUpdatesEnabled(false);
            }
            Dialog.lastShow = moment();
            Dialog.register();

            if ($hideWhileShown) {
                $hideWhileShown.addClass('dashboard-dialog-hide');
            }
            var dialogData = localData();
            var placeholder = $('.dashboard-dialog-placeholder[dashboard='
            + this.args.placeholder + ']');
            placeholder.html(JST.dashboarddialog(this.args));

            _.each(this.args.items, function (item) {
                item.ready(placeholder, dialogData);
            });
            // Tab does move focus on the last item
            $(sprintf('[item-path="%s"]', _.last(this.args.items).path),
                placeholder).keydown(function (event) {
                    if (event.keyCode == 9) {
                        event.preventDefault();
                    }
                });
            var offset = placeholder.parent().offset();
            var extra = this.args.extraSurroundings;
            Dialog.surroundings = {
                selector: placeholder.parent(),
                extra: this.args.extraSurroundings
            };
            var self = this;
            $('.dashboard-dialog-ok', placeholder).on('click', function () {
                var canClose = true;
                _.each(self.args.items, function (item) {
                    // We do not terminate early. It makes
                    // sense to check the validity of every item
                    // in order to give the user the whole picture.
                    canClose = canClose && item.isValid();
                });
                if (canClose) {
                    Dialog.closeAll();
                    self.args.ok(dialogData);
                }
            });
            placeholder.enhanceWithin();
        }
    };

    // -----------------------------------------------------------------------
    // View
    // View is a container of items. The difference between Dialog and View is
    // that the latter is always open and if contains Editors the edits are
    // immediately published. Also, View items must register as L10n listeners.

    // placeholder: dashboard attribute of the matching placeholder.
    // [title]: L10n path to the title.
    // [data=globalData]: Data provider
    // edit: Dialog to be shown when edit button is pressed. If not given
    //       then no button.
    // items: view items
    function View(args) {
        this.args = _.defaults(args || {}, {title: '', data: globalData});
        this.args.itemtype = this.args.itemtype || 'editor'
    }

    // Places the view onto page
    View.prototype.place = function () {
        this.placeholderSel = $(sprintf(".dashboard-view-placeholder[dashboard='%s']",
            this.args.placeholder));
        var html=JST.dashboardview(this.args);
        this.placeholderSel.html(html);
        var self = this;
        if (this.args.items) {
            _.each(this.args.items, function (item) {
                item.ready(self.placeholderSel, self.args.data);
            });
        }
        if (this.args.edit) {
            this.placeholderSel.on('click', sprintf('[dashboard="%s-edit"]',
                    self.args.placeholder),
                function () {
                    self.args.edit.show($(sprintf('[dashboard="%s-view"]',
                        self.args.placeholder)));
                })
        }
        this.placeholderSel.enhanceWithin();
    };

    // ViewPair is a pair of views side by side and possibly sharing a dialog.
    ViewPair.prototype = new View;
    ViewPair.prototype.constructor = ViewPair;

    // views: list of views (currently only two are supported)
    function ViewPair(args) {
        View.call(this, _.defaults(args, {items: []}));
    }

    ViewPair.prototype.place = function () {
        View.prototype.place.call(this);
        this.placeholderSel.append(JST.dashboardviewpair(this.args));
        _.each(this.args.views, function (view) {
            view.place();
        })
    };

    // ----------------------------------------------------------------------------
    // User interface element definitions.
    // Each definition consists of two functions:
    //  - layout: when called will layout the element (creates views, binds event
    //    handlers, ...)
    //  - logic: registers listeners.
    // Note: layout can be called repeatedly (e.g., when the language changes),
    //       but the register is called only once.
    // Note: an element _must_ be independent and should not depend directly on
    //       other elements. In other words, just looking at the element function,
    //       the reader should have a good enough understanding what the tray does.
    // ----------------------------------------------------------------------------
    // Constructor-like function for creating correct UI definitions.
    // [layout]: layout function
    // [logic:]: logic function
    function uiDefinition(args) {
        args = _.defaults(args, {layout: _.noop, logic: _.noop});
        args.logic = _.once(args.logic);
        return function () {
            // The logic is called first, because layout code may
            // trigger model events.
            args.logic();
            args.layout();
        }
    }

    var uiDefs = {expert: {}, service: {}, info: {}, dashboard: {}, settings: {}};

    // ----------------------------------------------------------------------------
    // Expert page UI definitions
    // ----------------------------------------------------------------------------
    uiDefs.expert.ioSettings = function () {
        // Updates the radiogroup for changed data
        // input: group/input name
        // index: radio index.
        function updateRadiogroup(input, index) {
            var groupSel = $('#dashboard-expert-page .dashboard-io-radiogroup[dashboard=' + input + ']');
            replaceClass($('.dashboard-io-radioactive', groupSel),
                'dashboard-io-radio', 'dashboard-io-radioactive');
            replaceClass($('.dashboard-io-radio[dashboard=' + index + ']', groupSel),
                'dashboard-io-radioactive', 'dashboard-io-radio');
        }

        return uiDefinition({
            logic: function () {
                // L10n listeners for I/O Settings
                _.each(L10n.node('expert.io.inputs'), function (input, key) {
                    L10n.register(function (path, data) {
                        var list = key == 'analog' ? 'analog' : 'digital';
                        $('#dashboard-expert-page [l10n-path="' + path + '"]')
                            .html(L10n.str('expert.io.' + list + '.' + data.value));
                        updateRadiogroup(key, data.value);
                    }, 'expert.io.inputs.' + key);
                });
            },
            layout: function () {
                var expertSel = $('#dashboard-expert-page');
                // I/O Settings input selection
                $('.dashboard-io-button', expertSel).on('tap', function () {
                    // Just in case
                    Dialog.closeAll();
                    if (!$(this).hasClass('dashboard-io-active')) {
                        $('.dashboard-io-radiogroup:visible', expertSel).addClass('dashboard-hide');
                        $(".dashboard-io-radiogroup[dashboard='"
                        + $(this).attr('dashboard') + "']", expertSel).removeClass('dashboard-hide');
                        $('.dashboard-io-active', expertSel).removeClass('dashboard-io-active');
                        $(this).addClass('dashboard-io-active');
                    }
                });

                // Radio selection
                $('.dashboard-io-radiogroup [dashboard]', expertSel).on('tap', function () {
                    if (!$(this).hasClass('dashboard-io-radioactive')) {
                        var input = $(this).parent().attr('dashboard');
                        L10n.data('expert.io.inputs.' + input, {value: $(this).attr('dashboard')});
                    }
                });

                // Editor selection
                $('.dashboard-edit', expertSel).on('click', function (event) {
                    event.stopImmediatePropagation();
                    var group = $('.dashboard-io-radiogroup:visible', expertSel);
                    var path = sprintf('expert.io.inputs.%s.programmed', group.attr('dashboard'));
                    new Dialog({
                        placeholder: 'programmed',
                        title: 'expert.io.title',
                        items: [
                            new DurationEditor({path: path + '.duration'}),
                            new SliderEditor({path: path + '.supply', stacked: true}),
                            new SliderEditor({path: path + '.extract', stacked: true}),
                            new SliderEditor({
                                path: path + '.temperature', unit: '&deg;C',
                                min: 5, max: 30, stacked: true
                            }),
                            new SwitchEditor({path: path + '.timerenabled', register: true})

                        ],
                        extraSurroundings: {left: 40, top: 20, right: 40, bottom: 40},
                        ok: function (data) {
                            data.publish()
                        }
                    }).show(group);
                });
            }
        })
    }();

    // Expert: Relay
    uiDefs.expert.relay = uiDefinition(
        {
            layout: function () {
                // Relay
                new View({
                    placeholder: 'relay',
                    title: 'expert.io.relay',
                    items: [
                        new RadioEditor({
                            path: 'expert.io.relay', list: 'expert.io.relay.list',
                            noLabel: true, register: true
                        })
                    ]
                }).place();
            }
        });
    // Expert: Parental controls
    uiDefs.expert.parental = uiDefinition({
        layout: function () {
            // Parental controls
            new View({
                placeholder: 'parental',
                title: 'expert.parental',
                items: [
                    new SwitchEditor({path: 'wizard.access.parental', register: true})
                ]
            }).place();
        }
    });

    // Expert: Configuration
    uiDefs.expert.configuration = function () {
        // Configuration editor is active only for one hour after power up.
        function updateConfigurationState() {
            $('#confignumber').toggleClass('ui-disabled',
                L10n.value('info.status.down') >= 1);
        }

        return uiDefinition({
            logic: function () {
                L10n.register(updateConfigurationState, 'info.status.down');

            },
            layout: function () {
                // Configuration number
                new View({
                    placeholder: 'confignumber',
                    title: 'info.details.config',
                    items: [
                        new Text({
                            path: 'info.details.config.viewer',
                            align: {label: 'center'}
                        })
                    ],
                    edit: new Dialog({
                        placeholder: 'confignumber',
                        title: 'info.details.config',
                        items: [
                            new ConfigurationEditor({
                                path: 'info.details.config',
                                stacked: true, noLabel: true
                            })
                        ],
                        ok: function (data) {
                            data.publish();
                        }
                    })
                }).place();

                updateConfigurationState();
            }
        })
    }();
    // Expert: Fan settings
    uiDefs.expert.fanSettings = uiDefinition({
        layout: function () {
            // Fan settings
            new View({
                placeholder: 'fan',
                title: 'wizard.expert.fan',
                items: [
                    new SliderEditor({path: 'wizard.expert.fan.supply', register: true, stacked: true}),
                    new SliderEditor({path: 'wizard.expert.fan.extract', register: true, stacked: true})
                ]
            }).place();

        }
    });
    // Expert: Antifreeze
    uiDefs.expert.antifreeze = uiDefinition({
        layout: function () {
            // Antifreeze
            new View({
                placeholder: 'antifreeze',
                title: 'expert.antifreeze',
                items: [
                    new SelectEditor({
                        path: 'expert.antifreeze.method',
                        list: 'expert.antifreeze.method.list', register: true, stacked: true
                    }),
                    new SliderEditor({
                        path: 'expert.antifreeze.humidity', register: true,
                        stacked: true
                    }),
                    new SliderEditor({
                        path: 'expert.antifreeze.temperature', register: true,
                        stacked: true
                    })
                ]
            }).place();
        }
    });
    // Expert: Sensors
    uiDefs.expert.sensors = uiDefinition({
        layout: function () {
            // Sensors
            new View({
                placeholder: 'sensors',
                title: 'expert.sensors',
                items: [
                    new SelectEditor({
                        path: 'expert.sensors.adjustment',
                        list: 'expert.sensors.adjustment.list',
                        register: true, stacked: true
                    }),
                    new SelectEditor({
                        path: 'expert.sensors.humidity',
                        list: 'expert.sensors.humidity.list',
                        register: true, stacked: true
                    }),
                    new SliderEditor({
                        path: 'expert.sensors.limits.humidity',
                        register: true, stacked: true
                    }),
                    new SliderEditor({
                        path: 'expert.sensors.limits.co2',
                        register: true, stacked: true
                    })
                ]
            }).place();
        }
    });
    // Expert: Modbus settings
    uiDefs.expert.modbus = uiDefinition({
        layout: function () {
            function index2str(list, data) {
                return sprintf('<p>%s</p>',
                    _.escape(L10n.str(list + '.' + data.value)));
            }

            // Modbus settings
            new View({
                placeholder: 'modbus',
                title: 'expert.modbus',
                itemtype: 'view',
                items: [
                    new Viewer({
                        path: 'expert.modbus.address',
                        styles: {viewer: 'dashboard-view-viewer'}
                    }),
                    new Viewer({
                        path: 'expert.modbus.speed',
                        styles: {viewer: 'dashboard-view-viewer'},
                        htmlFun: _.partial(selectHtmlFun, 'expert.modbus.speed.list')
                    }),
                    new Viewer({
                        path: 'expert.modbus.parity',
                        styles: {viewer: 'dashboard-view-viewer'},
                        htmlFun: _.partial(index2str, 'expert.modbus.parity.list')
                    }),
                    new Viewer({
                        path: 'expert.modbus.endbit',
                        styles: {viewer: 'dashboard-view-viewer'}
                    })
                ],
                edit: new Dialog({
                    placeholder: 'modbus',
                    title: 'expert.modbus',
                    items: [
                        new SliderEditor({
                            path: 'expert.modbus.address',
                            stacked: true
                        }),
                        new SelectEditor({
                            path: 'expert.modbus.speed',
                            list: 'expert.modbus.speed.list'
                        }),
                        new SelectEditor({
                            path: 'expert.modbus.parity',
                            list: 'expert.modbus.parity.list'
                        }),
                        new SelectEditor({
                            path: 'expert.modbus.endbit',
                            list: 'expert.modbus.endbit.list'
                        })
                    ],
                    ok: function (data) {
                        data.publish();
                    }
                })
            }).place();
        }
    });
    // Expert: Save and restore settings
    uiDefs.expert.saveAndRestore = uiDefinition({
        layout: function () {
            // Initial, user and factory settings
            var items = [
                new ButtonEditor({path: 'expert.settings.initial.save', noLabel: true}),
                new ButtonEditor({path: 'expert.settings.initial.load', noLabel: true}),
                new ButtonEditor({path: 'expert.settings.user.save', noLabel: true}),
                new ButtonEditor({path: 'expert.settings.user.load', noLabel: true}),
            ];
            if(!dashboardOptions.cloud) {
                items.push(new ButtonEditor({path: 'expert.settings.factory', noLabel: true}));
            }
            new View({
                placeholder: 'settings',
                title: 'expert.settings',
                items: items
            }).place();
        }
    });

    // ----------------------------------------------------------------------------
    // Service page UI definitions
    // ----------------------------------------------------------------------------
    uiDefs.service.diagnostics = uiDefinition({

        logic: function () {
            var selftestMeta = {};
            L10n.register(function (path, data, meta) {
                if (meta != selftestMeta) {
                    var running = data.value;
                    toggleTicker($('#self-tests-ongoing'), running);
                    // Show/hide the button
                    L10n.data('service.diagnostics.start', {hidden: running},
                        selftestMeta);
                }
            }, 'service.diagnostics.ongoing');
            L10n.register(function (path, data, meta) {
                if (meta != selftestMeta) {
                    L10n.value('service.diagnostics.ongoing', true);
                }
            }, 'service.diagnostics.start');
        },
        layout: function () {
            function viewerList(prefix, paths, args) {
                return _.map(paths, function (path) {
                    return new Viewer(_.defaults({path: prefix + '.' + path}, args));
                })
            }

            var diags = _.flatten([viewerList('service.diagnostics',
                ['efficiency', 'bypass', 'heater', 'preheating'],
                {htmlFun: testStatus}),
                viewerList('service.diagnostics', ['supply', 'cell',
                        'exhaust', 'outdoor', 'extract'],
                    {htmlFun: dataUnitHtmlFun})]);

            // Diagnostics
            new View({
                placeholder: 'diagnostics-left',
                itemtype: 'view',
                items: diags.slice(4)
            }).place();

            new View({
                placeholder: 'diagnostics-right',
                itemtype: 'view',
                items: diags.slice(0, 4)
            }).place();

            new View({
                placeholder: 'run-tests',
                items: [
                    new ButtonEditor({
                        path: 'service.diagnostics.start', label: '',
                        register: true
                    })
                ]
            }).place();
            // We need to toggle the ticker in case the tests are running
            // during layout as the ticker is hidden by default.
            toggleTicker($('#self-tests-ongoing'),
                L10n.value('service.diagnostics.ongoing'));
        }
    });

    uiDefs.service.testMode = function () {

        // Service: Test mode disabling toggle
        function serviceTestModeEnabled(flag) {
            $('#service-test-mode').toggleClass('ui-disabled', !flag);
        }

        return uiDefinition({
            logic: function () {
                L10n.register(function (path, data) {
                    serviceTestModeEnabled(data.value);
                }, 'service.mode');

                var hideZeroMeta = {};
                // Heater types are only shown if non-empty.
                function hideZero(path, data, meta) {
                    if (meta != hideZeroMeta) {
                        L10n.data(path, {hidden: !data.value}, hideZeroMeta);
                    }
                }

                L10n.register(hideZero, 'service.mode.heater.post.type');
                L10n.register(hideZero, 'service.mode.heater.extra.type');
            },
            layout: function () {
                // Mode switch
                new View({
                    placeholder: 'mode-switch',
                    items: [new SwitchEditor({
                        path: 'service.mode', register: true,
                        styles: {label: 'h1'}
                    })]
                }).place();

                new View({
                    placeholder: 'fan-test',
                    title: 'service.mode.fan',
                    styles: {header: ''},
                    items: [
                        new SliderEditor({
                            path: 'service.mode.fan.supply',
                            register: true, stacked: true
                        }),
                        new SliderEditor({
                            path: 'service.mode.fan.extract',
                            register: true, stacked: true
                        })
                    ]
                }).place();

                new View({
                    placeholder: 'heater-test',
                    title: 'service.mode.heater',
                    styles: {header: ''},
                    items: [
                        new Viewer({
                            path: 'service.mode.heater.post.type',
                            htmlFun: _.partial(selectHtmlFun, 'service.mode.heater.post.type.list'),
                            noLabel: true, align: {value: 'left'}, styles: {value: 'tightstack'}
                        }),
                        new SwitchEditor({path: 'service.mode.heater.post', register: true}),
                        new Viewer({
                            path: 'service.mode.heater.extra.type',
                            htmlFun: _.partial(selectHtmlFun, 'service.mode.heater.extra.type.list'),
                            noLabel: true, align: {value: 'left'}, styles: {value: 'tightstack'}
                        }),
                        new SwitchEditor({path: 'service.mode.heater.extra', register: true}),
                        new SelectEditor({
                            path: 'service.mode.heater.flap',
                            list: 'service.mode.heater.flap.list', register: true
                        })
                    ]
                }).place();
                // If the heater type is zero it is hidden (see hideZero above).
                // We force the hiding/showing by triggering the paths.
                L10n.data('service.mode.heater.post.type', {});
                L10n.data('service.mode.heater.extra.type', {});

                serviceTestModeEnabled(L10n.value('service.mode'));
            }
        })
    }();

    uiDefs.service.errorLog = function () {
        // Properties to be shown on the current error view
        var errorProperties = ['first', 'times', 'latest', 'severity'];

        var errorHtmlFuns = {
            severity: function (data) {
                // Only mild and severe errors should be available.
                // The filtering is done in dashboarderrorlog.jst
                return safeP(L10n.str(data.value == 1
                    ? 'service.log.severe' : 'service.log.mild'));
            },
            times: function (data) {
                return safeP(data.value);
            },
            first: _.partial(timeHtmlFun, momentFormats.both),
            latest: _.partial(timeHtmlFun, momentFormats.both)

        };

        function updateErrorLog() {
            var logSel = $('#dashboard-error-log');
            var errors = L10n.value('service.log') || [];
            logSel.html(JST.dashboarderrorlog({
                errors: errors, properties: errorProperties,
                htmlFuns: errorHtmlFuns
            }));
            // The new log must conform to the current access level.
            updateAccessLevel();
            logSel.enhanceWithin();
        }

        return uiDefinition({
            logic: function () {
                L10n.register(updateErrorLog, 'service.log');
                L10n.register(updateErrorLog, 'wizard.start.twentyfour');
            },
            layout: function () {
                // These must match the array indexes in dashboarderroritem.jst
                var ERROR_STATUS = {active: 1, solved: 2};

                var logSel = $('#dashboard-error-log');

                // Error properties button.
                // Updates UI: disable button, update log
                // Notifies via L10n: service.log.acknowledge -value is the error index.
                logSel.on('click', '[errorindex]', function () {
                    var index = $(this).attr('errorindex');
                    var error = L10n.value('service.log')[index];
                    error.status = ERROR_STATUS.solved;
                    $(sprintf('.dashboard-error-status[dashboard="%s"]', index), logSel)
                        .html(_.escape(L10n.str('service.log.solved')));
                    L10n.value('service.log.acknowledge', index);
                    $(this).addClass('ui-disabled');
                });

                updateErrorLog();
            }
        })
    }();

    uiDefs.service.defrost = uiDefinition({
        logic: function () {
            var defrostMeta = {};
            L10n.register(function (path, data, meta) {
                if (meta != defrostMeta) {
                    var running = data.value;
                    toggleTicker($('#defrosting-ongoing'), running);
                    // Show/hide button
                    L10n.data('service.defrost.start', {hidden: running},
                        defrostMeta);
                }
            }, 'service.defrost.ongoing');
            L10n.register(function (path, data, meta) {
                if (meta != defrostMeta) {
                    L10n.value('service.defrost.ongoing', true);
                }
            }, 'service.defrost.start');
        },
        layout: function () {
            // Cell defrost
            new View({
                placeholder: 'defrost',
                title: 'service.defrost',
                items: [
                    new Text({path: 'service.defrost.info'}),
                    new ButtonEditor({
                        path: 'service.defrost.start',
                        label: '', styles: {value: 'button'},
                        register: true
                    })
                ]
            }).place();
            // We need to toggle the ticker in case the defrosting
            // is ongoing during layout as the ticker is hidden by default.
            toggleTicker($('#defrosting-ongoing'),
                L10n.value('service.defrost.ongoing'));
        }
    });

    // ----------------------------------------------------------------------------
    // Info page UI definitions
    // ----------------------------------------------------------------------------

    uiDefs.info.unitStatus = uiDefinition({
        layout: function () {

            function usedDaysHtmlFun(data) {
                var s = null;
                var yUnit = L10n.str('years');
                var dUnit = L10n.str('days');
                var days = Math.floor(moment.duration(data.value.hours,
                    'hours').asDays());
                if (data.value.years) {
                    s = sprintf("%s %s %s %s",
                        data.value.years, yUnit, days, dUnit)
                } else {
                    s = sprintf("%s %s", days, dUnit);
                }
                return safeP(s);
            }

            function downDaysHtmlFun(data) {
                return safeP(sprintf('%s %s',
                    Math.floor(moment.duration(data.value,
                        'hours').asDays()),
                    L10n.str('days')))
            }

            // Unit status
            new View({
                placeholder: 'unitstatus',
                title: 'info.status',
                limit: VERY_LIMITED,
                itemtype: 'view',
                items: [
                    new Viewer({
                        path: 'info.status.power',
                        htmlFun: switchHtmlFun
                    }),
                    new Viewer({
                        path: 'info.status.down',
                        htmlFun: downDaysHtmlFun
                    }),
                    new Viewer({
                        path: 'info.status.used',
                        htmlFun: usedDaysHtmlFun
                    })
                ],
                edit: new Dialog({
                    placeholder: 'unitstatus',
                    title: 'info.status',
                    items: [
                        new SwitchEditor(( {path: 'info.status.power'})),
                        new Viewer({
                            path: 'info.status.down',
                            htmlFun: downDaysHtmlFun
                        }),
                        new Viewer({path: 'info.status.used', htmlFun: usedDaysHtmlFun})
                    ],
                    ok: function (data) {
                        data.publish();
                    }
                })
            }).place();
        }
    });

    uiDefs.info.unitTime = uiDefinition({
        layout: function () {
            // Unit time
            new View({
                placeholder: 'unittime',
                title: 'info.time',
                itemtype: 'view',
                items: [
                    new Viewer({
                        path: 'wizard.start.date',
                        htmlFun: _.partial(timeHtmlFun, momentFormats.date)
                    }),
                    new Viewer({
                        path: 'wizard.start.time', autoUpdate: 800,
                        htmlFun: _.partial(timeHtmlFun, momentFormats.time)
                    }),
                    new Viewer({path: 'wizard.start.dst', htmlFun: switchHtmlFun}),
                    new Viewer({path: 'wizard.start.twentyfour', htmlFun: switchHtmlFun})
                ],
                edit: new Dialog({
                    placeholder: 'unittime',
                    title: 'info.time',
                    items: [
                        new DateEditor({path: 'wizard.start.date'}),
                        new TimeEditor({path: 'wizard.start.time'}),
                        new SwitchEditor({path: 'wizard.start.dst'}),
                        new SwitchEditor({path: 'wizard.start.twentyfour'})
                    ],
                    ok: function (data) {
                        data.publish();
                    }
                })
            }).place();
        }
    });

    uiDefs.info.language = uiDefinition({
        logic: function () {
            // Language is the exception to the rule:
            // The listener is registered outside since
            // the language change can affect either Dashboard
            // or Wizard (see below).
        },
        layout: function () {
            new View({
                placeholder: 'unitlanguage',
                title: 'language',
                items: [
                    new SelectEditor({
                        path: 'language', list: 'language.list',
                        noLabel: true, register: true
                    })
                ]
            }).place();

        }
    });

    uiDefs.info.unitDetails = uiDefinition({
        layout: function () {
            // Unit details
            new View({
                placeholder: 'unitdetails',
                title: 'info.details',
                itemtype: 'view',
                items: _.map(['model', 'serial', 'type'], function (s) {
                    return new Viewer({path: 'info.details.' + s})
                })
            }).place();
        }
    });

    uiDefs.info.unitDiagnostics = uiDefinition({
        layout: function () {
            // Diagnostics
            new View({
                placeholder: 'unitdiagnostics',
                title: 'info.diagnostics',
                itemtype: 'view',
                items: _.flatten([
                    _.map(['software', 'rh', 'co2'], function (s) {
                        return new Viewer({path: 'info.diagnostics.' + s})
                    }),
                    new Viewer({
                        path: 'info.diagnostics.hand',
                        htmlFun: _.partial(selectHtmlFun, 'info.diagnostics.hand.list')
                    })
                ])
            }).place();
        }
    });

    // ----------------------------------------------------------------------------
    // Dashboard page UI definitions
    // ----------------------------------------------------------------------------

    uiDefs.dashboard.profiles = function () {

        // If flag is true the selector is hidden.
        function hideSelector(sel, flag) {
            sel.toggleClass('dashboard-hide', !!flag);
        }

        // Makes sure that the profile view is in sync
        // with the selected profile. The view includes
        // radio buttons and the text view.
        function updateProfileView() {
            // Just in case
            Dialog.closeAll();
            var p = L10n.value('dashboard.profile');
            // Radio buttons
            var radioSel = $('#profileradios');
            $('.dashboard-io-button', radioSel)
                .removeClass('dashboard-io-active');
            $(sprintf('.dashboard-io-button[dashboard="%s"]', p))
                .addClass('dashboard-io-active');
            var textSel = $('#profiletext');
            // Hide every profile View
            hideSelector($('[profile]', textSel), true);
            // Show selected. Its container might still be hidden.
            hideSelector($(sprintf('[profile="%s"]', p), textSel),
                false);
        }

        function updateSymbolsView() {
            var p = L10n.value('dashboard.profile.active');
            var sel = $('#profilesymbols');
            // Hide every profile View
            hideSelector($('[profile]', sel), true);
            // Show selected. Its container might still be hidden.
            hideSelector($(sprintf('[profile="%s"]', p), sel),
                false);
            // Update fan symbol
            // home: medium
            // away: small
            // boost: big
            // fireplace: medium
            var fans = [1, 0, 2, 1];
            L10n.value('dashboard.profile.symbols.fan', fans[p]);
        }


        // Updates given symbol on the Dashboard view.
        // symbol: rh or co2
        function updateSymbol(symbol) {
            var icon = L10n.value('dashboard.profile.symbols.' + symbol);
            var sel = $('#dashboard-dashboard-page #' + symbol);
            _.each(_.range(4), function (i) {
                sel.toggleClass(sprintf('dashboard-%s-%s', symbol, i), icon == i);
            })
        }

        var profileActivationMeta = {};

        function updateActiveProfile() {
            var active = L10n.value('dashboard.profile.active');
            // Radio buttons
            var radioSel = $('#profileradios');
            $('.dashboard-profile-radio-fan', radioSel)
                .removeClass('dashboard-profile-radioactive');
            $(sprintf('.dashboard-profile-radio-fan[dashboard="%s"]', active))
                .addClass('dashboard-profile-radioactive');

            _.each(_.range(4), function (i) {
                L10n.data(sprintf('dashboard.profile.list.%s.activate', i),
                    {value: i == active, disabled: i == active},
                    profileActivationMeta);
            });
        }

        function activateProfile(index, path, data, meta) {
            if (meta != profileActivationMeta && data.value) {
                L10n.value('dashboard.profile.active', index);
            }
        }

        var co2SwitchPaths = _.flatten(_.map(['home', 'away', 'boost'], function (p) {
            var pPaths = profilePaths(p);
            return [pPaths.switches.co2, pPaths.co2];
        }));

        function updateCo2Visibility() {
            var visible = L10n.value('info.diagnostics.co2');
            _.each(co2SwitchPaths, function (path) {
                L10n.data(path, {hidden: !visible});
            })
        }

        return uiDefinition({
            logic: function () {
                // Disables the profile property according to given data.
                // If data.value is false then the property is disabled.
                // propertyPath: profilePaths result
                function disableProfileProperty(propertyPath, path, data) {
                    L10n.data(propertyPath, {disabled: !data.value});
                }

                // Timer switches and duration active
                _.each(['boost', 'fireplace'], function (p) {
                    var pPaths = profilePaths(p);
                    L10n.register(_.partial(disableProfileProperty, pPaths.duration),
                        pPaths.timer);
                });

                // Humidity and CO2 switches vs. Humidity and CO2 values
                // All this is confusing since there are three different
                // co2/humidity fields:
                //   - Switch
                //   - Dummy that is used to show enabled/disabled
                //   - The actual value that is common for every profile.
                _.each(['home', 'away', 'boost'], function (p) {
                    var pPaths = profilePaths(p);
                    L10n.register(_.partial(disableProfileProperty, pPaths.humidity),
                        pPaths.switches.humidity);
                    L10n.register(_.partial(disableProfileProperty, pPaths.co2),
                        pPaths.switches.co2);
                    // CO2 and Humidity values shown in the text view are
                    // actually switch viewers in order to reflect active state.
                    // Thus, the changes in the actual values must trigger
                    // switch notifications.
                    function trigger(path) {
                        L10n.data(path, {});
                    }

                    L10n.register(_.partial(trigger, pPaths.co2),
                        'dashboard.profile.co2');
                    L10n.register(_.partial(trigger, pPaths.humidity),
                        'dashboard.profile.humidity');
                });
                _.each(_.range(4), function (i) {
                    L10n.register(_.partial(activateProfile, i),
                        sprintf('dashboard.profile.list.%s.activate', i))
                });

                L10n.register(updateActiveProfile, 'dashboard.profile.active');
                L10n.register(updateProfileView, 'dashboard.profile');
                L10n.register(updateSymbolsView, 'dashboard.profile.active');
                _.each(['fan', 'rh', 'co2'], function (sym) {
                    L10n.register(_.partial(updateSymbol, sym), 'dashboard.profile.symbols.' + sym);
                });
                // Profile CO2-elements (viewer and switch) are not visible
                // if there are not any CO2 sensors installed.
                L10n.register(updateCo2Visibility, 'info.diagnostics.co2');

            },
            layout: function () {

                // Profile text views and the items below icons.
                function profileViews(profile) {
                    var p = profilePaths(profile);
                    var viewItems = [];
                    var picViewItems = [];
                    var editItems = [];
                    if (profile != 'fireplace') {
                        viewItems.push(
                            new Viewer({
                                path: p.fanspeed,
                                htmlFun: _.partial(unitHtmlFun, '%')
                            }),
                            new Viewer({
                                path: p.supply,
                                htmlFun: _.partial(unitHtmlFun, ' &deg;C')
                            }),
                            // We'll use this viewer's state, but show the
                            // global humidity and co2.
                            new Viewer({
                                path: p.humidity,
                                htmlFun: _.compose(_.partial(unitHtmlFun, '%'),
                                    function () {
                                        return L10n.data('dashboard.profile.humidity');
                                    })
                            }),
                            new Viewer({
                                path: p.co2,
                                htmlFun: _.compose(_.partial(unitHtmlFun, 'ppm'),
                                    function () {
                                        return L10n.data('dashboard.profile.co2');
                                    })
                            })
                        );
                        // Global fanspeed
                        picViewItems.push(new Viewer({
                                path: 'dashboard.profile.fanspeed',
                                htmlFun: _.partial(dataUnitHtmlFun),
                                align: {label: 'right', value: 'left'},
                                styles: {viewer: 'dashboard-view-viewer'}
                            })
                        );
                        editItems.push(
                            new SliderEditor({path: p.fanspeed, stacked: true}),
                            new SliderEditor({path: p.supply, stacked: true}),
                            new SwitchEditor({path: p.switches.humidity}),
                            new SwitchEditor({path: p.switches.co2})
                        );
                    }
                    if (profile == 'fireplace') {
                        viewItems.push(
                            new Viewer({path: p.supply, htmlFun: amountHtmlFun}),
                            new Viewer({path: p.extract, htmlFun: amountHtmlFun})
                        );
                        picViewItems.push(
                            new Viewer({
                                path: p.supply, htmlFun: amountHtmlFun,
                                align: {label: 'right', value: 'left'},
                                styles: {viewer: 'dashboard-view-viewer'}
                            }),
                            new Viewer({
                                path: p.extract, htmlFun: amountHtmlFun,
                                align: {label: 'right', value: 'left'},
                                styles: {viewer: 'dashboard-view-viewer'}
                            })
                        );
                        editItems.push(
                            new SliderEditor({path: p.supply, stacked: true}),
                            new SliderEditor({path: p.extract, stacked: true})
                        )
                    }
                    if (_.contains(['boost', 'fireplace'], profile)) {
                        viewItems.push(
                            new Viewer({
                                path: p.duration,
                                htmlFun: durationHtmlFun
                            })
                        );
                        editItems.push(
                            new SwitchEditor({path: p.timer}),
                            new DurationEditor({path: p.duration, alwaysEnabled: true})
                        );
                    }
                    viewItems.push(
                        new Viewer({
                            path: 'dashboard.profile.cell',
                            htmlFun: _.partial(selectHtmlFun, 'dashboard.profile.cell.list')
                        }),
                        new Text({path: 'blank'}),
                        new ButtonEditor({
                            path: p.activate, register: true, noLabel: true,
                            align: {value: 'activate'}
                        })
                    );

                    new View({
                        placeholder: profile + 'text',
                        styles: {title: 'dashboard-' + profile + '-title'},
                        title: p.path,
                        limit: VERY_LIMITED,
                        itemtype: 'view',
                        items: viewItems,
                        edit: new Dialog({
                            placeholder: profile + 'text',
                            title: p.path,
                            items: editItems,
                            extraSurroundings: {top: 20, right: 40, bottom: 40, left: 20},
                            ok: function (data) {
                                data.publish()
                            }
                        })
                    }).place();
                    new View({
                        placeholder: profile + 'pic',
                        itemtype: 'picview',
                        items: picViewItems
                    }).place();
                }

                _.each(['home', 'away', 'boost', 'fireplace'], function (p) {
                    profileViews(p);
                });

                $('#profileradios').on('click', '.dashboard-io-button', function () {
                    L10n.value('dashboard.profile', $(this).attr('dashboard'));
                });

                updateActiveProfile();
                updateProfileView();
                updateCo2Visibility();
                updateSymbolsView();

                _.each(['fan', 'rh', 'co2'], updateSymbol);
            }
        })
    }();

    // Current temperatures and the swoosh.
    uiDefs.dashboard.temperatures = function () {
        // Updates "swoosh" (aka the in-out air diagram) image.
        // There are three alternatives: plain, week clock or fireplace
        function updateSwoosh() {
            var $swoosh = $('#swoosh');
            var now = L10n.value('dashboard.week') ? 'clock' : 'plain';
            if (L10n.value('dashboard.profile.active') == 3) {
                now = 'fireplace'
            }
            _.each(['plain', 'clock', 'fireplace'], function (s) {
                $swoosh.toggleClass(sprintf('dashboard-swoosh-%s', s),
                    now == s)
            })
        }

        return uiDefinition({
            logic: function () {
                L10n.register(updateSwoosh, 'dashboard.profile.active');
                L10n.register(updateSwoosh, 'dashboard.week');
            },
            layout: function () {
                function centigradeViewer(path, align) {
                    align = align || 'center';
                    return new Viewer({
                        path: 'dashboard.now.' + path, stacked: true, noLabel: true,
                        align: {value: align}, htmlFun: function (data) {
                            return sprintf('<p>%s &deg;C</p>', data.value);
                        }, styles: {viewer: 'dashboard-now-viewer'}
                    });
                }

                function nowText(path) {
                    return new Text({
                        path: 'dashboard.now.' + path + '.label',
                        align: {label: 'center'}
                    })
                }

                // Current temperatures
                new View({
                    placeholder: 'nowleft',
                    itemtype: 'now',
                    items: [
                        nowText('indoor'),
                        centigradeViewer('indoor'),
                        new Divider({styles: {divider: 'dashboard-now-divider'}}),
                        centigradeViewer('supply'),
                        nowText('supply')
                    ]
                }).place();

                new View({
                    placeholder: 'nowright',
                    itemtype: 'now',
                    items: [
                        nowText('outdoor'),
                        centigradeViewer('outdoor'),
                        new Divider({styles: {divider: 'dashboard-now-divider'}}),
                        centigradeViewer('exhaust'),
                        nowText('exhaust')
                    ]
                }).place();

                // Profile temperature visuals
                new View({
                    placeholder: 'leftvisual',
                    itemtype: 'now',
                    items: [
                        centigradeViewer('supply', 'right'),
                        new Text({path: 'dashboard.now.supply.swoosh', align: {label: 'right'}})
                    ]
                }).place();

                new View({
                    placeholder: 'rightvisual',
                    itemtype: 'now',
                    items: [
                        new Text({path: 'dashboard.now.outdoor.swoosh', align: {label: 'left'}}),
                        centigradeViewer('outdoor', 'left')
                    ]
                }).place();


                updateSwoosh();
            }
        })
    }();

    uiDefs.dashboard.sensors = function () {
        // Sensordata visibility manipulation
        function sensorsVisibility(path, data) {
            var sPath = path + '.sensors';
            if (L10n.value(path) != 0) {

                _.each(L10n.node(sPath), function (s, i) {
                    L10n.data(sPath + '.' + i, {hidden: i >= data.value})
                })


            }
        }

        return uiDefinition({
            logic: function () {
                L10n.register(sensorsVisibility, 'info.diagnostics.rh');
                L10n.register(sensorsVisibility, 'info.diagnostics.co2');
            },
            layout: function () {

                // Creates a list of sensor viewers
                // part: path part. Either rh or co2
                // txt: TextMap property. Either 'humidity' or 'co2'
                function sensorViewers(part, txt) {
                    var path = sprintf('info.diagnostics.%s.sensors', part);
                    return _.map(L10n.node(path),
                        function (s, i) {
                            return new Viewer({
                                path: path + '.' + i,
                                htmlFun: dataUnitHtmlFun,
                                label: L10n.str(txt) + ' ' + (i + 1)
                            })
                        }
                    )
                }

                // All the sensors. Max 10 rh, 10 co2
                new View({
                    placeholder: 'sensordata',
                    title: 'dashboard.sensordata',
                    itemtype: 'view',
                    items: _.flatten([
                        sensorViewers('rh', 'humidity'),
                        sensorViewers('co2', 'co2')
                    ])
                }).place();

                // Bootstrapping the sensors view just in case
                // the model is ready before Dashboard.

                _.each(['rh', 'co2'], function (s) {
                    var path = 'info.diagnostics.' + s;
                    sensorsVisibility(path, L10n.data(path));
                });
            }
        })
    }();

    uiDefs.dashboard.filters = uiDefinition({
        logic: function () {
            // Dashboard filter change
            // Changing either the changed date or the interval forces the recalculation
            // of next.
            function pingNext() {
                L10n.value('dashboard.filter.next', _.uniqueId('ping:'));
            }

            L10n.register(pingNext, 'dashboard.filter.changed');
            L10n.register(pingNext, 'dashboard.filter.interval');
        },
        layout: function () {

            // Filter status
            new View({
                placeholder: 'filter',
                limit: VERY_LIMITED,
                title: 'dashboard.filter',
                itemtype: 'view',
                items: [
                    new Viewer({
                        path: 'dashboard.filter.changed',
                        htmlFun: _.partial(timeHtmlFun, momentFormats.date)
                    }),
                    new Viewer({
                        path: 'dashboard.filter.next',
                        htmlFun: function (data) {
                            var html = '<p>---</p>'; // Fallback
                            var changed = moment(L10n.value('dashboard.filter.changed'));
                            var interval = parseInt(L10n.value('dashboard.filter.interval'));
                            if (_.isNumber(interval) && changed.isValid()) {
                                var next = changed.add(30 * interval, 'days');
                                if (moment().isAfter(next)) {
                                    html = sprintf('<p class="dashboard-change-filter">%s</p>',
                                        _.escape(L10n.str('dashboard.filter.reminder')));
                                } else {
                                    next.locale(L10n.value('language'));
                                    html = safeP(next.format(momentFormats.date));
                                }
                            }
                            return html;
                        }
                    }),
                    new Viewer({
                        path: 'dashboard.filter.interval',
                        htmlFun: function (data) {
                            return sprintf('<p>%s %s</p>', _.escape(data.value),
                                _.escape(L10n.str('dashboard.filter.months')))
                        }
                    }),
                    new Text({path: 'blank'}),
                    new Viewer({
                            path: 'dashboard.filter.ad',
                            htmlFun: function (data) {
                                // Assumption: url format is www.something.domain
                                //var re = /(filters\.[^\.]+\.[a-z]+)/i;
                                var re = /((?:www|filters)\.\S+)/i;
                                return sprintf('<p>%s</p>',
                                    _.escape(L10n.str('dashboard.filter.ad')).replace(re,
                                        '<a target="_blank" href="http://$1">$1</a>')
                                );
                            }, stacked: true, noLabel: true, align: {value: 'center'}
                        }
                    )
                ],
                edit: new Dialog({
                    placeholder: 'filter',
                    title: 'dashboard.filter',
                    items: [
                        new DateEditor({path: 'dashboard.filter.changed'}),
                        new SliderEditor({
                            path: 'dashboard.filter.interval',
                            label: sprintf('%s (%s)',
                                L10n.str('dashboard.filter.interval'),
                                L10n.str('dashboard.filter.months')
                            ),
                            unit: ' ',
                            stacked: true
                        })
                    ],
                    ok: function (data) {
                        data.publish();
                    }
                })
            }).place();
        }
    });

    uiDefs.dashboard.weekClock = function () {

        // Format used in the dashboard-time attribute in the week clock cells.
        var WEEK_TIME_FORMAT = 'HH:mm d';

        // Clears the week clock.
        // If clearModel is true, the model data is cleared too.
        function clearWeek(clearModel) {
            var $week = $('#weekclock');
            $('.dashboard-week-cell', $week).html('');
            var oldval = L10n.value('dashboard.week.clear');
            if (clearModel) {
                L10n.data('dashboard.week.cells').marks = {};
                L10n.value('dashboard.week.cells', _.uniqueId('clear:'), weekMeta);
//            L10n.value( 'dashboard.week.clear', oldval+1, weekMeta );

            }
            // We'll do the disabling with selectors (outside of L10n), because
            // it is simpler approach.
            $('#clearweek').toggleClass('ui-disabled',
                !_.size(L10n.data('dashboard.week.cells').marks))
        }


        // Week clock selectors and backgrounds. The list is in the temporal order.
        var weekCellBackgrounds = [];

        // Updates the backgrounds.
        // The approach is quite simple: weekCellBackgrounds is iterated
        // while keeping tab of the current active background. Profile
        // marks change the active background going forward.
        // [startBackground]: initially active background. The default value
        //   is the background of the last cell (since the backgrounds wrap
        //   around the week).
        function updateCellBackgrounds(startBackground) {
            var marks = L10n.data('dashboard.week.cells').marks;

            if ((weekCellBackgrounds != null) && (weekCellBackgrounds.length > 0)) {

                var current = _.size(marks) ? startBackground || _.last(weekCellBackgrounds).background : 'home';

                _.each(weekCellBackgrounds, function (bg) {
                    var profile = marks[bg.time];
                    if (startBackground && (profile || bg.background == current)) {
                        // Second round, match found, we can terminate.
                        return false;
                    }
                    if (profile) {
                        // The cell has profile mark. New current background.
                        current = profile;
                        if (bg.background) {
                            // Profile marks do not have background.
                            bg.selector.removeClass('dashboard-continue-' + bg.background);
                            bg.background = '';
                        }
                    } else {
                        if (current != bg.background) {
                            // Current overrides the old background.
                            replaceClass(bg.selector,
                                'dashboard-continue-' + current,
                                'dashboard-continue-' + bg.background);
                            bg.background = current;
                        }
                    }
                });
                var first = weekCellBackgrounds[0];
                if (first.background != current && !marks[first.time]) {
                    // Backgrounds do not wrap correctly. We need to do
                    // a second round. Note that the second round ends when
                    // the background is in sync (typically at the first profile mark).
                    updateCellBackgrounds(current);
                }

            }
        }


        // Unique object used as the change origin identifier
        var weekMeta = {};
        // This is needed to avoid unnecessary (double) update on
        // the cell backgrounds when the unbuffered communication
        // is used for the Local Web UI.
        var weekMetaIgnore = {};

        function updateWeek(path, data, meta) {
            // We only update the UI, if the change is not initiated by the user.
            if (meta != weekMeta && meta != weekMetaIgnore) {
                clearWeek();
                var $week = $('#weekclock');
                _.each(data.marks, function (profile, time) {
                    var sel = $(sprintf('[dashboard-time="%s"]', time),
                        $week);
                    sel.html(JST.dashboardcell({
                        profile: profile,
                        time: moment(time, WEEK_TIME_FORMAT, true
                        )
                    }));
                });
            }
            if (meta != weekMetaIgnore) {
                updateCellBackgrounds();
            }
        }


        return uiDefinition({
            logic: function () {
                // Week clock enable/disable
                L10n.register(function (path, data) {
                    $('#weekclock').toggleClass('ui-disabled', !data.value);
                }, 'dashboard.week');
                // Note: since the first argument is path, clearWeek will
                // update/clear the model as well.
                L10n.register(clearWeek, 'dashboard.week.clear');
                L10n.register(updateWeek, 'dashboard.week.cells');

                L10n.register(function (path, data) {
                    var fmt = data.value ? 'HH:mm' : 'h:mm a';
                    var $week = $('#weekclock');
                    $('.dashboard-week-side', $week).each(function () {
                        $(this).html(_.escape(moment($(this).attr('dashboard-time'), 'HH:mm', true)
                            .format(fmt)))
                    });
                    updateWeek('', L10n.data('dashboard.week.cells'));
                }, 'wizard.start.twentyfour');
            },
            layout: function () {
                // Week clock header
                new View({
                    placeholder: 'weekclock',
                    items: [
                        new SwitchEditor({
                            path: 'dashboard.week', register: true,
                            styles: {label: 'h1'}
                        })
                    ]
                }).place();

                // Clear the whole week.
                new View({
                    placeholder: 'clearweek',
                    items: [
                        new ButtonEditor({
                            path: 'dashboard.week.clear',
                            styles: {value: 'button'}, noLabel: true,
                            confirmationString: _.map(L10n.node('dashboard.week.confirmation'),
                                function (n, i) {
                                    return L10n.str('dashboard.week.confirmation.' + i);
                                }
                            ).join(' ')
                        })
                    ]
                }).place();

                var tapper = null;

                // FastClick library empowers us to use click without
                // needing to worry about delays or ghosts.
                $('.dashboard-week-cell').click(function () {
                    var profs = ['home', 'away', 'boost', false];
                    var path = 'dashboard.week.cells';
                    var marks = L10n.data(path).marks;
                    var time = $(this).attr('dashboard-time');
                    var index = _.indexOf(profs, marks[time]);
                    var profile = index < 0 ? 'home' : profs[index + 1];
                    if (profile) {
                        $(this).html(JST.dashboardcell({
                            profile: profile, time: moment(time, WEEK_TIME_FORMAT, true)
                        }));
                        marks[time] = profile;
                        console.log("time:" + time + "profile:" + profile);
                    } else {
                        $(this).html('');
                        delete marks[time];
                    }
                    $('#clearweek').toggleClass('ui-disabled', !_.size(marks));
                    // The communication with the REST API on the cloud implements
                    // buffering and filtering, so there is no need to throttle the event flow.
                    if (dashboardOptions.cloud) {
                        L10n.value(path, _.uniqueId('ui:'), weekMeta);
                    } else {
                        if (tapper != null) {
                            clearTimeout(tapper);
                            tapper = null;
                        }
                        // We update the UI right away and the model later.
                        // This way the user feedback is not tied to the
                        // communication implementation.
                        updateCellBackgrounds();
                        tapper = _.delay(function () {
                            L10n.value(path, _.uniqueId('ui:'), weekMetaIgnore);
                        }, 2000);
                    }
                });

                weekCellBackgrounds = function () {
                    // End of Sunday
                    var m = moment('23:00 0', 'HH:mm d', true);

                    return _.map(_.range(7 * 24), function () {
                        var time = m.add(1, 'hour').format('HH:mm d');
                        return {
                            time: time,
                            selector: $(sprintf('.dashboard-week-cell[dashboard-time="%s"]',
                                time)),
                            background: 'home'
                        }
                    })
                }();

                updateWeek('', L10n.data('dashboard.week.cells'));
            }
        })
    }();

    uiDefs.dashboard.graphs = uiDefinition({
        layout: function () {
            // Graph buttons: refresh
            new View({
                placeholder: 'graphbuttons',
                items: [
                    new ButtonEditor({
                        path: 'dashboard.graphs.refresh', noLabel: true,
                        styles: {value: 'button'}
                    })
                ]
            }).place();
        }
    });

    // ----------------------------------------------------------------------------
    // Settings page UI definitions
    // ----------------------------------------------------------------------------
    uiDefs.settings.cloud = uiDefinition({
        logic: function () {

            var cloudMeta = {};

            function cloudConnect(path, data, meta) {
                if (meta != cloudMeta) {
                }
            }

        },
        layout: function () {
            new View({
                placeholder: 'cloud',
                items: [
                    //connect button
                    new ButtonEditor({
                        path: 'cloud.connect',
                        label: L10n.str('cloud.notconnected'), register: true
                    }),
                    //disconnect button
                    new ButtonEditor({
                        path: 'cloud.disconnect',
                        label: L10n.str('cloud.connected'), register: true
                    }),
                    //connecting button
                    new ButtonEditor({
                        path: 'cloud.connecting',
                        label: L10n.str('cloud.connecting.message'), register: true
                    }),
                    //error button
                    new ButtonEditor({
                        path: 'cloud.fail',
                        label: L10n.str('cloud.fail.message'), register: true
                    }),
                    //prepareupdate button
                    new ButtonEditor({
                        path: 'cloud.prepareupdate',
                        label: L10n.str('cloud.prepareupdate.message'), register: true
                    }),
                    //updatebutton
                    new ButtonEditor({
                        path: 'cloud.update',
                        label: L10n.str('cloud.update.message'), register: true
                    }),

                    new Viewer({path: 'cloud.user'})
                ]
            }).place();
        }
    });


    /**
     * Lock code change dialog in addtion to lock code box
     * Since: V1.2
     * Allows user to change lock code. User needs to enter correct old code and two times new code
     *
     */
    uiDefs.settings.pin = function () {

        function loginResponse() {

            var pageSel = $('#dashboard-settings-page');

            // The response is either accepted, denied or enabled.
            var rsp = L10n.value('settings.response');
            $('.dashboard-locked', pageSel).toggleClass('ui-disabled',rsp != 'accepted');
            // if response is accepted then lock the whole PIN UI
            $('.dashboard-lock-freeze', pageSel).toggleClass('ui-disabled',rsp == 'accepted');
            var pinSel = $('[l10n-path="settings.pin"]', pageSel);
            pinSel.toggleClass('dashboard-pin-invalid', rsp == 'denied');
            // toggle icon
            $('.dashboard-lock-position', pageSel).toggleClass('dashboard-lock-locked',rsp != 'accepted');
            $('.dashboard-lock-position', pageSel).toggleClass('dashboard-lock-unlocked',rsp == 'accepted');

            /*
            var psel=$('#pin-edit-icon');
            psel.toggleClass('dashboard-pin-edit-dimmed',rsp != 'accepted');
            psel.toggleClass('dashboard-pin-edit',rsp == 'accepted');
            */

            L10n.value('settings.pin', '0000');
            // We'll clear the login with node in order to avoid triggering event.
            L10n.node('settings.login').data.value = '';


            if (rsp=='accepted'){
                //hideSelector($('.dashboard-pincode'),true);
            }

        }

        return uiDefinition({
            logic: function () {

                L10n.register(function () {
                    L10n.value('settings.login', L10n.value('settings.pin'))
                }, 'settings.unlock');

                L10n.register(loginResponse, 'settings.response');
            },
            layout: function () {
                // PIN

                function areCodesValid() {
                    var pw = this.data.data['settings.changepin.oldpin'];
                    var npw = this.data.data['settings.changepin.newpin'];
                    var npw2 = this.data.data['settings.changepin.newpin2'];
                    var go = false;
                    if ((pw == IoGlobal.EXT_DATA_UC) && (pw!='')) {

                        if ((npw = npw2) && (npw!='') && (npw2!='')) {
                            go = true;
                        }
                    }

                    if (!go) {

                        $('.dashboard-pin').toggleClass('dashboard-pin-invalid');
                        _.delay(function(){
                            $('.dashboard-pin').toggleClass('dashboard-pin-invalid');

                        },2000);

                    }
                    return go;
                }

                var v=new View(
                    {
                    placeholder: 'wheelpin',
                    title: 'settings.enterpin.title',
                    itemtype: 'view',

                    items: [
                        new PinEditor(
                            {
                                path: 'settings.pin',
                                /*styles: {input: 'dashboard-special'},*/
                                password: true,
                                noLabel: true,
                                stacked: false,
                                css: 'dashboard-unlock-top dashboard-lock-freeze'

                            }),

                        new ButtonEditor(
                            {
                                path: 'settings.unlock',
                                label: '',
                                css: 'dashboard-unlock-top dashboard-lock-freeze '

                            }
                        )

                    ]

                });

                // Since we want have isValid() handlers we need to build dialog completely by ourselves
                var dlg=new Dialog(
                    {
                        placeholder: 'wheelpin',
                        title: 'settings.changepin.title',
                        items: [],
                        ok: function (data) {

                            // Actually data should be valid already since we have isValid function.
                            // check if old code is same as real pin
                            // check if newpin and newpin2 are same
                            // error note if pin codes wrong
                            var pw = data.data['settings.changepin.oldpin'];
                            var npw = data.data['settings.changepin.newpin'];
                            var npw2 = data.data['settings.changepin.newpin2'];

                            var go = false;
                            // check that given password mathces the old one
                            if (pw == IoGlobal.EXT_DATA_UC) {
                                // check that new password is same as new2
                                if (npw == npw2) {
                                    go = true;
                                }
                            }
                            // if everything is ok then publish data.
                            if (go) {
                                data.publish();
                            }
                        }
                    });

                // clear pin codes from the dialog
                dlg.beforeShow = function(){
                    L10n.node('settings.changepin.oldpin').data.value = '';
                    L10n.node('settings.changepin.newpin').data.value = '';
                    L10n.node('settings.changepin.newpin2').data.value = '';
                };

                dlg.args.items.push(new Text(
                    {
                        path: 'settings.changepin.oldpin',
                        align: {label: 'center'},
                        stacked: true
                    }));


                var ope=new PinEditor(
                        {
                            path: 'settings.changepin.oldpin',
                            noLabel: true,
                            password: true,
                            stacked: true,
                            css: 'dashboard-special',
                            horizontal: false
                        });
                ope.isValid=areCodesValid;
                dlg.args.items.push(ope);
                var npet=new Text(
                        {
                        path: 'settings.changepin.newpin',
                        align: {label: 'center'},
                        stacked: true
                        });
                dlg.args.items.push(npet);

                var npe=new PinEditor(
                    {
                        path: 'settings.changepin.newpin', noLabel: true, password: false
                    });
                dlg.args.items.push(npe);
                var npet2=new Text(
                    {
                    path: 'settings.changepin.newpin2',
                    align: {label: 'center'},
                    stacked: true
                    });
                dlg.args.items.push(npet2);

                var npe2=new PinEditor({path: 'settings.changepin.newpin2', noLabel: true, password: false});
                dlg.args.items.push(npe2);
                v.args.edit=dlg;
                v.place();

                loginResponse();
            }
        })
    }();



    uiDefs.expert.saveAndRestore = uiDefinition({
        layout: function () {
            // Initial, user and factory settings
            var items = [
                new ButtonEditor({path: 'expert.settings.initial.save', noLabel: true}),
                new ButtonEditor({path: 'expert.settings.initial.load', noLabel: true}),
                new ButtonEditor({path: 'expert.settings.user.save', noLabel: true}),
                new ButtonEditor({path: 'expert.settings.user.load', noLabel: true}),
            ];
            if(!dashboardOptions.cloud) {
                items.push(new ButtonEditor({path: 'expert.settings.factory', noLabel: true}));
            }
            new View({
                placeholder: 'settings',
                title: 'expert.settings',
                items: items
            }).place();
        }
    });


    // Note: updateAccessLevel function is outside of
    // the definition.
    uiDefs.settings.level = uiDefinition({
        logic: function () {
            L10n.register(updateAccessLevel, 'wizard.access.level');
        },
        layout: function () {
            new View({
                placeholder: 'wheellevel',
                items: [
                    new RadioEditor({
                        path: 'wizard.access.level',
                        list: 'wizard.access.level.levels', register: true,
                        noLabel: true
                    })
                ]
            }).place();

            updateAccessLevel();
        }
    });

/*----------------------------------------------------------------------------------- */


    /**
     * NEW in 1.2
     * Will send invitation email to external user to grant access to the device
     */

    function updateCurrentAccessList() {
        var dUid = L10n.value('cloud.ui.devices.activeid');
        return $.get('/api/grantaccess/' + dUid)
            .done(function(data){
                var ph=$("#ga-status-placeholder");
                ph.empty();
                if(data.data && data.data.length > 0) {
                    _.each(data.data, function (access) {
                        ph.append(JST.grantaccessitem({
                            email: access.email,
                            accessGranted: moment(access.grantDate).format('LLL')
                        }));
                        ph.trigger('create');
                    });
                } else {
                    ph.html("<span id='ga-none-placholder'>" + L10n.locStr('id_text_web_none') + "</span>");
                }
            });
    }

    function grantAccessToDevice(aEmailAddress) {
        var pUrl = L10n.data('settings.grantaccess.sendbutton').url;
        var dUid = L10n.value('cloud.ui.devices.activeid');
        showWaitNote();

        var request = $.ajax({
            url: pUrl + dUid,
            method: "POST",
            data: { uid : dUid, email: aEmailAddress },
            dataType: "json"
        });

        request.done(function( msg ) {
            /*
            var ph=$("#ga-status-placeholder");
            ph.find('#ga-none-placholder').remove();
            ph.append(JST.grantaccessitem({email: aEmailAddress, accessGranted: moment().format('LLL')}));
            ph.trigger('create');
            */
            return updateCurrentAccessList();
        });

        request.fail(function( jqXHR, textStatus ) {
            console.log("Request failed: " + textStatus );
            var errorStrings = jqXHR.responseJSON.errors.join('\n');
            dbShowErrorNote(L10n.locStr('id_text_web_note'), errorStrings);
        });

        request.always(function(){
            hideWaitNote();
        });

    }


    function removeAccessClick(aEvent) {
        console.log('remove access');
        var sel = $(this).children();
        var email = sel.data("email");
        removeAccessFromDevice(email);
    }

    /**
     * Remove granted access from the device
     * @param aEmailAddress to be removed
     */
    function removeAccessFromDevice(aEmailAddress) {
        console.log('Remove access from device!');
        var pUrl = L10n.data('settings.grantaccess.removeaccess').url;
        var dUid = L10n.value('cloud.ui.devices.activeid');

        var request = $.ajax({
            url: pUrl + dUid + "/" + aEmailAddress,
            method: "DELETE",
            dataType: "json"
        });

        request.done(function( msg ) {
            console.log('OK');
            console.log(msg);
            updateCurrentAccessList();
        });

        request.fail(function( jqXHR, textStatus ) {
            console.log("Request failed: " + textStatus );
            var errorStrings = jqXHR.responseJSON.errors.join('\n');
            dbShowErrorNote(L10n.locStr('id_text_web_note'), errorStrings);
        });

    }


    /**
     * Simple email check, server will validate this more throughly
     */
    function validateEmail() {

        var reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        var email=L10n.value('settings.grantaccess.editor');

        var myArray = reg.exec(email);
        if (myArray===null) {
            // if invalid email, set flag to be disabled
            L10n.value('settings.grantaccess.emailvalid',false);
            var sel=$('.dashboard-email-input');
            sel.toggleClass('dashboard-email-invalid');
            sel.toggleClass('ui-disabled');
            _.delay(function(){
            sel.toggleClass('dashboard-email-invalid');
            sel.toggleClass('ui-disabled');
            },2000);
        }
        else {
            L10n.value('settings.grantaccess.emailvalid',true);
            grantAccessToDevice(email);
        }
    }


    uiDefs.settings.grantaccess = uiDefinition({
        logic: function () {
            L10n.register(validateEmail, 'settings.grantaccess.sendbutton');
        },
        layout: function () {
            new View({
                placeholder: 'gap_email_editor',
                itemtype: 'view',
                items: [
                    new TextEditor({
                        path: 'settings.grantaccess.editor',
                        noLabel: true,
                        stacked: false

                    })

                ]
            }).place();

            new View({
                placeholder: 'gap_email_send',
                itemtype: 'view',
                items: [
                    new ButtonEditor({path: 'settings.grantaccess.sendbutton', noLabel: true})
                ]
            }).place();

            if (dashboardOptions.cloud) {
                updateCurrentAccessList();
            }
        }
    });

    // ----------------------------------------------------------------------------
    // Miscellaneous utilities and other common code.
    // ----------------------------------------------------------------------------

    // Utility functions

    function replaceClass(selector, clsIn, clsOut) {
        selector.addClass(clsIn);
        selector.removeClass(clsOut);
    }

    // Toggle Ticker animation
    // container: Selector for the dashboard-ticker's container element.
    // visible: true/false
    function toggleTicker(container, visible) {
        // Pause/start animation
        $('.dashboard-ticker', container)
            .toggleClass('dashboard-ticker-pause', !visible);
        // Show/hide animation
        container.toggleClass('dashboard-hide', !visible);
    }

    // When language changes, we reinitialize the current
    // pageset (Dashboard or Wizard).
    var initializeFun = _.noop;
    L10n.register(function () {
        initializeFun();
    }, 'language');

    // Shows the information on the selected access level
    // and enforces limits on the UI. This is part of the common
    // code since the function is called both from Dashboard and Wizard.
    function updateAccessLevel() {
        var level = L10n.value('wizard.access.level');
        doUpdateAccessLevel(level);
    }



    function doUpdateAccessLevel(aLevel) {
        var level=aLevel;
        $('.dashboard-access-level-info').html(_.map(
            L10n.node(sprintf('wizard.access.level.levels.%s.info', level)),
            function (n, i) {
                return safeP(L10n.str(
                    sprintf('wizard.access.level.levels.%s.info.%s', level, i)));
            }
        ).join(''));
        // Enforce the current access level across the UI
        // We only need to check the levels 0 and 1, because
        // they affect UI directly.
        // The level semantics have changed, but we use
        // the old semantics when updating the UI:
        var oldLevel = 2 - level;
        _.each(_.range(2), function (limit) {
            $('.dashboard-edit-limit-' + limit).toggleClass('dashboard-hide', oldLevel <= limit);
            $('.dashboard-limit-' + limit).toggleClass('ui-disabled', oldLevel <= limit);
        });
    }

    function profilePaths(profile) {
        var profs = ['home', 'away', 'boost', 'fireplace'];
        // Some settings are on the Wizard and others on the Dashboard side.
        var dbPath = 'dashboard.profile.list.' + _.indexOf(profs, profile) + '.';
        var wPath = 'wizard.expert.profiles.' + profile;
        var dic = {path: wPath, activate: dbPath + 'activate'};
        wPath += '.';
        if (profile != 'fireplace') {
            _.defaults(dic, {
                fanspeed: wPath + 'fanspeed', supply: wPath + 'supply',
                switches: {humidity: wPath + 'humidity', co2: wPath + 'co2'},
                humidity: dbPath + 'humidity', co2: dbPath + 'co2'
            })
        }
        if (_.contains(['boost', 'fireplace'], profile)) {
            _.defaults(dic, {
                timer: wPath + 'timer',
                duration: wPath + 'duration'
            })
        }
        if (profile == 'fireplace') {
            _.defaults(dic, {
                supply: wPath + 'supply',
                extract: wPath + 'extract'
            })
        }
        return dic;
    }

    uiDefs.note = function () {
        // Note
        function updateNote() {
            var flag = L10n.value('note');
            var sel = $('.dashboard-note-placeholder');
            if (flag) {
                sel.html(JST.dashboardnote());
            }
            sel.toggleClass('dashboard-hide', !flag);
        }

        return uiDefinition({
            layout: function () {
                $(document).on('click', '.dashboard-note-close',
                    function () {
                        L10n.value('note', '');
                    });
                updateNote();
            },
            logic: function () {
                L10n.register(updateNote, 'note');
            }
        })
    }();

    uiDefs.cloud = {};
    uiDefs.cloud.devices = function () {
        function updateDevicesPanel() {
            $('.dashboard-panel').html(JST.dashboardcloudpanel());
        }

        return uiDefinition({
            logic: function () {
                var activeCls = 'dashboard-cloud-device-active';
                var deviceCls = 'dashboard-cloud-device';
                L10n.register(updateDevicesPanel, 'cloud.ui.devices');
                L10n.register(function (path, data) {
                    $('.' + activeCls).removeClass(activeCls);
                    $(sprintf('.%s[dashboard="%s"]', deviceCls, data.value)).addClass(activeCls);
                }, 'cloud.ui.devices.activeid');
            },
            layout: function () {
                updateDevicesPanel();
                $('.dashboard-panel').on('click', '.dashboard-cloud-device-online',
                    function () {
                        L10n.value('cloud.ui.devices.activeid', $(this).attr('dashboard'));
                    })
            }
        })
    }();

    // Access level constant to used in Views.
    var VERY_LIMITED = 0;

    // Balances the margins ("whitespace") on the dashboard trays for
    // the given sets of views so that the combined height of the sets
    // are equal. Thus, the trays are aligned in the UI.
    // views1: List of view names or an individual view name.
    // views1: List of view names or an individual view name.
    function balanceTrays(views1, views2) {
        views1 = _.isArray(views1) ? views1 : [views1];
        views2 = _.isArray(views2) ? views2 : [views2];

        // Returns object with trays and height properties.
        function getTrays(views) {
            var dic = {trays: [], height: 0};
            _.each(views, function (v) {
                var viewSel =
                    $(sprintf('.dashboard-view-placeholder[dashboard="%s"]', v));
                var traySel = viewSel.hasClass('dashboard-tray')
                    ? viewSel.first()
                    : viewSel.parentsUntil('.dashboard-tray').parent().first();
                dic.trays.push(traySel);
                dic.height += traySel.outerHeight();
            });
            return dic;
        }

        var t1 = getTrays(views1);
        var t2 = getTrays(views2);
        var target = Math.max(t1.height, t2.height);
        var trays = target == t1.height ? t2 : t1;
        // We increase the size of all the bottom margins and all the
        // other top margins except the first one (alignment with the
        // first "neighbour" must be maintained).
        var margins = trays.trays.length * 2 - 1;
        target -= trays.height;
        var inc = Math.floor(target / margins);
        // If the division is not even we'll add the remainder pixels
        // to the last bottom.
        var extra = target - margins * inc;

        function pixIncrease(sel, property, increase) {
            var old = /[0-9]+/.exec(sel.css(property))[0] || 0;
            sel.css(property, (parseInt(old) + increase) + 'px');
        }

        _.each(trays.trays, function (t, i) {
            if (i) {
                pixIncrease(t, 'padding-top', inc);
            }
            var bottom = i == trays.trays.length - 1 ? inc + extra : inc;
            pixIncrease(t, 'padding-bottom', bottom);
        })
    }

    // Register for the balanced status of pages.
    var balancedPages = {};

    // Registers an event handler that balances the given page Views
    // on the first pagecontainerchange event.
    // pid: Short page identifier: dashboard, info, service, expert or settings.
    // views: arrays of arrays of views. Each top level array item
    // has two items. Each of those is either a View id (dashboard attribute)
    // or View id array  arguments for balanceTrays.
    function balancePage(pid, views) {
        function balanceNow(pid, views) {
            balancedPages[pid] = true;
            _.each(views, function (v) {
                balanceTrays(v[0], v[1]);
            });
        }

        pid = sprintf('dashboard-%s-page', pid);
        if ($(':mobile-pagecontainer').pagecontainer('getActivePage')
                .prop('id') == pid) {
            balanceNow(pid, views)
        } else {
            $(':mobile-pagecontainer').on('pagecontainerchange', function (e, ui) {
                if (!balancedPages[pid] && ui.toPage.prop('id') == pid) {
                    balanceNow(pid, views);
                }
            })
        }
    }


    // -----------------------------------------------------------------------
    //         ____            _     _                         _
    //        |  _ \  __ _ ___| |__ | |__   ___   __ _ _ __ __| |
    //        | | | |/ _` / __| '_ \| '_ \ / _ \ / _` | '__/ _` |
    //        | |_| | (_| \__ \ | | | |_) | (_) | (_| | | | (_| |
    //        |____/ \__,_|___/_| |_|_.__/ \___/ \__,_|_|  \__,_|
    //
    // -----------------------------------------------------------------------

    // ----------------------------------------------------------------------------------
    // Initialize function will be called in the beginning and _every_ time
    // the current language is changed.
    // ----------------------------------------------------------------------------------

    var dashboardOptions = {};

    function initializeDashboard(opts) {
        initializeFun = arguments.callee;
        _.merge(dashboardOptions, opts || {});
        moment.locale(L10n.value('language'));
        domId = _.uniqueId('dom:');
        balancedPages = {};
        $('.dashboard-page').html(JST.dashboardpage());
        if (dashboardOptions.cloud) {
            uiDefs.cloud.devices();
        } else {
            $('.dashboard-panel').html(JST.dashboardpanel());
        }
        var ids = ['expert', 'service', 'info', 'dashboard', 'settings'];
        _.forEach(ids, function (current) {
            var pid = $('#dashboard-' + current + '-page');
            $('.dashboard-header', pid).html(JST.dashboardheader({current: current}));

            $('.dashboard-form', pid).html(JST['dashboard' + current + 'form'](
                {opts: dashboardOptions}));

            $(pid).enhanceWithin();
        });

        uiDefs.note();

        // ------------------------------------------------------------------------------------------
        // Expert page
        // ------------------------------------------------------------------------------------------

        if (dashboardOptions.cloud) {
            delete uiDefs.expert.config;
        }

        _.each(uiDefs.expert, function (fun) {
            fun();
        });

        if (dashboardOptions.cloud) {
            balancePage('expert', [
                [['fan', 'antifreeze'], ['sensors', 'modbus']]
            ]);
        } else {
            balancePage('expert', [
                [['fan', 'antifreeze'], ['sensors', 'modbus']],
                [['relay', 'parental'], ['confignumber', 'settings']]
            ]);
        }

        // ------------------------------------------------------------------------------------------
        // Service page
        // ------------------------------------------------------------------------------------------

        _.each(uiDefs.service, function (fun) {
            fun();
        });

        // ------------------------------------------------------------------------
        // Info page
        // ------------------------------------------------------------------------

        _.each(uiDefs.info, function (fun) {
            fun();
        });

        balancePage('info', [
            ['unitstatus', 'unitlanguage'],
            ['unitdetails', 'unittime']
        ]);

        // -------------------------------------------------------------------------
        // Dashboard page
        // -------------------------------------------------------------------------

        _.each(uiDefs.dashboard, function (fun) {
            fun();
        });

        balancePage('dashboard', [[['nowleft', 'filter'], ['homepic', 'sensordata']]]);


        // ------------------------------------------------------------------------------------------
        // Settings
        // ------------------------------------------------------------------------------------------

        if (dashboardOptions.cloud) {
            delete uiDefs.settings.cloud;
        }
        _.each(uiDefs.settings, function (fun) {
            fun();
        });

    }

    // ----------------------------------------------------------------------------------
    //      _____             __ _                       _   _
    //     / ____|           / _(_)                     | | (_)
    //    | |     ___  _ __ | |_ _  __ _ _   _ _ __ __ _| |_ _  ___  _ __
    //    | |    / _ \| '_ \|  _| |/ _` | | | | '__/ _` | __| |/ _ \| '_ \
    //    | |___| (_) | | | | | | | (_| | |_| | | | (_| | |_| | (_) | | | |
    //     \_____\___/|_| |_|_| |_|\__, |\__,_|_|  \__,_|\__|_|\___/|_| |_|
    //                              __/ |
    //                             |___/
    //
    // ----------------------------------------------------------------------------------

    function checkCurrentConfiguration() {
        return checkConfigurationNumber(L10n.value('info.details.config'));
    }

    function initializeConfiguration(onFinished) {
        initializeFun = arguments.callee;
        domId = _.uniqueId('dom:');  // Just in case
        $('.configuration-page').html(JST.configurationpage());
        $('.configuration-panel').html(JST.dashboardpanel());

        var pid = $('#dashboard-configuration-page');
        $('.configuration-header', pid).html(JST.dashboardheader({current: ''}));

        $('.dashboard-form', pid).html(JST.configurationform());

        $(pid).enhanceWithin();

        var editor = new ConfigurationEditor({
            path: 'info.details.config',
            stacked: true, noLabel: true
        });

        var data = localData();

        new View({
            placeholder: 'configconfig',
            items: [
                editor
            ]
        }).place();

        new View({
            placeholder: 'configcontinue',
            items: [
                new ButtonEditor({
                    path: 'info.details.config.button', styles: {value: 'button'},
                    label: ''
                })
            ]
        }).place();

        function finish() {
            if (editor.isValid()) {
                L10n.unregister(finish);
                data.publish();
                pid.addClass('ui-disabled');
                onFinished();
                L10n.value('generalsettings.configdone', 1);
            }
        }

        L10n.register(finish, 'info.details.config.button');
    }


    // ----------------------------------------------------------------------------------
    //     __        ___                  _
    //     \ \      / (_)______ _ _ __ __| |
    //      \ \ /\ / /| |_  / _` | '__/ _` |
    //       \ V  V / | |/ / (_| | | | (_| |
    //        \_/\_/  |_/___\__,_|_|  \__,_|
    //
    // ----------------------------------------------------------------------------------

    var wizardOptions = {onFinished: _.noop};

    // Since the Wizard is very straightforward we only encapsulate
    // the L10n listeners into UI definition.
    var wizardListeners = uiDefinition({
        logic: function () {
            L10n.register(profilesFanReset, 'wizard.expert.fan.supply');
            L10n.register(profilesFanReset, 'wizard.expert.fan.extract');
            L10n.register(updateAccessLevel, 'wizard.access.level');
        }
    });

    var fanMax = 0;

    // Resets profile fan speeds according to "main" speeds.
    // Note: This only happens in wizard.
    // Follows the changes in the Supply and Extract
    // fan speeds on the expert page and resets the profile fans
    // if the maximum changes.
    function profilesFanReset() {
        if (initializeFun == initializeWizard) {
            var supply = L10n.value('wizard.expert.fan.supply');
            var extract = L10n.value('wizard.expert.fan.extract');
            var base = Math.max(supply, extract);
            if (base != fanMax) {
                fanMax = base;
                _.each({home: 1, away: 0.7, boost: 1.3},
                    function (factor, profile) {
                        // The value range is capped at 100%.
                        L10n.value(profilePaths(profile).fanspeed,
                            Math.min(Math.floor(factor * fanMax), 100));
                    });
            }
        }
    }

    // ----------------------------------------------------------------------------------
    // Initialize function will be called in the beginning and _every_ time
    // the current language is changed.
    // ----------------------------------------------------------------------------------

    function initializeWizard(opts) {

        IoDeviceDataReader.init();
        IoDeviceDataReader.startFetchTimer();

        initializeFun = arguments.callee;
        _.merge(wizardOptions, opts || {});
        moment.locale(L10n.value('language'));
        domId = _.uniqueId('dom:');

        $('.wizard-page[id!=wizard-start-page]').html(JST.wizardpage({back: true}));
        $('.wizard-page[id=wizard-start-page]').html(JST.wizardpage({back: false}));
        $('.wizard-panel').html(JST.wizardpanel());

        var ids = ['start', 'access', 'expert', 'summary'];

        _.each(ids, function (current, index) {
            var pid = '#wizard-' + current + '-page';
            $(pid + ' .wizard-header').html(JST.wizardheader({
                current: current, ids: ids
            }));
            $(pid + ' .wizard-form').html(JST['wizard' + current + 'form']());
            var nextSel = pid + ' .wizard-next-button';
            if (current == 'summary') {
                $(nextSel).html(JST.wizardnextbutton({target: '', text: L10n.str('wizard.finish')}));
                $(nextSel + ' a').on('click', wizardOptions.onFinished);
            } else {
                $(nextSel).html(JST.wizardnextbutton(
                    {target: 'wizard-' + ids[index + 1] + '-page', text: L10n.str('wizard.next')}));
            }
            $(pid).enhanceWithin();
        });

        wizardListeners();

        // ------------------------------------------------------
        // Wizard start page
        // ------------------------------------------------------

        new View({
            placeholder: 'wizardlanguage',
//            itemtype: 'wizard',
            items: [
                new SelectEditor({
                    path: 'language', list: 'language.list',
                    register: true
                })
            ]
        }).place();

        // Local data is needed in order to avoid multiple, unnecessary
        // and possible incomplete time and date changes.
        var wizardData = localData();

        new View({
            placeholder: 'wizardtimedate',
            data: wizardData,
            items: [
                new TimeEditor({path: 'wizard.start.time', autoUpdate: true}),
                new SwitchEditor({path: 'wizard.start.twentyfour'}),
                new SwitchEditor({path: 'wizard.start.dst'}),
                new Divider(),
                new DateEditor({path: 'wizard.start.date', register: true})
            ]
        }).place();

        $('#wizard-start-page .wizard-next-button').click(function () {
            wizardData.publish();
        });

        // ------------------------------------------------------
        // Wizard access page
        // ------------------------------------------------------

        // PIN code
        new View({
            placeholder: 'wizardpin',
            items: [
                new PinEditor({path: 'wizard.access.pin'})
            ]
        }).place();

        // Access level selection
        new View({
            placeholder: 'wizardaccess',
            items: [
                new RadioEditor({
                    path: 'wizard.access.level',
                    list: 'wizard.access.level.levels', stacked: true,
                    noLabel: true
                })
            ]
        }).place();

        // Parental controls
        new View({
            placeholder: 'wizardparental',
            items: [
                new SwitchEditor({path: 'wizard.access.parental'})
            ]
        }).place();

        updateAccessLevel();

        // ------------------------------------------------------
        // Wizard expert page
        // ------------------------------------------------------

        var wizardSliderStyles = {
            label: 'wizard-slider-label',
            value: 'wizard-slider-value'
        };

        function wizardProfileView(profile) {
            var p = profilePaths(profile);
            var editItems = [];
            if (profile != 'fireplace') {
                editItems.push(
                    new SliderEditor({
                        path: p.fanspeed, register: true,
                        styles: wizardSliderStyles
                    }),
                    new SliderEditor({
                        path: p.supply, register: true,
                        styles: wizardSliderStyles
                    }),
                    new SwitchEditor({path: p.switches.humidity}),
                    new SwitchEditor({path: p.switches.co2})
                );
            }
            if (profile == 'fireplace') {
                editItems.push(
                    new SliderEditor({
                        path: p.supply, register: true,
                        styles: wizardSliderStyles
                    }),
                    new SliderEditor({
                        path: p.extract, register: true,
                        styles: wizardSliderStyles
                    })
                )
            }
            if (_.contains(['boost', 'fireplace'], profile)) {
                editItems.push(
                    new SwitchEditor({path: p.timer}),
                    new DurationEditor({path: p.duration, register: true})
                );
            }

            new View({
                placeholder: 'wizard' + profile,
                items: editItems
            }).place();
        }

        // Global fans
        new View({
            placeholder: 'wizardfans',
            items: [
                new SliderEditor({
                    path: 'wizard.expert.fan.supply', register: true,
                    styles: wizardSliderStyles
                }),
                new SliderEditor({
                    path: 'wizard.expert.fan.extract', register: true,
                    styles: wizardSliderStyles
                })
            ]
        }).place();

        // Profiles
        _.each(['home', 'away', 'boost', 'fireplace'], function (p) {
            wizardProfileView(p)
        });

        // add handler for collapsible expand
        $(document).on('collapsibleexpand', '.expert-collapsible',
            function () {
                var sel = "collapsible-fans";
                var idx = sel.search('-') + 1;
                var id = this.id;
                var prof;

                // for the profiles collapsibles
                if (id != sel) {
                    prof = IoDataHelper.stringToProfile(id.substring(idx)) - 1;
                    IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_ACTIVE_PROFILE, prof, true);
                }
                else { // this one is for the fan collapsibles
                    prof = VlxDevConstants.C_CYC_STATE_HOME;
                    IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_ACTIVE_PROFILE, prof, true);
                }

            });


        profilesFanReset();

        // ------------------------------------------------------
        // Wizard summary page
        // ------------------------------------------------------

        // PIN et al
        new View({
            placeholder: 'summaryaccess',
            itemtype: 'view',
            items: [
                new Viewer({path: 'wizard.access.pin'}),
                new Viewer({
                    path: 'wizard.access.level',
                    htmlFun: _.partial(selectHtmlFun, 'wizard.access.level.levels')
                }),
                new Viewer({
                    path: 'wizard.access.parental',
                    htmlFun: switchHtmlFun
                })
            ]
        }).place();

        // Global fans
        new View({
            placeholder: 'summaryfans',
            title: 'wizard.expert.fan',
            itemtype: 'view',
            items: [
                new Viewer({
                    path: 'wizard.expert.fan.supply',
                    htmlFun: dataUnitHtmlFun
                }),
                new Viewer({
                    path: 'wizard.expert.fan.extract',
                    htmlFun: dataUnitHtmlFun
                })
            ]
        }).place();

        function summaryProfileView(profile) {
            var p = profilePaths(profile);
            var viewItems = [];
            if (profile != 'fireplace') {
                viewItems.push(
                    new Viewer({
                        path: p.fanspeed,
                        htmlFun: _.partial(unitHtmlFun, '%')
                    }),
                    new Viewer({
                        path: p.supply,
                        htmlFun: _.partial(unitHtmlFun, ' &deg;C')
                    }),
                    new Viewer({
                        path: p.switches.humidity,
                        htmlFun: switchHtmlFun
                    }),
                    new Viewer({
                        path: p.switches.co2,
                        htmlFun: switchHtmlFun
                    })
                );
            }
            if (profile == 'fireplace') {
                viewItems.push(
                    new Viewer({path: p.supply, htmlFun: dataUnitHtmlFun}),
                    new Viewer({path: p.extract, htmlFun: dataUnitHtmlFun})
                );
            }
            if (_.contains(['boost', 'fireplace'], profile)) {
                viewItems.push(
                    new Viewer({
                        path: p.timer,
                        htmlFun: switchHtmlFun
                    }),
                    new Viewer({
                        path: p.duration,
                        htmlFun: durationHtmlFun
                    })
                );
            }

            new View({
                placeholder: 'summary' + profile,
                title: p.path,
                itemtype: 'view',
                items: viewItems
            }).place();
        }

        _.map(['home', 'away', 'boost', 'fireplace'], summaryProfileView);

    } // initializeWizard ends


    /**
     * Show normal error note
     */
    function dbShowErrorNote(title, message) {
        var btn = L10n.locStr("id_text_web_ok");
        DialogStack.newDialog(title, message, btn);

    }

    function showWaitNote() {
        var content = {title: L10n.locStr('id_text_web_please_wait'), text: ""};
        var w = JST.dashboardwaitnote(content);
        $.blockUI({message: w});
    }

    function hideWaitNote() {
        $.unblockUI();
    }


    // ------------------------------------------------------------------------
    //     _____       _     _ _        _       _             __
    //    |  __ \     | |   | (_)      (_)     | |           / _|
    //    | |__) |   _| |__ | |_  ___   _ _ __ | |_ ___ _ __| |_ __ _  ___ ___
    //    |  ___/ | | | '_ \| | |/ __| | | '_ \| __/ _ \ '__|  _/ _` |/ __/ _ \
    //    | |   | |_| | |_) | | | (__  | | | | | ||  __/ |  | || (_| | (_|  __/
    //    |_|    \__,_|_.__/|_|_|\___| |_|_| |_|\__\___|_|  |_| \__,_|\___\___|
    //
    // ------------------------------------------------------------------------




    return {
        dbShowErrorNote: dbShowErrorNote,
        doUpdateAccessLevel: doUpdateAccessLevel,
        showWait: showWaitNote,
        hideWait: hideWaitNote,

        showDashboard: function (opts) {
            opts = opts || {};
            function toDashboard() {
                initializeDashboard(opts);
                $(':mobile-pagecontainer').pagecontainer('change',
                    "#dashboard-dashboard-page");
            }

            if (opts.cloud || checkCurrentConfiguration()) {
                toDashboard();
            } else {
                initializeConfiguration(toDashboard);
                $(':mobile-pagecontainer').pagecontainer('change',
                    "#dashboard-configuration-page");
            }
        },
        showWizard: function (opts) {
            function toWizard(aOpts) {
                initializeWizard(aOpts);
                $(':mobile-pagecontainer').pagecontainer('change',
                    "#wizard-start-page");
            }

            if (checkCurrentConfiguration()) {
                toWizard(opts);
            } else {
                initializeConfiguration(_.partial(toWizard, opts));
                $(':mobile-pagecontainer').pagecontainer('change',
                    "#dashboard-configuration-page");
            }
        }
    }
};

/**
 * Created by janne.hamalainen on 26.2.2015.
 * Assumes DOM has #dlg-window element where pop windows stays
 */


/**
 *
 * @type {DialogStack|*}
 */
var DialogStack = DialogStack || function () {

        /**
         *
         * @param aTitle
         * @param aMessage
         * @param aButton
         * @param aCallBack
         * @constructor
         */

        function Dialog(aTitle, aMessage, aButton, aCallBack) {
            this.title=aTitle;
            this.message=aMessage;
            this.button=aButton;
            this.callback=aCallBack;
            this.id=createUUID();
            this.btnId='#dlg-cb-'+this.id;
            init(this);
        }



        var dlgStack=[];

        /**
         * Init function is used to handle or initialize certain features. Currently not used.
         */
        function init(aDialog) {

            var iddy=aDialog.btnId;
            $(document).on("click",iddy,function(aEvent){
                var idb='#'+this.id;
                var idx=_.findIndex(dlgStack,function(aObject){
                    return (aObject.btnId === idb);
                });
                if (idx!=-1) {
                    var found=dlgStack[idx];
                    popDlgByIndex(idx);
                    if (!_.isUndefined(found.callback)) {
                        found.callback();
                    }
                }
            });

        }

        /**
         * Main API function
         * @param aTitle
         * @param aMessage
         * @param aButtons
         * @param aCallBack
         * @returns {Dialog}
         */
        function newDialog(aTitle, aMessage, aButtons, aCallBack) {

            var dlg=new Dialog(aTitle,aMessage,aButtons,aCallBack);
            pushDlg(dlg);
            return dlg;
        }


        /**
         *
         */
        function popDlg(aEvent) {

            var last=dlgStack.pop();
            overlayVisible(false);
            $("#dlg-window").fadeOut(400,function(){
                showTop();

            });

        }

        function popDlgByIndex(aIndex) {

            dlgStack.splice(aIndex,1);
            overlayVisible(false);
            $("#dlg-window").fadeOut(400,function(){
                showTop();

            });
        }


        /**
         *
         * @param aUuid
         */
        function popDlgByUuid(aUuid) {
            aUid = typeof aUid !== 'undefined' ? aUid : 0;
            var last=dlgStack.pop();
            overlayVisible(false);
            $("#dlg-window").fadeOut(400,function(){
                showTop();

            });
        }

        /**
         *
         * @param aDialog
         */
        function pushDlg(aDialog) {
            dlgStack.push(aDialog);
            showTop();
        }

        /**
         *
         */
        function showTop() {

            var dlg=null;

            if (dlgStack.length!=0) {
                dlg=dlgStack[dlgStack.length-1];
                var html=JST.dlgtemplate(dlg);
                var s="#dlg-window";
                $(s).html(html);
                $(s).fadeIn(400);
                overlayVisible(true);
            }

        }

        /**
         *
         * @param aVisibility
         */
        function overlayVisible(aVisibility) {
            if (aVisibility)  {
                $('.dlg-stack-overlay').fadeIn(400);
            }
            else if (!aVisibility){
                $('.dlg-stack-overlay').fadeOut(400);
            }
        }

        /**
         *
         */
        function hideTop() {

        }

        /**
         *
         * @returns {boolean}
         */
        function noteVisible() {

            return (dlgStack.length>0);
        }

        /**
         *
         * @returns {string}
         */
        function createUUID() {

            // http://www.ietf.org/rfc/rfc4122.txt
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;

        }

//              ___.   .__  .__                       .__
//  ______  __ _\_ |__ |  | |__| ____   _____  ______ |__|
//  \____ \|  |  \ __ \|  | |  |/ ___\  \__  \ \____ \|  |
//  |  |_> >  |  / \_\ \  |_|  \  \___   / __ \|  |_> >  |
//  |   __/|____/|___  /____/__|\___  > (____  /   __/|__|
//  |__|             \/             \/       \/|__|


        return {


            newDialog: newDialog,
            noteVisible: noteVisible,
            popDlgByUuid: popDlgByUuid

        }
    }();


/**
 * Created by Janne Hämäläinen on 4.9.2014.
 * Datahelper class is used to provide simple API for common tasks
 * was it dataconversion or showing a pop-up note
 */


var KDMUpdateTypeData = 0;
var KDMUpdateTypeValue = 1;
var KDMUpdateTypeAmount = 2;
var KDMUpdateTypeValid = 3;


var IoDataHelper = IoDataHelper || function () {

        var iSkipper=0;



        /**
         * Init function is used to handle or initialize certain features. Currently not used.
         */
        function init() {

        }


        /**
         * Convert sixteen bit date info to javascript date object
         * @param aInteger
         * @returns {Date}
         */
        function date16ToDate(aInteger) {

            var days = aInteger & 0x1f;
            var month = (aInteger >> 5) & 0xf;
            var year = (aInteger >> 9) & 0xf;

            year = convertTwoDigitYears(year);
            return new Date(year, month - 1, days);

        }


        /**
         * convert two digit years to four digit ones
         * @param aTwoDigitYear
         * @returns {number}
         */
        function convertTwoDigitYears(aTwoDigitYear) {
            return parseInt(aTwoDigitYear) + 2000;

        }

        /**
         * Swap low and hi bytes in a word
         * @param val
         * @returns {number}
         */
        function swap16(val) {
            return ((val & 0xFF) << 8)
                | ((val >> 8) & 0xFF);
        }

        /**
         * Convert temeperatures to Celsious
         * @param aKelvins in centiKelvins e.g. 25460 --> /100 --> -kelvinzero
         * @returns {number}
         */
        function toCelsius(aKelvins) {
            var celsius = (aKelvins / 100) - this.KKelvinZero;
            return Math.round(celsius);
        }

        /**
         * Convert tempratues from celsius to centi Kelvins
         * @param aCelcius
         * @returns {number}
         */
        function toKelvin(aCelcius) {
            var kelvin = (parseInt(aCelcius) + this.KKelvinZero) * 100;
            return Math.round(kelvin);
        }


        /**
         * Read machine model info
         * @param aModel
         * @returns {string|*}
         */
        function getMachineModel(aModel) {
            var result = "Unknown";
            if ((aModel >= 0) && (aModel < vlxModels.length)) {
                result = vlxModels[aModel];
            }
            return result;
        }


        /**
         * add zeros to front of a numbers string presentation
         * @param number
         * @param length
         * @returns {string}
         */
        function pad(number, length) {
            var str = '' + number;
            while (str.length < length) str = '0' + str;
            return str;
        }


        /**
         *
         * @param aYear
         * @returns {*}
         */
        function limitYear(aYear) {
            var result = aYear;
            if (aYear > 100) {
                result = aYear % 100;
            }
            if (aYear > 1000) {
                result = aYear % 1000;
            }
            return result;
        }


        /**
         * Write week profile information to the specific index
         * @param aIndex
         * @param aProfile, 0=empty, 1 = home, 2=away, 3=boost
         */
        function setWeekProfile(aIndex, aProfile) {

            var result = "";

            if (((aIndex >= 0) || (aIndex <= 167)) && ((aProfile >= 0) && (aProfile <= 3))) {

                var mom = moment();
                var hour = aIndex % 24;
                var day = parseInt(aIndex / 24);
                day++;
                if (day > 6) {
                    day = 0;
                }

                mom.hours(hour);
                mom.minutes(0);
                mom.seconds(0);
                mom.day(day);

                var ss = mom.format("HH:mm d");
                result = ss;

                vlxWeekCalendar[aIndex] = aProfile;


            }
            return result;
        }

        /**
         * Get week profile value in specific address
         * @param aIndex
         * 0=empty, 1 = home, 2=away, 3=boost
         */
        function getWeekProfile(aIndex) {

            var prof = 0;
            if ((aIndex >= 0) || (aIndex <= 167)) {
                prof = vlxWeekCalendar[aIndex];
            }
            return prof;

        }


        /**
         * Calculate simple UUID number. Currently not in use.
         * @returns {string}
         */
        function createUUID() {

            // http://www.ietf.org/rfc/rfc4122.txt
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;

        }

        /**
         * Read value set to the datamodel
         * @param aAddress is path or modbus address
         * @returns {*}
         */
        function readDataModelValue(aAddress) {

            var result = undefined;
            var add = aAddress.toString();
            if (add.indexOf(".") >= 0) {

                // we can assume it is a path
                result = L10n.value(add);
                console.log("Data written to path:" + add);

            }
            else {
                // should be a modbus address
                var res = L10n.find('modbus', aAddress);
                if (res != null) {

                    // path found so se the data
                    result = L10n.value(res);

                }
                else {

                    console.log("Key:" + aAddress + " was not found");

                }
            }

            return result;
        }

        /**
         * Read data "unit" from the l10n datamodel
         * @param aAddress is path or modbus address
         * @returns {undefined}
         */
        function readDataModelData(aAddress) {

            var result = undefined;
            var add = aAddress.toString();
            if (add.indexOf(".") >= 0) {

                // we can assume it is a path
                result = L10n.data(add);
                console.log("Data read from path:" + add);

            }
            else {
                // should be a modbus address
                var res = L10n.find('modbus', aAddress);
                if (res != null) {

                    // path found so se the data
                    result = L10n.data(res);

                }
                else {

                    console.log("Key:" + aAddress + " was not found");

                }
            }

            return result;
        }

        /**
         * Read modbus address from the datamodel
         * @param aModbusAddress
         * @returns {*}
         */
        function getModbusPath(aModbusAddress) {

            var result = null;
            var res = L10n.find('modbus', aModbusAddress);
            if (res != null) {

                result = res;
            }
            return result;
        }

        /**
         * Used in week clock but also in wizard to match profile names to number presentation
         * @param aProfileString
         * @returns {number}
         */
        function stringToProfile(aProfileString) {
            var result = 0;
            if (aProfileString == "home") {
                result = 1;
            }
            else if (aProfileString == "away") {
                result = 2;
            }
            else if (aProfileString == "boost") {
                result = 3;
            }
            else if (aProfileString == "fireplace") {
                result = 4;
            }
            else {
                result = 0;
            }
            return result;

        }

        /**
         * This is used for week clock profile conversion (1-4 to home,away,boost,fp)
         * @param aProfile
         * @returns {string}
         */
        function profileToString(aProfile) {
            var result = "";
            if (aProfile == 1) {
                result = "home";
            }
            else if (aProfile == 2) {
                result = "away";
            }
            else if (aProfile == 3) {
                result = "boost";
            }
            else if (aProfile == 4) {
                result = "fireplace";
            }
            else {
                result = "";
            }
            return result;

        }

        /**
         *
         * @param aBool
         * @returns {number}
         */
        function boolToInt(aBool) {
            return (aBool === true ? 1 : 0);
        }

        /**
         *
         * @param aBool
         * @returns {boolean}
         */
        function isBool(aBool) {
            var res = false;
            if ((aBool === true) || (aBool === false)) {
                res = true;
            }
            return res;

        }


        /**
         * Write variable to Datamodel in given address (modbus or normal path)
         * @param aAddress
         * @param aValue
         */
        function updateDataModelValue(aAddress, aValue, aClearMeta) {

            var aMeta = IoDataHelper.KReadMetaType;

            if ((aClearMeta != undefined) && (aClearMeta == true)) {
                aMeta = undefined;
            }


            var add = aAddress.toString();
            if (add.indexOf(".") >= 0) {

                // we can assume it is a path
                L10n.value(add, aValue, aMeta);
                console.log("Data written to path:" + add);

            }
            else {
                // should be a modbus address
                var res = L10n.find('modbus', aAddress);
                if (res != null) {

                    // path found so se the data
                    L10n.value(res, aValue, aMeta);

                }
                else {

                    console.log("Key:" + aAddress + " was not found");

                }
            }
        }

        /**
         * Function to handle all kind of updates to the datamodel.
         * @param aAddress
         * @param aValue
         * @param aUpdateType (KDMUpdateTypeData,KDMUpdateTypeValue,KDMUpdateTypeAmount)
         */
        function updateDataModelParam(aAddress, aValue, aUpdateType, aClearMeta) {


            var aMeta = IoDataHelper.KReadMetaType;

            if ((aClearMeta != undefined) && (aClearMeta == true)) {
                aMeta = undefined;
            }


            /**
             * Helper function to find correct thing to update (data, value, amount)
             * @param res
             * @param aValue
             * @param aUpdateType
             */
            function doUpdate(res, aValue, aUpdateType) {
                switch (aUpdateType) {

                    case KDMUpdateTypeData:
                    {
                        L10n.data(res, aValue, aMeta);
                        break;
                    }
                    case KDMUpdateTypeValue:
                    {
                        L10n.data(res, {value: aValue}, aMeta);
                        break;
                    }
                    case KDMUpdateTypeAmount:
                    {
                        L10n.data(res, {amount: aValue}, aMeta);
                        break;
                    }
                    case KDMUpdateTypeValid:
                    {
                        L10n.data(res, {valid: aValue}, aMeta);
                        break;
                    }
                    default:
                    {
                        break;
                    }

                }
            }

            var add = aAddress.toString();
            if (add.indexOf(".") >= 0) {

                // we can assume it is a path
                doUpdate(add, aValue, aUpdateType);
                console.log("Data written to path:" + add);

            }
            else {
                // should be a modbus address
                var res = L10n.find('modbus', aAddress);
                if (res != null) {

                    // path found so se the data
                    doUpdate(res, aValue, aUpdateType);
                }
                else {

                    console.log("Key:" + aAddress + " was not found");

                }
            }
        }


        /**
         * Check device IP address
         * @returns {Array|{index: number, input: string}}
         */
        function checkIP() {
            console.log("Checking browser IP....");

            // read host address from the browser
            var s = window.location.host;
//            var s="192.168.0.108";

            var myRe = /\b(?:\d{1,3}\.){3}\d{1,3}\b/;
            var myArray = myRe.exec(s);
            if (myArray != null) {
                IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_BROWSER_IP, myArray[0]);
                console.log("Browser IP read: " + myArray[0]);
            }
            return myArray;
        }

        /**
         * Convert number from bcd to decimal
         * @param aBcdCode
         * @returns {number}
         */
        function bcdToInt(aBcdCode) {

            var a = (aBcdCode & 0x0f);
            var b = ((aBcdCode >> 4) & 0x0f) * 10;
            var c = ((aBcdCode >> 8) & 0x0f) * 100;
            var d = ((aBcdCode >> 12) & 0x0f) * 1000;
            return (a + b + c + d);
        }

        /**
         * Convert decimal number to bcd
         * @param aInteger
         * @returns {number}
         */
        function intToBcd(aInteger) {

            var divider = 1000;
            var current = aInteger;
            var newv = 0;
            var result = 0;
            for (var i = 0; i < 3; i++) {
                current = parseInt(current / divider);
                newv += current * divider;
                result = (result | current) << 4;
                current = aInteger - (newv);
                divider /= 10;
            }
            result = (result | (current & 0x0f));
            return result;
        }


        /**
         * Show normal error note
         */
        function showErrorNote(aPath) {

            var tit = L10n.str(aPath + '.title');
            var txt = L10n.str(aPath + '.content');

            var btn=L10n.locStr("id_text_web_ok");
            DialogStack.newDialog(tit,txt,btn);

        }

        /**
         * Show progress note
         * @param aPath
         */
        function showWaitNote(aPath) {

            var tit = L10n.node(aPath + '.title');
            var txt = L10n.node(aPath + '.content');

            var content = {title: L10n.str(aPath + '.title'), text: L10n.str(aPath + '.content')};
            var w = JST.dashboardwaitnote(content);

            $.blockUI({message: w});


        }

        /**
         * Show information dialog
         * @param aCode
         */
        function showInfoNote(aCode) {

            var tit = L10n.node('generalsettings.infonote.title');
            var txt = L10n.str('generalsettings.infonote.content');
            var sticky = L10n.value('generalsettings.infonote.sticky');

            var content = {title: tit.txt, text: txt};
            var w = JST.dashboardinfonote(content);


            $.blockUI({message: w});

            if (!sticky) {
                _.delay(function () {
                    $.unblockUI();
                }, 5000);
            }
        }


        /**
         * Permanent note is used in situation where system is expected to be rebooted
         * (after storing config number or un recoverable error situation)
         * @param aPath
         */
        function showPermanentNote(aPath) {

            // stop all the timers
            IoGlobal.stopRequestTimer();

            IoLogScheduler.stop();

            var tit = L10n.str(aPath + '.title');
            var txt = L10n.str(aPath + '.content');

            var mod = $('.block-modal');

            $('.block-content').html(txt);
            $('.block-title').html(tit);

            $('.block-overlay').show();
            mod.show();

        }


        /**
         * Hide blockui note
         * @param aNoteId
         */
        function hideNote(aNoteId) {

            IoQueue.clearErrors();
            $.unblockUI();

        }

        /**
         * Allows multiple error notes to be shown
         * by having a stack of notes stored.
         */
        function showDeviceErrorNote() {
            var msg=L10n.locStr("id_text_web_check_error_log");
            var txt=L10n.locStr("id_text_web_error_title");
            var btn=L10n.locStr("id_text_web_ok");
            DialogStack.newDialog(txt,msg,btn);
        }




        /**
         * Reads or writes new interval for data updates
         *
         * @param aInterval. If this is given new interval will be set and previous value will be returned
         * If no parameter is given current value will be returned
         * @returns {number}
         */
        function pollingInterval(aInterval) {

            var result = 0;
            result = readDataModelValue(VlxDevConstants.EXT_DATA_POLLING_INTERVAL);
            if (result < 20) {
                result = 20;
            }

            if (aInterval != undefined) {
                updateDataModelValue(VlxDevConstants.EXT_DATA_POLLING_INTERVAL, aInterval);
                result = aInterval;
            }
            return result;
        }

        /**
         * Set or gets current polling enabled flag
         * @param aPollingEnabled
         * @returns {number}
         */
        function pollingEnabled(aPollingEnabled) {

            var result = 0;
            result = readDataModelValue(VlxDevConstants.EXT_DATA_POLLING_ENABLED);
            if (aPollingEnabled != undefined) {
                updateDataModelValue(VlxDevConstants.EXT_DATA_POLLING_ENABLED, aPollingEnabled);
                result = aPollingEnabled;
            }
            return result;
        }

        /**
         * Sets or gets current uiUpdatesAllowed flag
         * @param aUiUpdatesEnabled
         * @returns {number}
         */
        function uiUpdatesEnabled(aUiUpdatesEnabled) {

            var result = 0;
            result = readDataModelValue(VlxDevConstants.EXT_DATA_POLLING_UI_UPDATE_ENABLED);
            if (aUiUpdatesEnabled != undefined) {
                updateDataModelValue(VlxDevConstants.EXT_DATA_POLLING_UI_UPDATE_ENABLED, aUiUpdatesEnabled);
                result = aUiUpdatesEnabled;
            }
            return result;
        }

        /**
         * Function that checks if data is loaded first time from the device
         * After this we know device is alive
         * @param aLoaded
         * @returns {number}
         */
        function initialDataLoaded(aLoaded) {

            var result = false;
            result = readDataModelValue('generalsettings.initialdataloaded');
            if (aLoaded != undefined) {
                updateDataModelValue('generalsettings.initialdataloaded', aLoaded);
                result = aLoaded;
            }
            return result;
        }

        /**
         *
         * @param aUpdate
         * @returns {boolean}
         */
        function updateUiData(aUpdate) {

            var result = false;
            result = readDataModelValue('generalsettings.updateuidata');
            if (aUpdate != undefined) {
                updateDataModelValue('generalsettings.updateuidata', aUpdate);
                result = aUpdate;
            }
            return result;
        }

        /**
         * Skipper is used to prevent updates happen. It will just skip number of update rounds
         * @param aValue
         * @returns {number}
         */
        function skipper(aValue) {

            var result = 0;
            result = iSkipper;
            if ((aValue != undefined) && (aValue >= 0)) {

                iSkipper=aValue;
                result = aValue;
            }
            console.log("skipper: ",result);
            return result;
        }

        /**
         * Clear skipper value
         */
        function clearSkipper() {

            skipper(0);
            uiUpdatesEnabled(true);
        }

        /**
         * Decrement the skipper value by one
         */
        function decSkipper() {

            var val = skipper();
            if (val > 0) {
                val--;
                skipper(val);
            }
            else {
                clearSkipper();
            }

        }


        /**
         * Scale values from slider 0..100 to 5..125
         * @param aData
         */
        function getAntiFrostTemperature(aData) {

            var scaled = Math.round((aData - 5) / (120 / 100));
            return scaled;

        }

        /**
         * Scale humidity to correct scale
         * @param aData
         * @returns {number}
         */
        function getAntiFrostHumidity(aData) {

            var scaled = Math.round(aData * 100 / 40) - 50;
            return scaled;
        }

        /**
         * Toggle connect/disconnect to cloud text in button
         * @param aConnectedToCloud
         */
        function toggleCloudButton(aConnectedToCloud) {
            "use strict";

            L10n.data('cloud.connect', {disabled: aConnectedToCloud, hidden: aConnectedToCloud}, "IoDataReader");
            L10n.data('cloud.disconnect', {disabled: !aConnectedToCloud, hidden: !aConnectedToCloud}, "IoDataReader");



        }

        function updateCloudConnectButtons( statusCode) {
            "use strict";


            L10n.data( 'cloud.connect', { disabled: statusCode != 0, hidden: statusCode != 0}, "IoDataReader");
            L10n.data( 'cloud.connecting', { disabled: true, hidden:  statusCode != 1}, "IoDataReader");
            L10n.data( 'cloud.disconnect', { disabled: statusCode != 2, hidden:  statusCode != 2}, "IoDataReader");

            L10n.data( 'cloud.fail', { disabled: statusCode < 1000 || statusCode >= 4000, hidden: statusCode < 1000 || statusCode >= 4000}, "IoDataReader");

            L10n.data('cloud.prepareupdate', {disabled: true, hidden:  statusCode != 4000}, "IoDataReader");
            L10n.data('cloud.update', {disabled: true, hidden:  statusCode != 4001}, "IoDataReader");


        }


        /**
         * Merge separate date and time we got from the device
         * @returns {*}
         */
        function getDateTime() {
            "use strict";
            var endTime=moment(IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CYC_DATE));
            var thisHour=moment(IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CYC_TIME));
            endTime.set('hours',thisHour.hours());
            endTime.set('minutes',thisHour.minutes());
            return endTime;
        }


        /**
         *
         * @param numbers
         * @returns {boolean}
         */
        function doCheckConfigurationNumber(numbers) {
            //do not accept conf numbers that are not complete. Configuration number requires 8 parts.
            if(numbers.length !== 8) {
                return false;
            }
            var sum = _.reduce(numbers.slice(0, 7), function (sum, n) {
                return sum + n;
            }, 0);
            var result= ((sum!=0) &&  ((sum & 0xff )== ( _.last(numbers ))));
            return result;
        }




        /**
         *
         *
         * #####  ##  ## #####  ##     ##  ####     ####   #####   ##
         * ##  ## ##  ## ##  ## ##     ## ##  ##   ##  ##  ##  ##  ##
         * #####  ##  ## ###### ##     ## ##       ######  #####   ##
         * ##     ##  ## ##  ## ##     ## ##  ##   ##  ##  ##      ##
         * ##      ####  #####  ###### ##  ####    ##  ##  ##      ##
         *
         */
        return {

            init: init,
            setWeekProfile: setWeekProfile,
            getWeekProfile: getWeekProfile,
            pad: pad,
            limitYear: limitYear,
            toCelsius: toCelsius,
            swap16: swap16,
            convertTwoDigitYears: convertTwoDigitYears,
            date16ToDate: date16ToDate,
            getMachineModel: getMachineModel,
            createUUID: createUUID,
            readDataModelValue: readDataModelValue,
            readDataModelData: readDataModelData,
            getModbusPath: getModbusPath,
            toKelvin: toKelvin,
            profileToString: profileToString,
            stringToProfile: stringToProfile,
            boolToInt: boolToInt,
            updateDataModelValue: updateDataModelValue,
            updateDataModelParam: updateDataModelParam,
            checkIP: checkIP,
            isBool: isBool,
            intToBcd: intToBcd,
            bcdToInt: bcdToInt,
            showErrorNote: showErrorNote,
            showWaitNote: showWaitNote,
            showInfoNote: showInfoNote,
            hideNote: hideNote,
            uiUpdatesEnabled: uiUpdatesEnabled,
            pollingEnabled: pollingEnabled,
            pollingInterval: pollingInterval,
            initialDataLoaded: initialDataLoaded,
            skipper: skipper,
            clearSkipper: clearSkipper,
            decSkipper: decSkipper,
            getAntiFrostTemperature: getAntiFrostTemperature,
            getAntiFrostHumidity: getAntiFrostHumidity,
            showPermanentNote: showPermanentNote,
            toggleCloudButton: toggleCloudButton,
            //only test, remove later toggleCloudButton1
            updateCloudConnectButtons: updateCloudConnectButtons,
            updateUiData: updateUiData,
            getDateTime: getDateTime,
            showDeviceErrorNote: showDeviceErrorNote,
            doCheckConfigurationNumber: doCheckConfigurationNumber
        }
    }();

IoDataHelper.KKelvinZero = 273.15;
IoDataHelper.KReadMetaType = "IoDataReader";
IoDataHelper.KWriteMetaType = "IoDataWriter";

/**
 * Created by janne.hamalainen on 10.3.2014.
 * Dataqueue is the IO center of the program.
 * Array of items to be send to the device
 * is running constantly trying to clearing the queue
 */



/**
 *
 * @type {string}
 */
var wsUri = "";
/**
 *
 * @type {null}
 */
var item = null;
/**
 *
 * @type {number}
 */
var KMaxBufferSize = 2048;
/**
 *
 * @type {number}
 */
var KRetryMaxCount = 20;


var logTime = 0;

/**
 *
 * @constructor
 */
function VlxQueueItem() {

    this.queueData = null;
    this.bufferSize = 0;
    this.itemType = IoQueue.KItemTypeNormal;
    this.extraParameter = 0;

}

/**
 *
 */
VlxQueueItem.initBuffer = function () {
    for (i = 0; i < this.bufferSize; i++) {
        this.queueData[i] = 0;
    }
};

/**
 * API
 * @type {{init, isEmpty, sendBinaryBuffer, sendItemBuffer, updateUiWithData, itemProcessed, error, readyToSend, connectToCyclone, createItem, stopTimer, startTimer, clearErrors}}
 */
var IoQueue = IoQueue || function () {


        var KStateIdle = 0;
        var KStateReady = 1;
        var KStateBusy = 2;
        var KStateError = 3;


        var iErrorCount=0;

        var queue = [];
        var queueState = KStateIdle;
        var timer = null;
        var retryCount = 0;
        var lastAddress = 0;
        var queueStart=0;

        var messageCount=0;
        var numOfPages=0;
        var incomingPacketSize=0;
        var totalPacketSize=0;


        var streamMode=false;
        var streamBuffer=null;
        var streamArray=[];
        var packetCount=0;

        /**
         *
         */
        function startTimer() {
            queueStart++;
/*

            clearInterval(timer);
            timer = setInterval(_.bind(doTick, this), 800);
*/
            console.log('Queue start called: '+queueStart+' times.');

            doTick();
        }

        /**
         *
         */
        function stopTimer() {
/*
            clearInterval(timer);
            timer = null;
*/
        }


        /**
         *
         */
        function doTick() {

            if ((isEmpty()) && (queueState == KStateIdle)) {
                //$.unblockUI();
                // start processing....

                console.log("Tick tack tick tack");
                console.log("retrycount: " + retryCount);
            }


            else if (!(isEmpty()) && (queueState == KStateIdle)) {
                // start processing....
                console.log("Start processing....");
                connectToCyclone();

            }
            else if (queueState == KStateBusy) {

                // skip, we are still processing....
                console.log("skip, we are still processing....");
                retryCount++;
                if (retryCount > KRetryMaxCount) {
                    // error is likely not recoverable.
                    stopTimer();
                    clear();
                    retryCount = 0;
                    queueState = KStateIdle;
                    messageCount=0;
                    startTimer();
                }
                console.log("retrycount: " + retryCount);

            }
        }


        /**
         *
         * @returns {boolean|*}
         */
        function isEmpty() {

            var result = true;
            if (queue.length > 0) {
                result = false;

            }
            return result;
        }

        /**
         *
         * @returns {boolean|*}
         */
        function hasOne() {

            var result = false;
            if (queue.length == 1) {
                result = true;

            }
            return result;
        }


        /**
         *
         */
        function itemProcessed() {

            console.log("Item processed successfully");
            doItemProcessed();

        }

        /**
         *
         * @param aItemType
         * @returns {number}
         */
        function findItem(aItemType) {
            var result = -1;
            for (i = 1; i < queue.length; i++) {
                if (queue[i].itemType == aItemType) {
                    result = i;
                    break;
                }
            }
            return result;
        }


        /**
         *
         */
        function doItemProcessed() {


            queue.shift();
            console.log("items in queue: " + queue.length);
            queueState = KStateIdle;
            if (isEmpty()) {
                retryCount=0;
                messageCount=0;
            }

            doTick();
//            $(document).trigger("updateUiWithData");
        }

        /**
         *
         * @returns {*}
         */
        function currentItem() {

            return queue[0];
        }


        /**
         *  error handler
         */
        function error() {

            console.log("Error with item: ");
            console.log("Error with queue!");
            queueState = KStateError;

        }

        /**
         *
         * @param aItem
         */
        function removeItemByType(aType,aIndex) {

            if (aIndex==undefined) {
                aIndex=0;
            }
            var idx = findItem(aType);
            while (idx >= 0) {
                queue.splice(idx, 1);
                idx = findItem(aType);
            }
        }


        /**
         * Add items to the queue
         * @param aItem
         */
        function addItem(aItem) {
            if (isEmpty()) {
                retryCount = 0;

            }


            // remove previous fetches
            if (aItem.type == IoQueue.KItemTypeFetch) {
                removeItemByType(aItem.itemType);

            }

            queue.push(aItem);
            startTimer();
        }

        /**
         *
         * @param aBuffer
         */
        function sendBinaryBuffer(aBuffer, aType) {

            var item = createItem(aBuffer, aType);
            addItem(item);

        }

        /**
         *
         * @param aBuffer
         */
        function sendItemBuffer(aBuffer, aType) {

            var conv = aBuffer.convertDataToBuffer();
            var item = createItem(conv, aType);
            addItem(item);
        }


        /**
         *
         * @param aBuffer
         * @param aType
         * @returns {VlxQueueItem}
         */
        function createItem(aBuffer, aType) {

            var type = aType;
            if (aType == undefined) {
                type = IoQueue.KItemTypeNormal;
            }

            var item = new VlxQueueItem();

            if (aBuffer == undefined) {
                item.bufferSize = 0;
                aBuffer = new Uint16Array(item.bufferSize);
            }
            else {
                item.bufferSize = aBuffer.length;
            }

            item.queueData = new Uint16Array(aBuffer);
            item.itemType = type;
//            item.queueID=IoDataHelper.createUUID();
            return item;

        }

        /**
         *
         */
        function updateUiWithData() {
            IoDataReader.updateData();
        }


        /**
         * Clear queue
         */
        function clear() {

            //        queue.splice(0,queue.length);
            while (!isEmpty()) {
                queue.pop();
            }
            console.log("Queue cleared");

        }


        /**
         *
         */
        function connectToCyclone() {

            if ((!isEmpty()) && (queueState == KStateIdle)) {
                queueState = KStateBusy;
                _.delay(openWebSocket,750);
                //openWebSocket();

                console.log("-.-.-.-.-.-.-.-. Connect -.-.-.-.-.-.-.-. ");
                console.log("retrycount: " + retryCount);
                console.log("messagecount: " + messageCount);
                console.log("queue length: " + queue.length);
                console.log("queue state: " + queueState);
                console.log("ip address: " + wsUri);
                console.log("-.-.-.-.-.-.-.-. Connect -.-.-.-.-.-.-.-. ");

            }
        }

        /**
         *
         */
        function processQueue() {

            console.log("ProcessQueue");
            doProcessQueue();
        }

        /**
         *
         * @returns {number|*}
         */
        function doProcessQueue() {

                var result = 0;
                if (!isEmpty()) {

                    var item = queue[0];
                    doSend(item.queueData);
                    console.log("Data sent");
                    logTime=moment();

                    // we will close after we have sent normal items
                    // in case of data fetch we need to wait
                    // for data receive.
                    /*
                     if ((item.itemType!=IoQueue.KItemTypeFetch) && (item.itemType!=IoQueue.KItemTypeLog))  {
                     vlxWebSocket.close();
                     }
                     */
                }
                else {
                    result = -1;
                }
        return result;

        }

        /**
         *
         */
        function writeLog() {

            console.log("waiting:" + queueState);
        }

        /**
         *
         */
        function readyToSend() {

            console.log("Ready to send:" + vlxWebSocket.readyState);
            processQueue();
        }

        /**
         *
         */
        function addHandlers() {

            $(document).on("updateUiWithData", updateUiWithData);
            $(document).on("socketClosed", itemProcessed);
            $(document).on("socketError", error);
            $(document).on("socketDataWriteError", error);
            $(document).on("socketOpened", readyToSend);

        }

        /**
         *
         */
        function init() {

            addHandlers();
            onceWaitOn = _.once(function () {
                IoDataHelper.showWaitNote('generalsettings.defrostwaitnote')
            });

        }


        /**
         *
         */
        function openWebSocket() {

            console.log("OpenWEbsocket!");
            //printReadyState();

            if ("WebSocket" in window) {

                var ip = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_BROWSER_IP);
                // for testing


                if (!vproduction) {
                    if (ip == "") {
                        ip = "192.168.0.138";
                    }
                }
                var port = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_BROWSER_PORT);

                wsUri = "ws://" + ip + ":" + port + "/";

                console.log("--------------------------------------------------------");
                console.log("IP ADDRESS FOR SOCKET:" + wsUri);
                console.log("--------------------------------------------------------");


                if (((vlxWebSocket != null) && (vlxWebSocket.readyState == vlxWebSocket.OPEN)) ||
                ((vlxWebSocket != null) && (vlxWebSocket.readyState == vlxWebSocket.CLOSED)) || (vlxWebSocket==null))
                {
                    console.log("Socket exists and is idle");
                    vlxWebSocket = null;

                    vlxWebSocket = new WebSocket(wsUri);
                    vlxWebSocket.binaryType = "arraybuffer";
                    vlxWebSocket.onmessage = onMessage;
                    vlxWebSocket.onopen = onOpen;
                    vlxWebSocket.onclose = onClose;
                    vlxWebSocket.onerror = onError;

                }
                else {
                    return;
                }


            }
            else {
                // The browser doesn't support WebSocket
                //alert("You've old browser that doesn't support connection!");

                IoDataHelper.showErrorNote('generalsettings.socketnotsupportederror');

            }
        }

        /**
         *
         */
        function printReadyState() {

            if (vlxWebSocket != null) {
                console.log("Ready state: " + vlxWebSocket.readyState);
            }
            else {
                console.log("vlxWebSocket is NULL!");

            }
        }

        /**
         *
         * @param aBuffer
         */
        function doSend(aBuffer) {

            if (vlxWebSocket.readyState == vlxWebSocket.OPEN) {
                vlxWebSocket.send(aBuffer.buffer);
                messageCount++;
                console.log(">> MESSAGE COUNT SEND >> "+messageCount);
                console.log("Buffer sent (doSend)");
            }

        }

        /**
         * Event handler for websocket open
         * @param evt
         */
        function onOpen(evt) {
            numOfPages=0;
            incomingPacketSize=0;
            totalPacketSize=0;
            queueState = KStateReady;
            console.log("Onopen");
            printReadyState();
            //$(document).trigger("socketOpened");
            readyToSend();


        }


        /**
         * Event handler for websocket close
         * @param aEvent
         */
        function onClose(aEvent) {


            console.log("vlxWebSocket:close");
            $(document).trigger("socketClosed");
            queueState = KStateIdle;

        }

        /**
         * Main message handler for the received socket data
         * @param event
         */
        function onMessage(event) {

             var end_log=moment();
             console.log("Send To Receive took:"+ end_log.diff(logTime,"milliseconds"));

            console.log("Message is received...");
            console.log( JSON.stringify( event));
/*
            messageCount--;
            retryCount=0;
            closeSocket();
*/

            if (event.data instanceof ArrayBuffer) {



                if (streamMode) {
                    // store to stream buffer
                        streamArray.push(new Uint8Array(event.data));
                        incomingPacketSize+=event.data.byteLength;
                        packetCount++;
                        console.log("Packet count: "+packetCount);
                        console.log("Packet size: "+event.data.byteLength);
                        console.log("Stream size: "+incomingPacketSize);
                        if (incomingPacketSize>=totalPacketSize) {
                            streamMode=false;
                            var megaArray=[];
                            for (var x=0;x<streamArray.length;x++) {
                                for (var y=0;y<streamArray[x].length;y++) {
                                    megaArray.push(streamArray[x][y]);
                                }
                            }
                            IoLogReader.storeLog2(megaArray, numOfPages);


                            messageCount--;
                            retryCount=0;
                            closeSocket();
                        }

                    }
                else {
                    var tmpBuffer = new Uint16Array(event.data);
                    var command = parseInt(tmpBuffer[1]);
                    var parameter = parseInt(tmpBuffer[2]);

                    if (command==VlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW) {
                        messageCount++; // we don't want to close the socket just yet. since log packet is coming
                    }

                    messageCount--;
                    retryCount=0;
                    closeSocket();


                    var buffysize = event.data.byteLength / 2;
                    if (buffysize != 0) {

                        if (buffysize === vlxBufferSize) {
                            var dv = new DataView(event.data);
                            var data = 0;
                            for (var i = 0, off = 0; i < buffysize; i++ , off += 2) {
                                data = dv.getUint16(off, false);
                                vlxReceiveBuffer[i] = data;
                            }
                            //                      var s=JSON.stringify(vlxReceiveBuffer);
                            //$(document).trigger("updateUiWithData");
                        }
                        else if (buffysize <= 4) {

                            if (command!=VlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW) {
                                console.log("Ack!");
                                var tmpBuffer1 = new Uint16Array(event.data);
                                console.log(tmpBuffer1);
                                IoDataHelper.uiUpdatesEnabled(true);
                            }
                            else {
                                //0x03 : WEB_UI_COMMAND_LOG_RAW : PAGES : CHECKSUM
                                numOfPages=parameter;
                                //totalPacketSize=KPageSize;
                                totalPacketSize=numOfPages*(KPageSize);
                                incomingPacketSize=0;
                                streamMode=true;
                                streamBuffer=null;
                                streamBuffer=new Uint8Array(incomingPacketSize);
                                streamArray.length=0;

                            }

                        }

                        //
                        //
                        // Log reading code starts here
                        //
                        //
                        else {

                            console.log("DATALENGTH:" + event.data.byteLength);
                            var numOfRecs = parseInt(tmpBuffer[3]);

                            console.log("DATA COMMAND:" + command);


                            IoLogReader.storeLog2(event.data, numOfPages);


                            if ((command == parseInt(VlxDevConstants.WS_WEB_UI_COMMAND_LOG_LIMITED)) && ((parameter >= parseInt(VlxDevConstants.WS_LOG_EXTRACT_AIR_TEMP)) && (parameter <= parseInt(VlxDevConstants.WS_LOG_MAX_HUMIDITY)))) {
                                console.log("**************************************");
                                console.log("* LOGCOMMAND:" + command);
                                console.log("* LOGNUM:" + parameter);
                                console.log("* LOGRECORDS:" + numOfRecs);
                                console.log("* LOGBUFFERSIZE:" + tmpBuffer.length);
                                console.log("**************************************");

                            }
                            // check if the command is write
                            else if ((command == parseInt(VlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA))) {

                                var index=2;

                                // go through parameters (usually defrost, fan ,fan
                                for (var k=index;k<tmpBuffer.length-1;k+=2) {
                                    handleWriteParameters({address: tmpBuffer[k],value: tmpBuffer[k+1]});
                                }
                            }
                            else {

                                console.log("--------------------------------------------------------");
                                console.log("Unknown data read");
                                console.log("--------------------------------------------------------");
                            }


                        }

                    }

                }


            }
            else if (event.data instanceof Blob) {
                console.log("Blob not supported!");
            }
            else {
                console.log("Text mode not supported!");

            }

            if ((!IoDataHelper.initialDataLoaded()) || (IoDataHelper.updateUiData())) {
                $(document).trigger("updateUiWithData");
                IoDataHelper.updateUiData(false);
            }
        }

        function closeSocket() {

            console.log(">> MESSAGE COUNT CLOSE >> "+messageCount);

            if (messageCount==0) {
                vlxWebSocket.close();
                console.log(">> SOCKET CLOSED! >>" );

            }
        }


        /**
         * Helper function to handle write parameters
         * @param aParamObject
         *
         * Here is requested data handled
         *
         */
        function handleWriteParameters(aParamObject) {
            console.log( "Param Object: " + JSON.stringify( aParamObject));
            if (aParamObject.address == parseInt(VlxDevConstants.A_CYC_DEFROSTING)) {
                console.log("Defrosting is: " + aParamObject.value);
                if (aParamObject.value) {
                    onceWaitOn();
                }
                else {
                    $.unblockUI();
                }
            }
            else if (aParamObject.address == parseInt(VlxDevConstants.A_CYC_EXTR_FAN_SPEED)) {
                IoDataHelper.updateDataModelParam(VlxDevConstants.EXT_CYC_EXTR_FAN_SPEED, aParamObject.value, KDMUpdateTypeAmount);
            }
            else if (aParamObject.address == parseInt(VlxDevConstants.A_CYC_SUPP_FAN_SPEED)) {
                IoDataHelper.updateDataModelParam(VlxDevConstants.EXT_CYC_SUPP_FAN_SPEED, aParamObject.value, KDMUpdateTypeAmount);
            }
            else if (aParamObject.address == parseInt(VlxDevConstants.A_CYC_CLOUD_STATUS)) {
                IoDataWriter.retryCloudConnectionStatus( aParamObject.value);
            }

        }




        /**
         * Show error not in case of network errors.
         * @param aEvent
         */
        function onError(aEvent) {

            IoDataHelper.pollingEnabled(true);
            console.log("vlxWebSocket:error");

            iErrorCount++;
            if (iErrorCount>5) {
                IoDataHelper.showErrorNote('generalsettings.networkerrornote');
            }

        }

        function clearErrors() {
            "use strict";
            iErrorCount=0;
        }



        /**
         *        PUBLIC
         *
         *    ####   #####   ##
         *   ##  ##  ##  ##  ##
         *   ######  #####   ##
         *   ##  ##  ##      ##
         *   ##  ##  ##      ##
         *
         */
        return {

            init: init,
            isEmpty: isEmpty,
            sendBinaryBuffer: sendBinaryBuffer,
            sendItemBuffer: sendItemBuffer,
            updateUiWithData: updateUiWithData,
            itemProcessed: itemProcessed,
            error: error,
            readyToSend: readyToSend,
            connectToCyclone: connectToCyclone,
            createItem: createItem,
            stopTimer: stopTimer,
            startTimer: startTimer,
            clearErrors: clearErrors

        }


    }();


IoQueue.KItemTypeNormal = 0;
IoQueue.KItemTypeLog = 1;
IoQueue.KItemTypeWeek = 2;
IoQueue.KItemTypeFetch = 3;




/**
 * Used for keeping variables to be send to the device.
 * Since device wants serialized data we will convert
 * this data object to array that contains needed parameters
 * checksum etc.
 *
 */

/**
 *
 * @constructor
 */
function VlxWriteItem() {
    this.type = 0; // 0 = normal item , 1=week clock item
    this.address = 0;
    this.value = 0;
    this.extraParameter = 0;
}

/**
 *
 * @constructor
 */
function VlxDataBuffer() {


    this.data = [];

    this.appendData = function appendData(aDataItem) {
        this.data.push(aDataItem);
    };

    /**
     * Clear buffer
     */
    this.clear = function clear() {
        this.data.splice(0, this.data.length);
    };


    /**
     *
     * @returns {Uint16Array}
     */
    this.convertDataToBuffer = function convertDataToBuffer(aRequestType) {

        if (aRequestType == undefined) {
            //alert('no commands!');
            console.log("Request type not defined, assuming write");
            aRequestType = VlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA;
        }

        var mandatoryParamCount = 3; // len, command, chksum
        var commandWords = 3;
        var bufferLength = this.data.length; // input params
        if (aRequestType == VlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA) {
            commandWords = 2;
        }
        else if (aRequestType == VlxDevConstants.WS_WEB_UI_COMMAND_READ_TABLES)  {
            commandWords = 1;
        }
        else if (aRequestType == VlxDevConstants.WS_WEB_UI_COMMAND_READ_DATA)  {
            commandWords = 1;
        }
        else if (aRequestType == VlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW)  {
            commandWords = 0;
        }
        bufferLength = this.data.length*commandWords+mandatoryParamCount;
        if (aRequestType == VlxDevConstants.WS_WEB_UI_COMMAND_LOG_LIMITED)  {
           bufferLength -= 1;
        }


        var buffer = new Uint16Array(bufferLength);

        var index = 0;
        // buffer length in the start of buffer
        buffer[index] = bufferLength - 1;
        index++;
        if (aRequestType!=VlxDevConstants.WS_WEB_UI_COMMAND_LOG_LIMITED) {
            buffer[index] = aRequestType;
            index++;

        }
        for (var i = 0; i < this.data.length; i++) {

            // write only read command/empty values in case of read table
            if ((aRequestType==VlxDevConstants.WS_WEB_UI_COMMAND_READ_DATA) ) {
                buffer[index + i ] = this.data[i].address;
            }
            else if (aRequestType==VlxDevConstants.WS_WEB_UI_COMMAND_READ_TABLES) {
                buffer[index + i ] = this.data[i].value;
            }
            else if (aRequestType==VlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA){
                buffer[index + i * 2] = this.data[i].address;
                buffer[index + i * 2 + 1] = this.data[i].value;
            }
            else if (aRequestType==VlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW){
                buffer[index + i * 2] = this.data[i].address;

            }
            else { // partial log data request has three params
                buffer[index + i * 2] = this.data[i].address;
                buffer[index + i * 2 + 1] = this.data[i].value;
                if (this.data[i].address==VlxDevConstants.WS_WEB_UI_COMMAND_LOG_LIMITED) {
                    buffer[index + i * 2 + 2] = this.data[i].extraParameter;

                }
            }

        }
        // calculate checksum
        var checksum = 0;
        for (i = 0; i < bufferLength - 1; i++) {
            checksum = checksum + buffer[i];
        }
        checksum = checksum & 0xffff;
        buffer[bufferLength - 1] = checksum;
        return buffer;
    }


}

 /**
  * Created by janne.hamalainen on 2.9.2014.
  * Device data that is read from the device will be parsed in this class.
  * Since we have quite many parameters this class is pretty big.
 */


var vlxWebSocket = null;
var vlxBufferSize = 705; // TODO: Important!
var vlxReceiveBuffer = new Uint16Array(vlxBufferSize);

var readUuidOnce = null; // lodash once function
var KMinutesInWeek = 10080;

// error log items are stored here.
var vlxFaultArray = [];


var IoDataReader = IoDataReader || function () {

        /**
         * Initialize object if needed
         */
        function init(aIpAddress) {
            readUuidOnce = _.once(readUUID);
        }

        /**
         * Main datamodel update function. Will read data from websocket buffer and write to datamodel (l10n)
         */
        function updateData() {

            var enabled = IoDataHelper.uiUpdatesEnabled();
            var skipper = IoDataHelper.skipper();
            console.log("enabled:"+enabled );
            console.log("skipper:"+skipper );

            if ((enabled) && (!skipper)) {


                updateFlags();
                updateDashBoard();
                updateInfoBoard();
                updateServiceBoard();
                updateExpertBoard();

            }
            else {

                IoDataHelper.decSkipper();
            }


            if (!IoDataHelper.initialDataLoaded()) {
                IoDataHelper.initialDataLoaded(true);
            }

        }

        /**
         * Main dashboard view will be updated using these functions.
         */
        function updateDashBoard() {

            // filter remainder
            calculateRemainderDate();

            // week clock
            updateWeekClockModel();
            updateProfileData();
            // read sensor info
            readSensors();
            readErrorFlag();

        }

        /**
         * Info page is updated here
         */
        function updateInfoBoard() {
            updateTimeAndDate();
            readUptime();
            // read cyclone modes
            readCycMode();
            // read serial number
            readSerialNumber();
            // read application version
            readApplicationVersion();
            readMachineModel();
            updateUnitDetails();
        }

        /**
         * Service board update functions
         */
        function updateServiceBoard() {
            readSelfTestValues();
            updateServiceHeaters();
            createErrorLog();

        }

        /**
         * Expert board update functions
         */
        function updateExpertBoard() {

            updateRpmValues();
            updateExpertModbusSettings();
            updateParentalLock();
            updateDefrostSettings();
            updateExpertSensorSettings();
            readConfigInformation();
            readIOSettings();
            readRelaySettings();
            readUuidOnce(); // lodash once
            readCloudConnection();
        }


        /**
         * Read modbus parameter and write it to datamodel
         * @param aModBusAddress
         */

        function dataToModBusAddress(aModBusAddress) {

            var value = readModBusData(aModBusAddress);
            IoDataHelper.updateDataModelValue(aModBusAddress, value);
        }


        /**
         * Read data as modbus variable and write it to model path
         * @param aModBusAddress
         * @param aDataModelPath
         */
        function dataToAddress(aModBusAddress, aDataModelPath) {

            var value = readModBusData(aModBusAddress);
            IoDataHelper.updateDataModelValue(aDataModelPath, value);
        }


        /**
         * Write variable to Datamodel in given address (modbus or normal path)
         * @param aAddress
         * @param aData
         */
        function updateDataModelData(aAddress, aData) {

            var add = aAddress.toString();
            if (add.indexOf(".") >= 0) {

                // we can assume it is a path
                L10n.data(add, aData, IoDataHelper.KReadMetaType);
                console.log("Data written to path:" + add);

            }
            else {
                // should be a modbus address
                var res = L10n.find('modbus', aAddress);
                if (res != null) {

                    // path found so se the data
                    L10n.data(res, aData, IoDataHelper.KReadMetaType);

                }
                else {

                    console.log("Key:" + aAddress + " was not found");

                }
            }
        }


        /**
         * Read and return individual modbus value from receive buffer
         * @param aModBusAddress
         * @returns {*}
         */
        function readModBusData(aModBusAddress) {


            return vlxReceiveBuffer[IoGlobal.calculateOffset(aModBusAddress)];
        }


        /**
         * Update Expert page modbus settings pane
         */
        function updateExpertModbusSettings() {


            var parity = (readModBusData(VlxDevConstants.A_CYC_MODBUS_FRAME) >> 8) & 0xff;
            var modbus_address = readModBusData(VlxDevConstants.A_CYC_MODBUS_ADDRESS);
            var baud_rate = readModBusData(VlxDevConstants.A_CYC_MODBUS_BAUD_X100);
            var stop_bit = readModBusData(VlxDevConstants.A_CYC_MODBUS_FRAME) & 0xff;
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_MODBUS_ADDRESS, modbus_address);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_MODBUS_BAUD_X100, baud_rate);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_MODBUS_STOPBIT, stop_bit);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_MODBUS_PARITY, parity);

            //update cloud status here

        }

        /**
         * Update rpm values to the expert page
         */
        function updateRpmValues() {

            // balance base values
            var supply_fbb = readModBusData(VlxDevConstants.A_CYC_SUPP_FAN_BALANCE_BASE);
            var extract_fbb = readModBusData(VlxDevConstants.A_CYC_EXTR_FAN_BALANCE_BASE);
            IoDataHelper.updateDataModelParam(VlxDevConstants.EXT_CYC_EXTR_FAN_SPEED, extract_fbb, KDMUpdateTypeValue);
            IoDataHelper.updateDataModelParam(VlxDevConstants.EXT_CYC_SUPP_FAN_SPEED, supply_fbb, KDMUpdateTypeValue);

            // rpm values

            var supSpeed = (readModBusData(VlxDevConstants.A_CYC_SUPP_FAN_SPEED));
            var extSpeed = (readModBusData(VlxDevConstants.A_CYC_EXTR_FAN_SPEED));

            IoDataHelper.updateDataModelParam(VlxDevConstants.EXT_CYC_EXTR_FAN_SPEED, extSpeed, KDMUpdateTypeAmount);
            IoDataHelper.updateDataModelParam(VlxDevConstants.EXT_CYC_SUPP_FAN_SPEED, supSpeed, KDMUpdateTypeAmount);

        }


        /**
         * Update week clock data
         */
        function updateWeekClockModel() {


            var event = 0;
            var eventCount = VlxReadConstants.CYC_NUM_OF_SCHEDULED_EVENTS;
            var marks = {};
            var s = "";

            for (var i = 0; i < eventCount; i++) {
                event = readModBusData(VlxDevConstants.A_CYC_SCHEDULE_MONDAY_00 + i);
                s = IoDataHelper.setWeekProfile(i, event);
                if ((event != 0) && (s != "")) {
                    marks[s] = IoDataHelper.profileToString(event);

                }

            }

            var data = {};
            data.value = 1;
            data.marks = marks;
            updateDataModelData(VlxDevConstants.EXT_CYC_WEEKLY_EVENTS, data);

            var enabled = readModBusData(VlxDevConstants.A_CYC_WEEKLY_TIMER_ENABLED);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_WEEKLY_TIMER_ENABLED, enabled);
        }


        /**
         *
         */
        function calculateRemainderDate() {


            var filter_day = readModBusData(VlxDevConstants.A_CYC_FILTER_CHANGED_DAY);
            var filter_month = readModBusData(VlxDevConstants.A_CYC_FILTER_CHANGED_MONTH) - 1;
            var filter_year = IoDataHelper.convertTwoDigitYears(readModBusData(VlxDevConstants.A_CYC_FILTER_CHANGED_YEAR));
            var filterChanged = moment([filter_year, filter_month, filter_day]);

            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_FILTER_CHANGED_DATE, filterChanged);
            var interval = readModBusData(VlxDevConstants.A_CYC_FILTER_CHANGE_INTERVAL) / 30;
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_FILTER_CHANGE_INTERVAL, interval);


        }

        /**
         *
         */
        function updateProfileData() {


            var fanSpeed = readModBusData(VlxDevConstants.A_CYC_FAN_SPEED);
            dataToModBusAddress(VlxDevConstants.A_CYC_FAN_SPEED);

            var fpExt = readModBusData(VlxDevConstants.A_CYC_FIREPLACE_EXTR_FAN);
            var fpSup = readModBusData(VlxDevConstants.A_CYC_FIREPLACE_SUPP_FAN);
            dataToModBusAddress(VlxDevConstants.A_CYC_FIREPLACE_EXTR_FAN);
            dataToModBusAddress(VlxDevConstants.A_CYC_FIREPLACE_SUPP_FAN);

            var outdoorAir = Math.round(IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_TEMP_OUTDOOR_AIR)));
            var supplyAir = Math.round(IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_TEMP_SUPPLY_AIR)));
            var extractAir = Math.round(IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_TEMP_EXTRACT_AIR)));
            var exhaustAir = Math.round(IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_TEMP_EXHAUST_AIR)));

            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_TEMP_NOW_EXTRACT_AIR, extractAir);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_TEMP_NOW_SUPPLY_AIR, supplyAir);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_TEMP_NOW_OUTDOOR_AIR, outdoorAir);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_TEMP_NOW_EXHAUST_AIR, exhaustAir);

//          For external outdoor sensor
//            dataToModBusAddress(VlxDevConstants.A_CYC_TEMP_EXTERNAL_SENSOR);

            var rh = readModBusData(VlxDevConstants.A_CYC_RH_VALUE);
            var co2 = readModBusData(VlxDevConstants.A_CYC_CO2_VALUE);

            console.log("-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<<-");
            console.log("RH Value:" + rh);
            console.log("CO2 Value:" + co2);
            console.log("-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<<-");
            dataToModBusAddress(VlxDevConstants.A_CYC_RH_VALUE);
            dataToModBusAddress(VlxDevConstants.A_CYC_CO2_VALUE);
            // for the icons
            dataToModBusAddress(VlxDevConstants.A_CYC_RH_LEVEL);
            dataToModBusAddress(VlxDevConstants.A_CYC_CO2_LEVEL);

            var val = IoDataHelper.readDataModelValue(VlxDevConstants.A_CYC_CO2_VALUE);

            // convert data to UI
            deviceProfileToUiProfile();


        }

        /**
         *
         */
        function updateTimeAndDate() {


            // read time and date

            var dd = readModBusData(VlxDevConstants.A_CYC_DAY);
            var mm = readModBusData(VlxDevConstants.A_CYC_MONTH) - 1; // months in device are 1-12 and JS has 0-11
            var yy = readModBusData(VlxDevConstants.A_CYC_YEAR); // year is presented in one digit

            yy = IoDataHelper.convertTwoDigitYears(yy);

            var mdate = moment([yy, mm, dd]);

            var hour = readModBusData(VlxDevConstants.A_CYC_HOUR);
            var min = readModBusData(VlxDevConstants.A_CYC_MINUTE);

            var mtime = moment();
            mtime.hour(hour);
            mtime.minutes(min);
            mtime.seconds(0);

            var delta = L10n.moment2delta(mtime);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_DATE, mdate);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_TIME, mtime);


        }

        /**
         *
         */
        function updateServiceHeaters() {


            var io_heater = readModBusData(VlxDevConstants.A_CYC_IN_HEATER);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_IN_HEATER, io_heater);

            io_heater = readModBusData(VlxDevConstants.A_CYC_IN_EXTRA_HEATER);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_IN_EXTRA_HEATER, io_heater);


            var io_supply = readModBusData(VlxDevConstants.A_CYC_IN_SUPPLY_FAN);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_IN_SUPPLY_FAN, io_supply);

            var io_extract= readModBusData(VlxDevConstants.A_CYC_IN_EXTRACT_FAN);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_IN_EXTRACT_FAN, io_extract);

            var io_bypass = readModBusData(VlxDevConstants.A_CYC_IN_BYPASS);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_IN_BYPASS, io_bypass);


            // cyc extra heater type  VlxDevConstants.A_CYC_EXTRA_HEATER_TYPE , VlxDevConstants.A_CYC_POST_HEATER_TYPE
            // cyc post heater type
            var p_type = readModBusData(VlxDevConstants.A_CYC_POST_HEATER_TYPE);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_POST_HEATER_TYPE, p_type);

            var e_type = readModBusData(VlxDevConstants.A_CYC_EXTRA_HEATER_TYPE);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_EXTRA_HEATER_TYPE, e_type);


        }

        /**
         *
         */
        function updateUnitDetails() {

            var daylight_savings = readModBusData(VlxDevConstants.A_CYC_SUMMER_TIME_AUTO_ENAB);
            var gen_time_twelvehours = readModBusData(VlxDevConstants.A_CYC_12_HOUR_CLOCK_ENABLED);
            var gen_handedness = readModBusData(VlxDevConstants.A_CYC_SIDEDNESS);
            var cell_state = readModBusData(VlxDevConstants.A_CYC_CELL_STATE);

            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_SUMMER_TIME_AUTO_ENAB, daylight_savings);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_12_HOUR_CLOCK_ENABLED, !gen_time_twelvehours);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_SIDEDNESS, gen_handedness);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_CELL_STATE, cell_state);


            var cpp = readModBusData(VlxDevConstants.A_CYC_PARENTAL_PASSWORD);
            var cup = readModBusData(VlxDevConstants.A_CYC_USER_PASSWORD);
            var cmp = readModBusData(VlxDevConstants.A_CYC_MASTER_PASSWORD);

            var bcdCup = IoDataHelper.bcdToInt(cup);
            //Note! Machine stores user password in reversed form. I.e. if user sets the password as '1234' then
            //the machine has it as '4321'
            var reversedCup = bcdCup.toString().split('').reverse().join('');
            IoGlobal.EXT_DATA_UC = parseInt(reversedCup);
            IoGlobal.EXT_DATA_MPWD = cmp;

            IoGlobal.EXT_DATA_PC = cpp;
            var cal = readModBusData(VlxDevConstants.A_CYC_ACCESS_LEVEL);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_RESTORE_SERVICE_MODE, cal);

            var arr = [];
            arr.push(readModBusData(VlxDevConstants.A_CYC_UUID0));
            arr.push(readModBusData(VlxDevConstants.A_CYC_UUID1));
            arr.push(readModBusData(VlxDevConstants.A_CYC_UUID2));
            arr.push(readModBusData(VlxDevConstants.A_CYC_UUID3));
            arr.push(readModBusData(VlxDevConstants.A_CYC_UUID4));
            arr.push(readModBusData(VlxDevConstants.A_CYC_UUID5));
            arr.push(readModBusData(VlxDevConstants.A_CYC_UUID6));
            arr.push(readModBusData(VlxDevConstants.A_CYC_UUID7));

        }


        /**
         * Read and update the self test related parameters
         */
        function readSelfTestValues() {



            var mode = readModBusData(VlxDevConstants.A_CYC_MODE);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_START_SELFTEST, mode === VlxDevConstants.C_CYC_MODE_SELF_TEST);

            dataToModBusAddress(VlxDevConstants.A_CYC_EFFICIENCY_TEST);
            dataToModBusAddress(VlxDevConstants.A_CYC_BY_PASS_TEST);
            dataToModBusAddress(VlxDevConstants.A_CYC_HEATER_TEST);
            dataToModBusAddress(VlxDevConstants.A_CYC_EXTRA_HEATER_TEST);

            var temp_supply_air = IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_TEMP_SUPPLY_AIR));
            var temp_supply_cell_air = IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_TEMP_SUPPLY_CELL_AIR));
            var temp_outdoor_air = IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_TEMP_OUTDOOR_AIR));
            var temp_exhaust_air = IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_TEMP_EXHAUST_AIR));
            var temp_extract_air = IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_TEMP_EXTRACT_AIR));

            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_TEMP_SUPPLY_AIR, Math.round(temp_supply_air));
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_TEMP_SUPPLY_CELL_AIR, Math.round(temp_supply_cell_air));
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_TEMP_OUTDOOR_AIR, Math.round(temp_outdoor_air));
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_TEMP_EXHAUST_AIR, Math.round(temp_exhaust_air));
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_TEMP_EXTRACT_AIR, Math.round(temp_extract_air));


        }


        /**
         * Read machine type info from the textmap
         */
        function readMachineModel() {

            var machinemodel = readModBusData(VlxDevConstants.A_CYC_MACHINE_MODEL);
            var machine_type = readModBusData(VlxDevConstants.A_CYC_MACHINE_TYPE);

            var model = TextMap['device_model_data'][machinemodel];
            var type = TextMap['device_type_data'][machine_type];

            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_MACHINE_MODEL, model);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_MACHINE_TYPE, type);


        }

        /**
         * read uptime information
         */
        function readUptime() {

            var current_up_time = readModBusData(VlxDevConstants.A_CYC_CURRENT_UP_TIME_HOURS);
            var total_up_time_years = readModBusData(VlxDevConstants.A_CYC_TOTAL_UP_TIME_YEARS);
            var total_up_time_hours = readModBusData(VlxDevConstants.A_CYC_TOTAL_UP_TIME_HOURS);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_CURRENT_UP_TIME, current_up_time);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_TOTAL_UP_TIME, {
                years: total_up_time_years,
                hours: total_up_time_hours
            });

        }

        /**
         * Read application version info
         */
        function readApplicationVersion() {

            var s = [];
            var n = 0;
            var allFF = true;
            var firstNonZero = 0;
            for (var i = 0; i < 9; i++) {
                n = IoDataHelper.swap16(readModBusData(VlxDevConstants.A_CYC_APPL_SW_VERSION_1 + i));
                if(n !== 0xffff) {
                    allFF = false;
                }
                if(n !== 0 && firstNonZero === 0) {
                    firstNonZero = i;
                }
                s.push(n.toString(10));
            }
            /*VlxDevConstants.EXT_CYC_APPL_SW_VERSION = 0;*/
            var versionString;
            if(allFF) {
                versionString = '--';
            } else {
                versionString = s.slice(firstNonZero).join('.');
            }
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_APPL_SW_VERSION, versionString);

        }

        /**
         * Read device serial number
         */
        function readSerialNumber() {
            var s = "";
            var msw = readModBusData(VlxDevConstants.A_CYC_SERIAL_NUMBER_MSW);
            var lsw = readModBusData(VlxDevConstants.A_CYC_SERIAL_NUMBER_LSW);
            s = "0x" + IoDataHelper.pad(msw.toString(16), 4) + IoDataHelper.pad(lsw.toString(16), 4);

            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_SERIAL_NUMBER, parseInt(s));
        }


        /**
         * Read powermode
         */
        function readCycMode() {

            var mode = readModBusData(VlxDevConstants.A_CYC_MODE);
            var deviceON = true;

            switch (mode) {

                case VlxDevConstants.C_CYC_MODE_NORMAL:
                case VlxDevConstants.C_CYC_MODE_TESTING:
                {
                    IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_TEST_MODE_SWITCH, mode);
                    break;
                }
                case VlxDevConstants.C_CYC_MODE_OFF:
                {
                    deviceON = false;
                    break;
                }

                default:
                {
                    break;
                }

            }

            console.log("Power state:" + deviceON);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_POWER, deviceON);
        }


        /**
         *
         */
        function updateParentalLock() {

            var parental = readModBusData(VlxDevConstants.A_CYC_PARENTAL_CTRL_ENABLED);
            dataToModBusAddress(VlxDevConstants.A_CYC_PARENTAL_CTRL_ENABLED);

        }

        /**
         *
         */
        function updateDefrostSettings() {

            //var cycState = this.cyclone_receive_buffer[VlxDevConstants.CYC_STATE + this.sw_offset];
            var cycDefrost = readModBusData(VlxDevConstants.A_CYC_DEFROSTING);
            dataToModBusAddress(VlxDevConstants.EXT_CYC_DEFROSTING);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_DEFROST_ON, cycDefrost === 1);

            var rho = readModBusData(VlxDevConstants.A_CYC_DEFROST_RH_OFFSET);
            rho = IoDataHelper.getAntiFrostHumidity(rho);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_DEFROST_RH_OFFSET, rho);

            var tp = readModBusData(VlxDevConstants.A_CYC_DEFROST_TEMP_PARAM);
            tp = IoDataHelper.getAntiFrostTemperature(tp);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_DEFROST_TEMP_PARAM, tp);

            dataToModBusAddress(VlxDevConstants.A_CYC_DEFROST_MODE);
        }

        /**
         *
         */
        function updateExpertSensorSettings() {


            dataToModBusAddress(VlxDevConstants.A_CYC_RH_LEVEL_MODE);
            dataToModBusAddress(VlxDevConstants.A_CYC_SUPPLY_HEATING_ADJUST_MODE);

            var rh_lvl = readModBusData(VlxDevConstants.A_CYC_RH_BASIC_LEVEL);
            if (rh_lvl > 100) {
                rh_lvl = 100;
            }
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_RH_BASIC_LEVEL, rh_lvl);
            //dataToModBusAddress(VlxDevConstants.A_CYC_RH_BASIC_LEVEL);
            dataToModBusAddress(VlxDevConstants.A_CYC_CO2_THRESHOLD);

        }



        /**
         * to be splitted to smaller funcs
         */
        function deviceProfileToUiProfile() {


            var result = 0;
            // home -------------------------------------
            var home_air_temp = IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_HOME_AIR_TEMP_TARGET));
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_HOME_AIR_TEMP_TARGET, home_air_temp);

            var home_fan_speed = readModBusData(VlxDevConstants.A_CYC_HOME_SPEED_SETTING);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_HOME_SPEED_SETTING, home_fan_speed);

            var home_co2 = readModBusData(VlxDevConstants.A_CYC_HOME_CO2_CTRL_ENABLED);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_HOME_CO2_CTRL_ENABLED, home_co2);

            dataToModBusAddress(VlxDevConstants.A_CYC_HOME_RH_CTRL_ENABLED);

            // away -------------------------------------
            var away_air_temp = IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_AWAY_AIR_TEMP_TARGET));
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_AWAY_AIR_TEMP_TARGET, away_air_temp);

            var away_fan_speed = readModBusData(VlxDevConstants.A_CYC_AWAY_SPEED_SETTING);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_AWAY_SPEED_SETTING, away_fan_speed);

            var away_co2 = readModBusData(VlxDevConstants.A_CYC_AWAY_CO2_CTRL_ENABLED);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_AWAY_CO2_CTRL_ENABLED, away_co2);

            var away_rh = readModBusData(VlxDevConstants.A_CYC_AWAY_RH_CTRL_ENABLED);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_AWAY_RH_CTRL_ENABLED, away_rh);

            // boost -------------------------------------
            var boost_air_temp = IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_BOOST_AIR_TEMP_TARGET));
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_BOOST_AIR_TEMP_TARGET, boost_air_temp);

            var boost_fan_speed = readModBusData(VlxDevConstants.A_CYC_BOOST_SPEED_SETTING);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_BOOST_SPEED_SETTING, boost_fan_speed);

            var boost_co2 = readModBusData(VlxDevConstants.A_CYC_BOOST_CO2_CTRL_ENABLED);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_BOOST_CO2_CTRL_ENABLED, boost_co2);

            var boost_rh = readModBusData(VlxDevConstants.A_CYC_BOOST_RH_CTRL_ENABLED);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_BOOST_RH_CTRL_ENABLED, boost_rh);

            var boostTimer = readModBusData(VlxDevConstants.A_CYC_BOOST_TIMER);
            var boostTime = readModBusData(VlxDevConstants.A_CYC_BOOST_TIME);
            var boostTimerEnabled = readModBusData(VlxDevConstants.A_CYC_BOOST_TIMER_ENABLED);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_BOOST_TIMER_ENABLED, boostTimerEnabled);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_BOOST_TIME, boostTime);


            // fireplace -------------------------------------
            var fireTimer = readModBusData(VlxDevConstants.A_CYC_FIREPLACE_TIMER);
            var fireTime = readModBusData(VlxDevConstants.A_CYC_FIREPLACE_TIME);
            var fireTimerEnabled = readModBusData(VlxDevConstants.A_CYC_FIREPLACE_TIMER_ENABLED);

            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_FIREPLACE_TIMER_ENABLED, fireTimerEnabled);
            IoDataHelper.updateDataModelValue(VlxDevConstants.A_CYC_FIREPLACE_TIME, fireTime);

            var cycState = readModBusData(VlxDevConstants.A_CYC_STATE);
            dataToModBusAddress(VlxDevConstants.A_CYC_STATE);

            if (fireTimer == 0) {
                if (boostTimer == 0) {
                    if (cycState == 0) {
                        result = 0;
                    }
                    else {
                        result = 1;
                    }
                }
                else {
                    result = 2;
                }
            }
            else {
                result = 3;
            }

            // real profile number 0-3
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_ACTIVE_PROFILE, result);

            console.log("--------------------------------------------------------------------------");
            console.log("Profile from device: " + result);
            console.log("Profile in model: " + IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CYC_ACTIVE_PROFILE));
            console.log("Profile in model after write: " + IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CYC_ACTIVE_PROFILE));
            console.log("--------------------------------------------------------------------------");
        }


        /**
         * Count number of RH and CO2 sensors. Calls calculateSensors below
         */
        function readSensors() {


            var rh_sensors = calculateSensors("RH");
            var co2_sensors = calculateSensors("CO2");

            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_NUM_OF_RH_SENSORS, rh_sensors);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_NUM_OF_CO2_SENSORS, co2_sensors);

        }


        /**
         * Sensor counting code
         * @param aSensorType (RH or CO2)
         * @returns {number}
         */
        function calculateSensors(aSensorType) {

            // these are used to help reading correct modbus value from the model
            var sensor_array = [VlxDevConstants.EXT_SEN_ANALOG_SENSOR_INPUT,
                VlxDevConstants.EXT_SEN_RH_SENSOR_0,
                VlxDevConstants.EXT_SEN_RH_SENSOR_1,
                VlxDevConstants.EXT_SEN_RH_SENSOR_2,
                VlxDevConstants.EXT_SEN_RH_SENSOR_3,
                VlxDevConstants.EXT_SEN_RH_SENSOR_4,
                VlxDevConstants.EXT_SEN_RH_SENSOR_5,
                VlxDevConstants.EXT_SEN_CO2_SENSOR_0,
                VlxDevConstants.EXT_SEN_CO2_SENSOR_1,
                VlxDevConstants.EXT_SEN_CO2_SENSOR_2,
                VlxDevConstants.EXT_SEN_CO2_SENSOR_3,
                VlxDevConstants.EXT_SEN_CO2_SENSOR_4,
                VlxDevConstants.EXT_SEN_CO2_SENSOR_5];

            // rh sensors are basically at offset+rh_offset
            var rh_offset = 0;
            // there are 1+6 rh sensors so co2 sensors start at 7
            var co2_offset = 7;


            var dm_offset = rh_offset;

            // this is the return value
            var numOfSensors = 0;
            // offset to buffer data
            var offSet = 0;

            // max number of sensors (7 for rh, 6 for co2)
            var maxSensors = 6;

            if (aSensorType == "RH") {
                offSet = IoGlobal.calculateOffset(VlxDevConstants.A_CYC_ANALOG_SENSOR_INPUT);
                maxSensors = 7;
            }
            else if (aSensorType == "CO2") {
                offSet = IoGlobal.calculateOffset(VlxDevConstants.A_CYC_CO2_SENSOR_0);
                dm_offset = co2_offset;
            }
            else {
                return 0;
            }

            var i = 0;
            for (i = 0; i < maxSensors; i++) {
                // read the real sensor value from the databuffer
                var data = vlxReceiveBuffer[offSet + i]; //console.log("sensor type:"+aSensorType+" state:"+data);
                if (data != 65535) {
                    // there is a sensor so increase the count
                    numOfSensors++;
                    // update correct parameter in the datamodel
                    IoDataHelper.updateDataModelValue(sensor_array[dm_offset + i], data);

                    console.log("Sensor data:" + data);
                }
            }
            return numOfSensors;
        }

        /**
         * Fetch temperature, co2 and rh logs (0-5)
         * @param aLogNumber
         */
        function fetchTemperatures(aLogNumber) {
            var addy = VlxDevConstants.WS_WEB_UI_COMMAND_LOG_LIMITED;
            var buf = new VlxDataBuffer();

            var item = IoQueue.createItem();
            item.address = addy;
            item.value = aLogNumber;
            item.extraParameter = KMinutesInWeek;
            buf.appendData(item);

            // here we have to have separated to convert and send
            // as we force it to be read command, not write as by default
            var conv = buf.convertDataToBuffer(VlxDevConstants.WS_WEB_UI_COMMAND_LOG_LIMITED);
            IoQueue.sendBinaryBuffer(conv, IoQueue.KItemTypeLog);
        }

        function fetchRawLogs() {
            var addy = VlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW;
            var buf = new VlxDataBuffer();

            var item = IoQueue.createItem();
            item.address = addy;
            item.value = 0;
            buf.appendData(item);

            // here we have to have separated to convert and send
            // as we force it to be read command, not write as by default
            var conv = buf.convertDataToBuffer(VlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW);
            IoQueue.sendBinaryBuffer(conv, IoQueue.KItemTypeLog);
        }



        /**
         * Read and setr relay setting to the UI
         */
        function readRelaySettings() {
            dataToModBusAddress(VlxDevConstants.A_CYC_RELAY_MODE);
        }

        /**
         * Read IO setting + custom "profile" settings
         *
         */
        function readIOSettings() {

            var temp = IoDataHelper.toCelsius(readModBusData(VlxDevConstants.A_CYC_EXTRA_AIR_TEMP_TARGET));
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_EXTRA_AIR_TEMP_TARGET, temp);

            var extract = readModBusData(VlxDevConstants.A_CYC_EXTRA_EXTR_FAN);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_EXTRA_EXTR_FAN, extract);

            var supply = readModBusData(VlxDevConstants.A_CYC_EXTRA_SUPP_FAN);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_EXTRA_SUPP_FAN, supply);

            var time = readModBusData(VlxDevConstants.A_CYC_EXTRA_TIME);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_EXTRA_TIME, {
                hours: parseInt(time / 60),
                minutes: time % 60
            });

            var enab = readModBusData(VlxDevConstants.A_CYC_EXTRA_TIMER_ENABLED);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_EXTRA_TIMER_ENABLED, enab);


            var di1 = readModBusData(VlxDevConstants.A_CYC_DIGITAL_INPUT_1_MODE);
            var di2 = readModBusData(VlxDevConstants.A_CYC_DIGITAL_INPUT_2_MODE);

            // update analog io
            updateIoModes();
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_DIGITAL_INPUT_1_MODE, di1);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_DIGITAL_INPUT_2_MODE, di2);

        }


        /**
         * Read config info
         */
        function readConfigInformation() {


            // The value is an 8-digit integer array. The array item semantics:
            // 0: serial number msw
            // 1: serial number lsw
            // 2: machine type
            // 3: machine model
            // 4: master password
            // 5: configuration msw
            // 6: configuration lsw
            // 7: configuration checksum
            // The default value passes the checksum check

            var msw = readModBusData(VlxDevConstants.A_CYC_SERIAL_NUMBER_MSW);
            var lsw = readModBusData(VlxDevConstants.A_CYC_SERIAL_NUMBER_LSW);
            var machinemodel = readModBusData(VlxDevConstants.A_CYC_MACHINE_MODEL);
            var machine_type = readModBusData(VlxDevConstants.A_CYC_MACHINE_TYPE);
            var passwd = readModBusData(VlxDevConstants.A_CYC_MASTER_PASSWORD);
            var cfg_msw_ = readModBusData(VlxDevConstants.A_CYC_CONFIGURATION_MSW);
            var cfg_lsw = readModBusData(VlxDevConstants.A_CYC_CONFIGURATION_LSW);
            var cfgchk = readModBusData(VlxDevConstants.A_CYC_CONFIGURATION_CHECKSUM);

            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_CONFIG_NUMBER, [msw, lsw, machinemodel, machine_type, passwd, cfg_msw_, cfg_lsw, cfgchk]);

        }


        /** Create error log
         *
         */
        function createErrorLog() {

            vlxFaultArray.length = 0;

            var offset = 6;
            var fault = null;
            var fcode = 0;
            var fseverity = 0;
            var fstartdate = 0;
            var fenddate = 0;
            var fcount = 0;
            var fstate = 0;
            var sdate = moment();
            var edate = moment();
            var ffirst = 0;
            var flatest = 0;

            var errors = readModBusData(VlxDevConstants.A_CYC_TOTAL_FAULT_COUNT);

            for (var i = 0; i < errors; i++) {
                fcode = readModBusData(VlxDevConstants.A_CYC_FAULT_CODE + (i * 6) + 0);
                fseverity = readModBusData(VlxDevConstants.A_CYC_FAULT_CODE + (i * 6) + 1);
                fstartdate = readModBusData(VlxDevConstants.A_CYC_FAULT_CODE + (i * 6) + 2);
                fenddate = readModBusData(VlxDevConstants.A_CYC_FAULT_CODE + (i * 6) + 3);
                fcount = readModBusData(VlxDevConstants.A_CYC_FAULT_CODE + (i * 6) + 4);
                fstate = readModBusData(VlxDevConstants.A_CYC_FAULT_CODE + (i * 6) + 5);
                ffirst = moment(IoDataHelper.date16ToDate(fstartdate));
                flatest = moment(IoDataHelper.date16ToDate(fenddate));


                fault = {};
                fault.code = fcode;
                fault.severity = fseverity;
                fault.first = moment(IoDataHelper.date16ToDate(fstartdate));
                fault.latest = moment(IoDataHelper.date16ToDate(fenddate));
                fault.times = fcount;
                fault.status = fstate;
                vlxFaultArray.push(fault);

            }
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_FAULT_ARRAY, vlxFaultArray);

        }

        /**
         * Update show wizard flag
         */
        function updateFlags() {

            // Wizard check
            var wiz = readModBusData(VlxDevConstants.A_CYC_INSTALLATION_DONE);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_SHOW_WIZARD, (wiz != 0));

        }

        /**
         * Update analog and digital modes
         */
        function updateIoModes() {


            var mode = readModBusData(VlxDevConstants.A_CYC_ANALOG_INPUT_MODE);
            if (mode == VlxDevConstants.C_CYC_ANA_IN_POST_HEAT) {
                mode = VlxDevConstants.C_CYC_ANA_IN_SPEED; // we need to convert value 3 to 2 since ui doesn't have index 3
            }
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_ANALOG_INPUT_MODE, mode);


        }

        /**
         * Read device UID value and store it in the datamodel
         */
        function readUUID() {
            "use strict";



            VlxDevConstants.A_CYC_UUID7 = 0;

            var uuidBuffer = '';
            for (var i = 0; i < 8; ++i) { //Vallox buffer has 8 16 bit values

                var uuidWord = readModBusData(VlxDevConstants.A_CYC_UUID0 + i);
                //new dec to hex with leading zeros
                uuidBuffer += ( "0000" + uuidWord.toString( 16)).substr( -4);

                //console.log('UUID WORD ' + i + ': ' + uuidWord + ' Type: ' + typeof uuidWord + '  Hex Value: ' + toHex( uuidWord, 4) + '   totalHex: ' + uuidBuffer + '  Length: ' + uuidBuffer.length);
            }

            var s = '';
            s = uuidBuffer.toUpperCase();

            s = s.substr( 0, 8) + '-' + s.substr( 8, 4) + '-' + s.substr( 12, 4)  + '-' + s.substr( 16, 4) + '-' + s.substr( 20, 12);

            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_UUID_STRING, s);


        }

        /**
         * Check if cloud connection is enabled
         */
        function readCloudConnection() {
            "use strict";

            var cloud = readModBusData(VlxDevConstants.A_CYC_ETH_CLOUD_ENABLED);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CLOUD_CONNECT, cloud);

            var cloudConnectionStatus = readModBusData( VlxDevConstants.A_CYC_CLOUD_STATUS);
            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CLOUD_CONNECTION_STATUS, cloudConnectionStatus);

        }

        /**
         * Determine if we need to show note to the user that there is severe error and he/she should go and
         * check/fix it in error log.
         */
        function readErrorFlag() {

            if (vproduction) {
                var limp = readModBusData(VlxDevConstants.A_CYC_LIMP_MODE);
                if ((limp!=0) && (!DialogStack.noteVisible())) {
                    IoDataHelper.showDeviceErrorNote();
                }
            }
        }



        /**
         *        PUBLIC
         *
         *    ####   #####   ##
         *   ##  ##  ##  ##  ##
         *   ######  #####   ##
         *   ##  ##  ##      ##
         *   ##  ##  ##      ##
         *
         */
        return {

            init: init,
            dataToModBusAddress: dataToModBusAddress,
            dataToAddress: dataToAddress,
            fetchTemperatures: fetchTemperatures,
            fetchRawLogs: fetchRawLogs,
            updateData: updateData

        }

    }();


/**
 * Created by Janne Hämäläinen on 4.9.2014.
 * Reads data from Data Model (l10n) and writes it to device
 * Listener will be called when data is changed in the model
 * We will then determine if that parameter is send such as or if
 * it needs some kind of conversion/extra parameters.
 * These extra/converted fields have id EXT_ in the beginning of
 * variable name.
 */



var IoDataWriter = IoDataWriter || function () {

        var maxEvents = 168;
        var oldWeekArray = new Array(maxEvents);
        var currentWeekArray = new Array(maxEvents);

        //machine may not instantly send updated value, instead sends old value
        //running Timer to retry 9 times
        var cloudStatusRetryCounter = 0;
        var cloudStatusRetryLimit = 20;
        var cloudStatusTimerEnabled = false;
        var cloudStatusInterval = 500;

        /**
         * Clear week clock arrays
         */
        function init() {

            // register for all the events
            L10n.register(listen, '*');
            for (var i = 0; i < maxEvents; i++) {
                oldWeekArray[i] = -1;
                currentWeekArray[i] = 0;
            }
        }


        /**
         * Listener function for datamodel changes
         * @param aPath
         * @param aData
         * @param aMeta
         */
        function listen(aPath, aData, aMeta) {


            //quick fix
            if( aPath == "cloud.connectionstatus") {
                handleExtParameters(aData.modbus, aData);
            }

            var enabled = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_LISTENER_ENABLED);

            // if listener is enabled process the messages
            if (enabled) {


                // no meta data so this is real change by user
                if ((aMeta != undefined) && (aMeta != "IoDataReader")) {
                    aMeta = undefined;
                }
                if (aMeta == undefined) {

                    // check if it has modbus varible
                    if (aData.modbus != undefined) {
                        console.log("path:" + aPath);
                        console.log("data:" + aData);

                        // check if it is Extended Parameter
                        if (aData.modbus >= KExtParamBase) {
                            handleExtParameters(aData.modbus, aData);
                        }
                        // Nope it is regular ModBus stuff to write
                        else {
                            handleNormalParameters(aData.modbus, aData);
                        }

                    }
                }

            }

        }

        /**
         * This handler for parameters that match directly to modbus parameters
         * @param aModbusAddress
         * @param aData
         */
        function handleNormalParameters(aModbusAddress, aData) {
            console.log("Normal parameter: " + aModbusAddress);
            dataToDevice(aModbusAddress, aData.value);
        }

        /**
         * "extended" parameters are those that cannot be sent directly from UI to device
         * and need some kind of manipulation.
         * @param aModbusAddress
         * @param aData
         */
        function handleExtParameters(aModbusAddress, aData) {

            var aValue = aData.value;
            switch (aModbusAddress) {
                case VlxDevConstants.EXT_REFRESH_GRAPHS:
                {
                    IoLogReader.fetchLogs();
                    break;
                }
                case VlxDevConstants.EXT_CYC_START_SELFTEST:
                {
                    startSelfTest();
                    break;
                }
                case VlxDevConstants.EXT_CYC_POWER:
                {
                    powerOnOff(aValue);
                    break;
                }
                case VlxDevConstants.EXT_CYC_TIME:
                {
                    writeTime();
                    break;
                }
                case VlxDevConstants.EXT_CYC_DATE:
                {
                    writeDate(aValue);
                    break;
                }
                case VlxDevConstants.EXT_CYC_ACTIVE_PROFILE:
                {
                    uiProfileToDeviceProfile(aValue);
                    break;
                }
                case VlxDevConstants.EXT_CYC_WEEKLY_EVENTS:
                {

                    weekClockToDev(aData);
                    break;
                }
                case VlxDevConstants.EXT_CLEAR_WEEK_EVENTS:
                {
                    clearWeekClock(aData);
                    break;
                }
                case VlxDevConstants.EXT_CYC_FILTER_CHANGED_DATE:
                {
                    filtersChanged(aData);
                    break;
                }
                case VlxDevConstants.EXT_CYC_RESTORE_FACTORY_SETTINGS:
                case VlxDevConstants.EXT_CYC_SAVE_INSTALLATION_SETTINGS:
                case VlxDevConstants.EXT_CYC_RESTORE_INSTALLATION_SETTINGS:
                case VlxDevConstants.EXT_CYC_SAVE_USER_SETTINGS:
                case VlxDevConstants.EXT_CYC_RESTORE_USER_SETTINGS:
                {
                    factorySettings(aModbusAddress, aData);
                    break;
                }

                case VlxDevConstants.EXT_ERROR_SOLVED:
                {
                    markErrorAsSolved(aData.value);
                    break;
                }
                case VlxDevConstants.EXT_TEST_MODE_SWITCH:
                {
                    setTestMode(aData);
                    break;
                }
                case VlxDevConstants.EXT_CYC_SUPP_FAN_SPEED:
                case VlxDevConstants.EXT_CYC_EXTR_FAN_SPEED:
                {

                    writeBalanceBase(aData);
                    break;
                }
                case VlxDevConstants.EXT_SERVICE_MODE:
                {
                    setServiceMode(aData);
                    break;

                }
                case VlxDevConstants.EXT_CYC_RESTORE_SERVICE_MODE:
                {
                    storeServiceMode(aData);
                    break;
                }
                case VlxDevConstants.EXT_CYC_CONFIG_NUMBER:
                case VlxDevConstants.EXT_CONFIG_BUTTON:
                case VlxDevConstants.EXT_CONFIG_DONE:
                {
                    storeConfigNumber(aData);
                    break;
                }
                case VlxDevConstants.EXT_HOME_AIR_TEMP_TARGET:
                case VlxDevConstants.EXT_AWAY_AIR_TEMP_TARGET:
                case VlxDevConstants.EXT_BOOST_AIR_TEMP_TARGET:
                {
                    writeProfileTemperatures(aData);
                    break;
                }

                case VlxDevConstants.EXT_DIGITAL_INPUT_1_MODE:
                {
                    setIoMode(aData, 0);
                    break;
                }
                case VlxDevConstants.EXT_DIGITAL_INPUT_2_MODE:
                {
                    setIoMode(aData, 1);
                    break;
                }
                case VlxDevConstants.EXT_ANALOG_INPUT_MODE:
                {
                    setAnalogInputMode(aData);
                    break;
                }
                case VlxDevConstants.EXT_USER_PASSWORD:
                case VlxDevConstants.EXT_LC_CHANGED:
                {
                    setUserPassword(aData);
                    break;
                }

                case VlxDevConstants.EXT_EXTRA_AIR_TEMP_TARGET:
                case VlxDevConstants.EXT_EXTRA_EXTR_FAN:
                case VlxDevConstants.EXT_EXTRA_SUPP_FAN:
                case VlxDevConstants.EXT_EXTRA_TIME:
                case VlxDevConstants.EXT_EXTRA_TIMER_ENABLED:
                {
                    setExtraIoParams(aData);
                    break;
                }

                case VlxDevConstants.EXT_MACHINE_TYPE:
                {
                    setMachineType(aData);
                    break;
                }
                case VlxDevConstants.EXT_DEFROST_ON:
                {
                    setDefrostOn(aData);
                    break;
                }
                case VlxDevConstants.EXT_FILTER_CHANGE_INTERVAL:
                {
                    setFilterInterval(aData);
                    break;
                }
                case VlxDevConstants.EXT_BOOST_TIMER_ENABLED:
                {
                    setBoostTimer(aData);
                    break;
                }
                case VlxDevConstants.EXT_BOOST_TIME:
                {
                    setBoostTime(aData);
                    break;
                }
                case VlxDevConstants.EXT_MODBUS_PARITY:
                case VlxDevConstants.EXT_MODBUS_STOPBIT:
                {
                    setParityAndStopBit(aData);
                    break;
                }
                case VlxDevConstants.EXT_CYC_DEFROST_TEMP_PARAM:
                {
                    setAntiFrostTemperature(aData);
                    break;
                }
                case VlxDevConstants.EXT_CYC_DEFROST_RH_OFFSET:
                {
                    setAntiFrostHumidity(aData);
                    break;
                }
/*
                case VlxDevConstants.EXT_GRANT_ACCESS_SEND:
                {
                    grantAccessToDevice(aData);
                    break;
                }
*/
                case VlxDevConstants.EXT_CLOUD_CONNECT:
                {
                    connectToCloud(aData);
                    break;
                }
                case VlxDevConstants.EXT_CLOUD_DISCONNECT:
                {
                    disconnectFromCloud(aData);
                    break;
                }
                case VlxDevConstants.EXT_CLOUD_CONNECTION_STATUS:
                {
                    updateCloudConnectionStatus();
                    break;
                }


                default:
                {
                    break;
                }

            }

        }


        /**
         * Write target temperature values of the profiles
         * @param aData
         */
        function writeProfileTemperatures(aData) {

            var add = 0;
            var val = IoDataHelper.toKelvin(aData.value);

            switch (aData.modbus) {

                case VlxDevConstants.EXT_CYC_DEFROST_TEMP_PARAM:
                {
                    add = VlxDevConstants.A_CYC_DEFROST_TEMP_PARAM;
                    break;
                }
                case VlxDevConstants.EXT_HOME_AIR_TEMP_TARGET:
                {
                    add = VlxDevConstants.A_CYC_HOME_AIR_TEMP_TARGET;
                    break;
                }
                case VlxDevConstants.EXT_AWAY_AIR_TEMP_TARGET:
                {
                    add = VlxDevConstants.A_CYC_AWAY_AIR_TEMP_TARGET;
                    break;
                }
                case VlxDevConstants.EXT_BOOST_AIR_TEMP_TARGET:
                {
                    add = VlxDevConstants.A_CYC_BOOST_AIR_TEMP_TARGET;
                    break;
                }
                default:
                {
                    break;
                }

            }
            dataToDevice(add, val);
        }


        /**
         * Write balance base values
         * @param aData
         */
        function writeBalanceBase(aData) {
            // we also need to put the device to home profile and set the fan speed to
            // higher value of VlxDevConstants.EXT_CYC_EXTR_FAN_SPEED and VlxDevConstants.EXT_CYC_SUPP_FAN_SPEED
            var extractFanSpeed = parseInt(IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CYC_EXTR_FAN_SPEED));
            var supplyFanSpeed = parseInt(IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CYC_SUPP_FAN_SPEED));
            var homeFanSpeed = extractFanSpeed > supplyFanSpeed ? extractFanSpeed : supplyFanSpeed;
            console.log("===== writeBalanceBase: setting home profile fan speed to: " + homeFanSpeed);

            var buf = new VlxDataBuffer();
            var item = new VlxWriteItem();
            item.address = VlxDevConstants.A_CYC_HOME_SPEED_SETTING;
            item.value = homeFanSpeed;
            buf.appendData(item);

            item = new VlxWriteItem();
            item.address = VlxDevConstants.A_CYC_SUPP_FAN_BALANCE_BASE;
            item.value = supplyFanSpeed;
            buf.appendData(item);

            item = new VlxWriteItem();
            item.address = VlxDevConstants.A_CYC_EXTR_FAN_BALANCE_BASE;
            item.value = extractFanSpeed;
            buf.appendData(item);


            var prof=IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CYC_ACTIVE_PROFILE);
            if (prof != VlxDevConstants.C_CYC_STATE_HOME){
                uiProfileToDeviceProfile(VlxDevConstants.C_CYC_STATE_HOME);
            }

            var conv=buf.convertDataToBuffer(VlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA);
            IoQueue.sendBinaryBuffer(conv);

        }


        /**
         *
         * @param aData
         */
        function storeServiceMode(aData) {
            var val = aData.value;
            dataToDevice(VlxDevConstants.A_CYC_ACCESS_LEVEL, val);
            setServiceLock();
        }

        /**
         *
         * @param aMode
         */
        function setServiceLock(aMode) {

            // If dashboard is ready we can enable the whole ui (code 0)
            // while "service lock" is open
            if (IoGlobal.dashboard) {
                IoGlobal.dashboard.doUpdateAccessLevel(0);
            }

            if (IoGlobal.serviceDelay != null) {
                clearInterval(IoGlobal.serviceDelay);
            }
            IoGlobal.serviceDelay = _.delay(function () {
                IoDataHelper.updateDataModelParam('settings.response', 'enabled', KDMUpdateTypeValue);

                // read default value from datamodel and update just the ui
                var level = L10n.value('wizard.access.level');
                IoGlobal.dashboard.doUpdateAccessLevel(level);

            }, 60 * 5 * 1000);  // after 5 mins pin code is asked again

        }

        /**
         *
         * @param aData
         */
        function setServiceMode(aData) {
            var data = parseInt(aData.value);
            var val = IoGlobal.EXT_DATA_MPWD;
            var mode = 0;
            if (data == val) {
                IoDataHelper.updateDataModelParam('settings.response', 'accepted', KDMUpdateTypeValue);
                setServiceLock();

            }
            else if (data == IoGlobal.EXT_DATA_UC) {

                IoDataHelper.updateDataModelParam('settings.response', 'accepted', KDMUpdateTypeValue);
                //$('#wheelpin').hide();
                //$('#pin-edit-icon').removeClass('dashboard-pin-edit-dimmed');
                //$('#pin-edit-icon').addClass('dashboard-pin-edit');
                setServiceLock();
            }
            else {
                IoDataHelper.updateDataModelParam('settings.response', 'denied', KDMUpdateTypeValue);
                $('.dashboard-lock-freeze').toggleClass('ui-disabled');
                _.delay(function () {
                    IoDataHelper.updateDataModelParam('settings.response', 'enabled', KDMUpdateTypeValue);
                }, 2000);


            }


        }


        /**
         * Send data to defined modbus address
         * @param aAddress
         * @param aValue
         */
        function dataToDevice(aAddress, aValue) {
            var value = aValue;

            var b = IoDataHelper.isBool(aValue);
            if (b) {
                value = IoDataHelper.boolToInt(aValue);
            }

            var buf = new VlxDataBuffer();
            var item = new VlxWriteItem();
            item.address = aAddress;
            item.value = value;
            buf.appendData(item);
            IoQueue.sendItemBuffer(buf, aAddress);
        }

        /**
         * Settings Cyclone mode to 4 starts the selftesting
         */
        function startSelfTest() {
            dataToDevice(VlxDevConstants.A_CYC_MODE, VlxDevConstants.C_CYC_MODE_SELF_TEST);
        }

        /**
         * Settings Cyclone mode to 4 starts the selftesting
         */
        function setTestMode(aData) {

            var mode = VlxDevConstants.C_CYC_MODE_NORMAL;
            var enab = IoDataHelper.boolToInt(aData.value);
            if (enab) {
                mode = VlxDevConstants.C_CYC_MODE_TESTING;
            }
            dataToDevice(VlxDevConstants.A_CYC_MODE, mode);
        }

        /**
         *
         * @param aCurrentPower
         */
        function powerOnOff(aCurrentPower) {

            if (!aCurrentPower) {

                dataToDevice(VlxDevConstants.A_CYC_MODE, VlxDevConstants.C_CYC_MODE_OFF);
            }
            else {
                dataToDevice(VlxDevConstants.A_CYC_MODE, VlxDevConstants.C_CYC_MODE_NORMAL);

            }
        }


        /**
         * Send time to the device
         */
        function writeTime() {

            var value = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CYC_TIME);
            var item = new VlxWriteItem();
            item.address = VlxDevConstants.A_CYC_MINUTE;
            item.value = value.minutes();
            var buf = new VlxDataBuffer();
            buf.appendData(item);


            item = new VlxWriteItem();
            item.address = VlxDevConstants.A_CYC_HOUR;
            item.value = value.hour();
            buf.appendData(item);

            //var conv=buf.convertDataToBuffer();
            IoQueue.sendItemBuffer(buf);
            console.log("wrote time");


        }


        /**
         * Write date information to the device
         * @param aValue
         */

        function writeDate(aValue) {

            var mom = moment(aValue);

            var item = new VlxWriteItem();
            item.address = VlxDevConstants.A_CYC_DAY;
            item.value = mom.date();
            var buf = new VlxDataBuffer();
            buf.appendData(item);

            var item1 = new VlxWriteItem();
            item1.address = VlxDevConstants.A_CYC_MONTH;
            item1.value = mom.month() + 1;
            buf.appendData(item1);

            var item2 = new VlxWriteItem();
            item2.address = VlxDevConstants.A_CYC_YEAR;
            item2.value = IoDataHelper.limitYear(mom.year());
            buf.appendData(item2);


            IoQueue.sendItemBuffer(buf);
            console.log("wrote date")

        }

        /**
         * Send week clock data to the device. aData contains weekclock marks
         * @param aData
         */
        function weekClockToDev(aData) {


            // disable UI updates
            IoDataHelper.uiUpdatesEnabled(false);
            // make request timer also skip updates for one round.
            var skippy = IoDataHelper.skipper();
            if (skippy < 3) {
                skippy++;
                IoDataHelper.skipper(skippy);
            }
            var eventCount = VlxReadConstants.CYC_NUM_OF_SCHEDULED_EVENTS - 1;
            var event = 0;

            // clear current event array
            for (var k = 0; k < eventCount; k++) {
                currentWeekArray[k] = 0;
            }


            // Get current events from the datamodel
            var list = Object.keys(IoDataHelper.readDataModelData(VlxDevConstants.EXT_CYC_WEEKLY_EVENTS).marks);
            var buf = new VlxDataBuffer();
            for (var i = 0; i < list.length; i++) {
                var m = moment(list[i], "HH:mm d");
                // day is 0-6 where 0 is sunday. We need to decrease it as device thinks 0 is monday
                var day = m.day();
                day--;
                if (day < 0) {
                    day = 6;
                }
                // convert "home" "away" "boost" to integer 1,2,3
                var prof = IoDataHelper.stringToProfile(aData.marks[list[i]]);
                var hour = m.hours();
                var index = day * 24 + hour; // calculate correct index/address for the profile to write

                // store profile values to the current event array
                currentWeekArray[index] = prof;
            }


            // create new event array that are modified
            var eventsToBeSent = [];
            for (i = 0; i < eventCount; i++) {

                // current events have any differences compared to previous events
                // add those to the eventsToBeSent array
                if (currentWeekArray[i] != oldWeekArray[i]) {
                    var obj = {index: i, value: currentWeekArray[i]};
                    eventsToBeSent.push(obj);
                    // also mark that this change is now handled.
                    oldWeekArray[i] = currentWeekArray[i];
                }
            }

            // send the actual changes to the device
            for (i = 0; i < eventsToBeSent.length; i++) {
                var item1 = new VlxWriteItem();
                item1.address = VlxDevConstants.A_CYC_SCHEDULE_MONDAY_00 + eventsToBeSent[i].index;
                item1.value = eventsToBeSent[i].value;
                console.log("Profile item: <<" + item1.value + ">>");
                item1.type = IoQueue.KItemTypeWeek;
                buf.appendData(item1);
            }

            IoQueue.sendItemBuffer(buf, IoQueue.KItemTypeWeek);
            console.log("Weekclock sent: " + eventsToBeSent.length + " events");


        }

        /**
         * Clear week clock data
         * @param aData
         */
        function clearWeekClock(aData) {

            IoDataHelper.pollingEnabled(false);
            IoDataHelper.skipper(1);
            var eventCount = VlxReadConstants.CYC_NUM_OF_SCHEDULED_EVENTS - 1;

            var buf = new VlxDataBuffer();
            var event = 0;
            var prof = 0;

            // make clear items
            for (var i = 0; i < eventCount; i++) {
                // create send items for each profile item
                var item1 = new VlxWriteItem();
                item1.address = VlxDevConstants.A_CYC_SCHEDULE_MONDAY_00 + i;
                item1.value = 0;
                item1.type = IoQueue.KItemTypeWeek;
                buf.appendData(item1);
            }

            // convert buffer, calculate checksum and send it to the device.
            IoQueue.sendItemBuffer(buf, 1);
            var marks = {};
            IoDataHelper.updateDataModelParam(VlxDevConstants.EXT_CYC_OLD_WEEKLY_EVENTS, marks, KDMUpdateTypeData);

            IoDataHelper.pollingEnabled(true);
        }


        /**
         *
         * @param aData
         * @param aMode
         */
        function setIoMode(aData, aMode) {


            var val = aData.value;

            // digital 1
            if (aMode == 0) {
                dataToDevice(VlxDevConstants.A_CYC_DIGITAL_INPUT_1_MODE, aData.value);
            }
            // digital 2
            else {
                dataToDevice(VlxDevConstants.A_CYC_DIGITAL_INPUT_2_MODE, aData.value);

            }
        }


        /**
         * Store IO parameters to the device
         * @param aData
         * @param aMode
         */
        function setExtraIoParams(aData) {


            switch (aData.modbus) {
                case VlxDevConstants.EXT_EXTRA_AIR_TEMP_TARGET:
                {
                    dataToDevice(VlxDevConstants.A_CYC_EXTRA_AIR_TEMP_TARGET, IoDataHelper.toKelvin(aData.value));
                    break;
                }
                case VlxDevConstants.EXT_EXTRA_EXTR_FAN:
                {
                    dataToDevice(VlxDevConstants.A_CYC_EXTRA_EXTR_FAN, aData.value);
                    break;
                }
                case VlxDevConstants.EXT_EXTRA_SUPP_FAN:
                {
                    dataToDevice(VlxDevConstants.A_CYC_EXTRA_SUPP_FAN, aData.value);
                    break;
                }
                case VlxDevConstants.EXT_EXTRA_TIME:
                {
                    var time = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_EXTRA_TIME);
                    dataToDevice(VlxDevConstants.A_CYC_EXTRA_TIME, (time.hours * 60) + time.minutes);
                    break;
                }
                case VlxDevConstants.EXT_EXTRA_TIMER_ENABLED:
                {
                    dataToDevice(VlxDevConstants.A_CYC_EXTRA_TIMER_ENABLED, IoDataHelper.boolToInt(aData.value));
                    break;
                }

                default:
                {
                    break;
                }

            }

        }


        /**
         * Convert profile data from UI to the one device wants
         * @param aValue
         */
        function uiProfileToDeviceProfile(aValue) {

            var active_profile = aValue;
            var cycState = 0;
            var boostTimer = 0;
            var fireTimer = 0;
            var boostTime = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_BOOST_TIME);
            var fireTime = IoDataHelper.readDataModelValue(VlxDevConstants.A_CYC_FIREPLACE_TIME);
            var boostTimerEnabled = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_BOOST_TIMER_ENABLED);
            var fireTimerEnabled = IoDataHelper.readDataModelValue(VlxDevConstants.A_CYC_FIREPLACE_TIMER_ENABLED);


            var buf = new VlxDataBuffer();

            if (active_profile == 0) {
                boostTimer = 0;
                fireTimer = 0;
                cycState = 0;

            }
            else if (active_profile == 1) {
                boostTimer = 0;
                fireTimer = 0;
                cycState = 1;

            }
            else if (active_profile == 2) {
                boostTimer = boostTime;
                fireTimer = 0;
                cycState = -1;
            }
            else if (active_profile == 3) {
                boostTimer = 0;
                fireTimer = fireTime;
                cycState = -1;
            }

            // add cyc state only for home and away
            if (cycState >= 0) {
                var item = new VlxWriteItem();
                item.address = VlxDevConstants.A_CYC_STATE;
                item.value = cycState;
                buf.appendData(item);
            }

            item = new VlxWriteItem();
            item.address = VlxDevConstants.A_CYC_BOOST_TIMER;
            item.value = boostTimer;
            buf.appendData(item);

            item = new VlxWriteItem();
            item.address = VlxDevConstants.A_CYC_FIREPLACE_TIMER;
            item.value = fireTimer;
            buf.appendData(item);

            //var conv=buf.convertDataToBuffer();
            IoQueue.sendItemBuffer(buf);

        }


        /**
         * Write factory settings
         * @param aExtModbusAddress
         */
        function factorySettings(aExtModbusAddress) {


            var command = 0;
            switch (aExtModbusAddress) {

                case VlxDevConstants.EXT_CYC_RESTORE_FACTORY_SETTINGS:
                {

                    // add true if need to skip cache
                    command = VlxDevConstants.C_COMMAND_RESTORE_FACTORY_SETTINGS;
                    dataToDevice(VlxDevConstants.A_CYC_COMMAND, command);
                    command = 0;
                    _.delay(function () {
                        location.reload();
                    }, 6000);

                    break;
                }
                case VlxDevConstants.EXT_CYC_SAVE_INSTALLATION_SETTINGS:
                {
                    command = VlxDevConstants.C_COMMAND_SAVE_INSTALLATION_SETTINGS;
                    break;
                }
                case VlxDevConstants.EXT_CYC_RESTORE_INSTALLATION_SETTINGS:
                {
                    command = VlxDevConstants.C_COMMAND_RESTORE_INSTALLATION_SETTINGS;
                    break;
                }
                case VlxDevConstants.EXT_CYC_SAVE_USER_SETTINGS:
                {
                    command = VlxDevConstants.C_COMMAND_SAVE_USER_SETTINGS;
                    break;
                }
                case VlxDevConstants.EXT_CYC_RESTORE_USER_SETTINGS:
                {
                    command = VlxDevConstants.C_COMMAND_RESTORE_USER_SETTINGS;
                    break;
                }
                default:
                {
                    break;
                }

            }
            // if command was set in switch case above
            if (command != 0) {
                dataToDevice(VlxDevConstants.A_CYC_COMMAND, command);
            }
        }

        /**
         * Store installation settings to the device
         * @param aCallBack to be called after saving
         */
        function saveInstallationSettings(aCallBack) {

            dataToDevice(VlxDevConstants.A_CYC_INSTALLATION_DONE, 0);
            factorySettings(VlxDevConstants.EXT_CYC_SAVE_INSTALLATION_SETTINGS);
            factorySettings(VlxDevConstants.EXT_CYC_SAVE_USER_SETTINGS);
            aCallBack();

        }


        /**
         * Write date to device when filters have been changed
         * @param aData
         */
        function filtersChanged(aData) {

            var mom = moment(aData.value);
            var buf = new VlxDataBuffer();
            var item = new VlxWriteItem();
            item.address = VlxDevConstants.A_CYC_FILTER_CHANGED_DAY;
            item.value = mom.date();
            buf.appendData(item);

            item = new VlxWriteItem();
            item.address = VlxDevConstants.A_CYC_FILTER_CHANGED_MONTH;
            item.value = mom.month() + 1; // typhoon months are 1-12, js 0-11
            buf.appendData(item);

            item = new VlxWriteItem();
            item.address = VlxDevConstants.A_CYC_FILTER_CHANGED_YEAR;
            item.value = IoDataHelper.limitYear(mom.year());
            buf.appendData(item);

            //var conv=buf.convertDataToBuffer();
            IoQueue.sendItemBuffer(buf);

        }

        /**
         * Store configuration number to the device
         * @param aData
         */
        function storeConfigNumber(aData) {

            var code = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CYC_CONFIG_NUMBER);
            var flagy=IoDataHelper.doCheckConfigurationNumber(code);
            if (!flagy) {
                IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_CONFIG_NUMBER,[]);
                return;
            }

            var buf = new VlxDataBuffer();
            var item = null;

            for (var i = 0; i < code.length; i++) {

                if (i == code.length - 1) {
                    item = new VlxWriteItem();
                    item.address = VlxDevConstants.A_CYC_CONFIGURATION_CHECKSUM;
                    item.value = code[i];
                    item.type = IoQueue.KItemTypeNormal;
                    buf.appendData(item);
                }
                else {
                    item = new VlxWriteItem();
                    item.address = VlxDevConstants.A_CYC_SERIAL_NUMBER_MSW + i;
                    item.value = code[i];
                    item.type = IoQueue.KItemTypeNormal;
                    buf.appendData(item);
                }
            }

            console.log("done");
            // disable scheduler & fetch for the config write
            IoDataHelper.updateDataModelValue("generalsettings.datapolling.enabled", false);


            // clear four empty blocks between config lsw & checksum
            for (i = 0; i < 4; i++) {
                item = new VlxWriteItem();
                item.address = VlxDevConstants.A_CYC_CONFIGURATION_NA_0 + i;
                item.value = 0;
                item.type = IoQueue.KItemTypeNormal;
                buf.appendData(item);
            }

            // write config params
            IoQueue.sendItemBuffer(buf);

            dataToDevice(VlxDevConstants.A_CYC_COMMAND, VlxDevConstants.C_COMMAND_SAVE_FACTORY_SETTINGS);

            // scheduler is kept closed and reboot note is shown
            IoDataHelper.showPermanentNote('generalsettings.ipchanged');

        }


        /**
         *  Write specific error as solved one
         * @param aIndex
         */
        function markErrorAsSolved(aIndex) {

            var offset = VlxDevConstants.A_CYC_FAULT_CODE + (aIndex * 6) + 5; // fault status address = fault_code+5
            var newstatus = 2; // solved state , 1 = active , 0 = in active
            dataToDevice(offset, newstatus);

        }

        /**
         * Turn defrosting flag on.
         * Defrosting will quit itself.
         * @param aData
         */
        function setDefrostOn(aData) {

            dataToDevice(VlxDevConstants.A_CYC_DEFROSTING, 1);
        }


        /**
         * Set filter change interval
         * @param aData
         */
        function setFilterInterval(aData) {

            var int = aData.value * 30;
            dataToDevice(VlxDevConstants.A_CYC_FILTER_CHANGE_INTERVAL, int);

        }


        /**
         * Do not show wizard any more
         */
        function hideWizard() {

            var wiz = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_SHOW_WIZARD);
            if (wiz) {
                IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_SHOW_WIZARD, 0);
            }
        }

        /**
         * Set user password as a bcd coded int
         * @param aData
         */
        function setUserPassword(aData) {

            var val = aData.value;
            //Note! User password must be reversed before writing to the device i.e. if user sets the password as '1234'
            //it must be written as '4321' Go figure!
            var reversedPw = val.toString().split('').reverse().join('');
            var conv = IoDataHelper.intToBcd(parseInt(reversedPw));
            dataToDevice(VlxDevConstants.A_CYC_USER_PASSWORD, conv);
        }

        /**
         * Enable boost timer
         * @param aData
         */
        function setBoostTimer(aData) {

            dataToDevice(VlxDevConstants.A_CYC_BOOST_TIMER_ENABLED, aData.value);
        }


        /**
         * Parity and stop bit are stored in one variable so those are both write once
         * @param aData
         */
        function setParityAndStopBit(aData) {

            var dataValue = 0;
            var parity = parseInt(IoDataHelper.readDataModelValue(VlxDevConstants.EXT_MODBUS_PARITY));
            var stopBit = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_MODBUS_STOPBIT);

            dataValue = (parity << 8) | stopBit;
            dataToDevice(VlxDevConstants.A_CYC_MODBUS_FRAME, dataValue);

        }


        /**
         *
         * @param aData
         */
        function setAnalogInputMode(aData) {

            var params = [VlxDevConstants.C_CYC_ANA_IN_NONE, VlxDevConstants.C_CYC_ANA_IN_SITUATION, VlxDevConstants.C_CYC_ANA_IN_POST_HEAT];
            var val = params[aData.value];
            dataToDevice(VlxDevConstants.A_CYC_ANALOG_INPUT_MODE, val);

        }

        /**
         * Scale values from slider 0..100 to 0..120
         * @param aData
         */
        function setAntiFrostTemperature(aData) {

            var scaled = Math.round((120 / 100) * aData.value) + 5;
            dataToDevice(VlxDevConstants.A_CYC_DEFROST_TEMP_PARAM, scaled);

        }

        /**
         * Scale values from slider -50..50 to 0..40
         * @param aData
         */
        function setAntiFrostHumidity(aData) {

            var scaled = Math.round((40 / 100) * (parseInt(aData.value) + 50));
            dataToDevice(VlxDevConstants.A_CYC_DEFROST_RH_OFFSET, scaled);
        }

        /**
         * Start cloud service and open web page where to register.
         * @param aData
         */
        function connectToCloud(aData) {


            var lang=IoDataHelper.readDataModelValue(VlxDevConstants.EXT_LANGUAGE);

            dataToDevice(VlxDevConstants.A_CYC_ETH_CLOUD_ENABLED, 1);


            //var url = aData.url;
            var url = L10n.locStr('id_text_web_signup_url');
            var s = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_UUID_STRING);

            url+=s+'?lang='+lang;

            window.open(url);

            getCloudConnectionStatus();

        }


        /**
         * Start cloud service and open web page where to register.
         * @param aData
         */
        function disconnectFromCloud(aData) {

            dataToDevice(VlxDevConstants.A_CYC_ETH_CLOUD_ENABLED, 0);

            "use strict";

            getCloudConnectionStatus();

        }

        function requestCloudConnectionStatus( interval) {

            var address = VlxDevConstants.A_CYC_CLOUD_STATUS;
            var buf = new VlxDataBuffer();

            var item = IoQueue.createItem();
            item.address = address;
            item.type = IoQueue.KItemTypeNormal;
            buf.appendData(item);

            var conv = buf.convertDataToBuffer(VlxDevConstants.WS_WEB_UI_COMMAND_READ_DATA);
            IoQueue.sendBinaryBuffer(conv, IoQueue.KItemTypeNormal);

         }


        function getCloudConnectionStatus( interval) {

            if( !interval)
                cloudStatusInterval = 500;
            else
                cloudStatusInterval = interval;

            cloudStatusTimerEnabled = true;
            cloudStatusRetryCounter = 1;

            requestCloudConnectionStatus();

        }


        function retryCloudConnectionStatus( value) {

            var status = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CLOUD_CONNECTION_STATUS);

            if( value !== status) {
                IoDataHelper.updateDataModelValue( VlxDevConstants.EXT_CLOUD_CONNECTION_STATUS, value);
            }
            else if( cloudStatusRetryCounter > 0 && cloudStatusRetryCounter < cloudStatusRetryLimit && cloudStatusTimerEnabled) {
                setTimeout("IoDataWriter.requestCloudConnectionStatus();", cloudStatusInterval);
                cloudStatusRetryCounter++;
            }
            else
                cloudStatusTimerEnabled = false;

            cloudStatusRetryCounter++;
        }



        function updateCloudConnectionStatus() {

            var status = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CLOUD_CONNECTION_STATUS);

            cloudStatusTimerEnabled = false;

            IoDataHelper.updateCloudConnectButtons( status);

            switch( status) {
                case VlxDevConstants.C_CYC_CLOUD_ONLINE:
                    //show disconnect button and message that device is connected
                    console.log( "Cloud: Online");
                    break;

                case VlxDevConstants.C_CYC_CLOUD_OFFLINE:
                    //show retry button and message that server cannot be reached
                    console.log( "Cloud: Offline");
                    break;

                case VlxDevConstants.C_CYC_CLOUD_CONNECTING:
                    //show disabled connecting button and message connecting that device is connecting
                    //two way databinding to recheck status after update from device
                    getCloudConnectionStatus();
                    console.log( "Cloud: Connecting");
                    break;

                case VlxDevConstants.C_CYC_CLOUD_CONN_FAILURE:
                case VlxDevConstants.C_CYC_CLOUD_INVALID_GATEWAY:
                case VlxDevConstants.C_CYC_CLOUD_DNS_ERROR:
                case VlxDevConstants.C_CYC_CLOUD_INTERNAL_FAILURE:
                case VlxDevConstants.C_CYC_CLOUD_SSL_CERT_FAIL:
                case VlxDevConstants.C_CYC_CLOUD_SSL_CERT_PARSE_FAIL:
                case VlxDevConstants.C_CYC_CLOUD_SSL_HANDSHAKE_FAIL:
                    //show error message
                    console.log( "Cloud: Connection Failed: ", VlxDevConstants.A_CYC_CLOUD_STATUS);
                    break;

                case VlxDevConstants.C_CYC_CLOUD_SW_VER_OLD:
                    //show sw is outdated and message that device is queued for update which will probably take one minute
                    getCloudConnectionStatus( 10000);
                    console.log( "Cloud: Software old");
                    break;

                case VlxDevConstants.C_CYC_CLOUD_SW_UPDATING:
                    //show that device
                    getCloudConnectionStatus( 10000);
                    console.log( "Cloud: Software is updating");
                    break;

                default:
                    break;
            }
        }



        /**
         * Start cloud service and open web page where to register.
         * @param aData
         */
/*
        function grantAccessToDevice(aData) {

            var valid=L10n.value('settings.grantaccess.emailvalid');
            if (valid) {
                var email=L10n.value('settings.grantaccess.editor');

                var url = aData.url;
                var s = L10n.value('generalsettings.uuidvalue');
                url+=s+'/'+email;
                window.location(url);

            }

        }
*/



        /**
         *
         * @param aData
         */
        function setBoostTime(aData) {

            dataToDevice(VlxDevConstants.A_CYC_BOOST_TIME, aData.value);
        }


        /**
         *
         *
         * #####  ##  ## #####  ##     ##  ####     ####   #####   ##
         * ##  ## ##  ## ##  ## ##     ## ##  ##   ##  ##  ##  ##  ##
         * #####  ##  ## ###### ##     ## ##       ######  #####   ##
         * ##     ##  ## ##  ## ##     ## ##  ##   ##  ##  ##      ##
         * ##      ####  #####  ###### ##  ####    ##  ##  ##      ##
         *
         */
        return {

            init: init,
            hideWizard: hideWizard,
            saveInstallationSettings: saveInstallationSettings,
            requestCloudConnectionStatus: requestCloudConnectionStatus,
            retryCloudConnectionStatus: retryCloudConnectionStatus

        }
    }();



/**
 * Created by janne.hamalainen on 8.12.2014.
 * This class is used to check if defrosting is ON during wizard.
 */


/**
 * API
 * @type {{init, readModbusValues, startFetchTimer, stopFetchTimer}}
 */
var IoDeviceDataReader = IoDeviceDataReader || function () {

        /**
         * Initialize object if needed
         */
        function init() {

        }

        /**
         * Read defrost status from the device
         */
        function readModbusValues() {
            "use strict";


            var buf = new VlxDataBuffer();
            var item = new VlxWriteItem();
            // defrost address
            item.address = VlxDevConstants.A_CYC_DEFROSTING;
            item.type = IoQueue.KItemTypeNormal;
            buf.appendData(item);

            item = new VlxWriteItem();
            // defrost address
            item.address = VlxDevConstants.A_CYC_EXTR_FAN_SPEED;
            item.type = IoQueue.KItemTypeNormal;
            buf.appendData(item);

            item = new VlxWriteItem();
            // defrost address
            item.address = VlxDevConstants.A_CYC_SUPP_FAN_SPEED;
            item.type = IoQueue.KItemTypeNormal;
            buf.appendData(item);


            var bin = buf.convertDataToBuffer(VlxDevConstants.WS_WEB_UI_COMMAND_READ_DATA);
            IoQueue.sendBinaryBuffer(bin, IoQueue.KItemTypeNormal);

        }

        /**
         * Fetch timer is used to call readModbusValues every second
         */
        function startFetchTimer() {

            var interval = 3;
            this.FRequestTimer = setInterval(function () {
                requestModbusData()
            }, interval * 3000);
            IoQueue.startTimer();
        }

        /**
         * Stop timer if needed
         */
        function stopFetchTimer() {
            clearInterval(this.FRequestTimer);
            FRequestTimer = null;
        }

        /**
         * Timer function to be called every second
         */
        function requestModbusData() {
            "use strict";
            readModbusValues();
        }

//              ___.   .__  .__                       .__
//  ______  __ _\_ |__ |  | |__| ____   _____  ______ |__|
//  \____ \|  |  \ __ \|  | |  |/ ___\  \__  \ \____ \|  |
//  |  |_> >  |  / \_\ \  |_|  \  \___   / __ \|  |_> >  |
//  |   __/|____/|___  /____/__|\___  > (____  /   __/|__|
//  |__|             \/             \/       \/|__|
        return {

            init: init,
            readModbusValues: readModbusValues,
            startFetchTimer: startFetchTimer,
            stopFetchTimer: stopFetchTimer
        }

    }();

/**
 * Created by janne.hamalainen on 15.12.2014.
 */


/**
 * API
 * @type {{init, start, stop, next}}
 */
var IoLogScheduler = IoLogScheduler || function () {
        "use strict";

        var iState;
        var iOldState;
        var iTimer;


        /**
         * Initialize variables
         */
        function init() {

            iState = 0;
            iOldState = -1;
            iTimer = null;
        }

        /**
         * Start timer
         */
        function start() {

            IoDataHelper.pollingEnabled(false);
            IoDataHelper.skipper(2);
            iState = 0;
            iOldState = -1;
            process();

        }

        /**
         * Stop timer
         */
        function stop() {

            clearInterval(iTimer);
            iTimer=null;
            iState = 0;
            iOldState=0;
            IoDataHelper.pollingEnabled(true);
        }

        /**
         * Go to next state
         */
        function next() {
            iState++;
            process();

        }


        /**
         * Main function to be run in every timer tick
         */
        function process() {

            // if state has changed enter the main
            if (iState != iOldState) {

                switch (iState) {

                    case 0:
                    {
                        IoDataReader.fetchRawLogs();
                        break;
                    }
                    case 1:
                    {
                        stop();
                        $(document).trigger("updatetemperaturegraph");

                        break;
                    }

                    default:
                    {
                        break;
                    }


                }

                // state is processed so this is also old state
                iOldState = iState;

            }

        }


//              ___.   .__  .__                       .__
//  ______  __ _\_ |__ |  | |__| ____   _____  ______ |__|
//  \____ \|  |  \ __ \|  | |  |/ ___\  \__  \ \____ \|  |
//  |  |_> >  |  / \_\ \  |_|  \  \___   / __ \|  |_> >  |
//  |   __/|____/|___  /____/__|\___  > (____  /   __/|__|
//  |__|             \/             \/       \/|__|
        return {

            init: init,
            start: start,
            stop: stop,
            next: next


        }


    }();

/**
 * Created by janne.hamalainen on 22.10.2014.
 */


var KPageSize=0x10000;
var offsetTable = [];
var offsetIndex = 0;
var numberOfLogs = 6;

var t_rawLogBuffer = [{},{},{},{},{},{}];
var t_bufferSizes = [0,0,0,0,0,0];
//var rawdatabuffer = [];
var rawdatabuffer = null;

/**
 *
 * @type {Array}
 */
var vlxNewLogBuffer = [];

/**
 *
 * @type {{}[]}
 */
var binaryLogBuffer = [{},{},{},{},{},{}];

/**
 *
 * @type {*[]}
 */
var dybuffer=[[],[],[],[],[],[],[]];

/**
 *
 * @type {Array}
 */
var drawbuffer = [];

/**
 * Dygraphs color definitions
 * @type {string[]}
 */
var chartColors=["#af3748","#e57a45","#0164aa","#4bafe7","#3f3f3f","#129568"];

/**
 *
 * @type {IoLogReader|*}
 */
var IoLogReader = IoLogReader || function() {

        function init() {
            clearSizeArray();
            createOffsetTable();
        }


        /**
         * Start log fetching with scheduler
         */
        function fetchLogs() {

            vlxNewLogBuffer.length=0;
            IoDataHelper.showWaitNote('generalsettings.graphswaitnote');
            IoLogScheduler.start();

        }

        /**
         * Store logs in object array
         * @param aBuffer
         * @param aLogNum
         * @param aNumOfRecords
         */
        function storeLog(aBuffer, aLogNum, aNumOfRecords) {

/*
            var start_log=moment();
            var end_log=moment();
            console.log("Parselog took:"+ end_log.diff(start_log,"milliseconds"));
*/

            var start_log=moment();

            IoDataHelper.clearSkipper();
            var logObject={};
            logObject.buffer=aBuffer;
            logObject.records=aNumOfRecords;
            logObject.logNum=aLogNum;
            binaryLogBuffer[aLogNum]=logObject;
            IoLogScheduler.next();
            var end_log=moment();
            console.log("Store log took:"+ end_log.diff(start_log,"milliseconds"));


        }

        /**
         *
         * @param aBuffer
         * @param aNumOfPages
         */
        function storeLog2(aBuffer, aNumOfPages) {
            var start_log=moment();
            IoDataHelper.clearSkipper();
            rawdatabuffer = new Uint8Array(aBuffer);
            parseBuffers();
            IoLogScheduler.next();
            var end_log=moment();
            console.log("Store log took:"+ end_log.diff(start_log,"milliseconds"));
        }

        /**
         * Process logs after they have been fetched.
         */
        function processLogs() {
            var start_log=moment();

            drawbuffer.length=0;
            for (var j=0;j<7;j++) {
                dybuffer[j].length=0;
            }

            // find out maximum number of records in logs
            var m=_.max(binaryLogBuffer, function(buf) { return buf.records; });
            var max_records= m.records;
            vlxNewLogBuffer.length=0;

            if (m==-Infinity) {
                m={buffer: null, records: 0, logNum: 0};
            }
            // get the date row based on maximum array
            parseLog(m.logNum);
            sortGraph();
            for (var i=0;i<vlxNewLogBuffer.length;i++) {
                dybuffer[0].push((vlxNewLogBuffer[i].date).toDate());
            }
            for (j=1;j<7;j++) {
                dybuffer[j].length=vlxNewLogBuffer.length;
            }


            // finalize graphs for the display
            for (j=0;j<6;j++) {
                vlxNewLogBuffer.length=0;
                parseLog(j);
                sortGraph();
                for (i=0;i<vlxNewLogBuffer.length;i++) {
                    // add only unique times
                    if (binarySearch(dybuffer[0],(vlxNewLogBuffer[i].date).toDate())!=null) {
                        if ((j>=0) && (j<=3)) {
                            // and convert first ones to temperatures
                            dybuffer[j + 1][i] = IoDataHelper.toCelsius(vlxNewLogBuffer[i].value);
                        }
                        // RH / C02 handled as such
                        else if ((j>=4) && (j<=5)) {
                            dybuffer[j + 1][i] = vlxNewLogBuffer[i].value;
                        }
                    }
                    // if there is no such time in the graph, add NULL so that dygraphs will
                    // interpolate correct value
                    else {
                        dybuffer[j+1][i]=null;
                    }
                }


            }
            // preparing for draw
            for (i=0;i<dybuffer[0].length;i++) {

                var arr=[];
                for (j=0;j<7;j++) {
                    arr.push( dybuffer[j][i]  );
                }
                drawbuffer.push(arr);
            }
            //var s=JSON.stringify(drawbuffer);
            var end_log=moment();
            console.log(end_log.diff(start_log,"milliseconds"));

            drawSeries();

            $.unblockUI();

        }


        /**
         *
         * @param aLogNum
         */
        function parseLog(aLogNum) {

            var start_log=moment();

            var endTime=moment(IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CYC_DATE));
            var thisHour=moment(IoDataHelper.readDataModelValue(VlxDevConstants.EXT_CYC_TIME));
            endTime.set('hours',thisHour.hours());
            endTime.set('minutes',thisHour.minutes());

            var duration=new moment(endTime).subtract(7, 'days');

            var numOfRecords=binaryLogBuffer[aLogNum].records;
            for (var i = 0, offset = 0; i < numOfRecords; i++, offset += 6) {

                var buffer=binaryLogBuffer[aLogNum].buffer;
                var m = new moment({
                    y: IoDataHelper.convertTwoDigitYears(buffer[offset + 4]),
                    M: (buffer[offset + 3]) - 1,
                    d: buffer[offset + 2],
                    h: buffer[offset + 0],
                    m: buffer[offset + 1],
                    s: 0,
                    ms: 0
                });


                if ((m >= duration) && (m <= endTime)) {
                    var o = {};
                    o.type=aLogNum;
                    o.date = moment(m);
                    o.value = buffer[offset + 5];
                    vlxNewLogBuffer.push(o);

                 }


            }

            var end_log=moment();
            console.log("Parselog took:"+ end_log.diff(start_log,"milliseconds"));

        }


        /**
         * Convert log numbers to corresponding localized log name
         * @param aNumber
         * @returns {string}
         */
        function logNumToName(aNumber) {


            var s="";
            switch (aNumber) {

                case VlxDevConstants.WS_LOG_EXTRACT_AIR_TEMP:
                {
                    s=L10n.str({txt: "extract_air"});
                    break;
                }
                case VlxDevConstants.WS_LOG_EXHAUST_AIR_TEMP:
                {
                    s=L10n.str({txt: "value_name_exhaust"});
                    break;
                }
                case VlxDevConstants.WS_LOG_OUTDOOR_AIR_TEMP:
                {
                    s=L10n.str({txt: "info_txt_outdoor_air"});
                    break;
                }
                case VlxDevConstants.WS_LOG_SUPPLY_AIR_TEMP:
                {
                    s=L10n.str({txt: "info_txt_supply_air"});
                    break;
                }
                case VlxDevConstants.WS_LOG_MAX_CO2:
                {
                    s=L10n.str({txt: "info_txt_CO2"});
                    break;
                }
                case VlxDevConstants.WS_LOG_MAX_HUMIDITY:
                {
                    s=L10n.str({txt: "info_txt_humidity"});
                    break;
                }
                default:
                {
                    break;
                }
            }

        return s;
        }

        /**
         * Binary search for fast searching
         * @param array
         * @param key
         * @returns {*}
         */
        function binarySearch(array, key) {
            var lo = 0,
                hi = array.length - 1,
                mid,
                element;


            while (lo <= hi) {
                mid = ((lo + hi) >> 1);
                element = array[mid];

                if (element < key) {
                    lo = mid + 1;
                } else if (element > key) {
                    hi = mid - 1;
                } else {
                    return mid;
                }
            }
            return null;
        }

        /**
         * Sort function for the graphs
         * Sorts by date
         */
        function sortGraph() {

            function dateSort(a,b)
            {
                return (a.date.diff(b.date));
            }

            vlxNewLogBuffer.sort(dateSort);

        }

        /**
         * Dygraphs callback to show legends for the graph
         * @param event
         * @param x
         * @param pts
         */
        function highlightFun(event, x, pts, seriesName, aInit) {

            aInit = aInit || false;

            var units=[" &deg;C"," &deg;C"," &deg;C"," &deg;C"," ppm"," %"];

            var params={};

            var vVal=0;
            for (var i=0;i<pts.length;i++) {

                params['text'+(i+1)]=logNumToName(i);
                if (aInit==false) {
                    vVal=pts[i].yval;
                }
                params['value'+(i+1)]=vVal;
                params['unit'+(i+1)]=units[i];
            }

            if (aInit==false) {
                params.date=moment(pts[0].xval).format("DD.MM.YYYY HH:mm");
            }
            else {
                params.date=IoDataHelper.getDateTime().format("DD.MM.YYYY HH:mm");
            }

            $('#chartlegends').html(JST.dashboargraphlegend(params));
            $('.chart-series-one').css('color',chartColors[0]);
            $('.chart-series-two').css('color',chartColors[1]);
            $('.chart-series-three').css('color',chartColors[2]);
            $('.chart-series-four').css('color',chartColors[3]);
            $('.chart-series-five').css('color',chartColors[4]);
            $('.chart-series-six').css('color',chartColors[5]);

        }

        /**
         *
         * @param date
         * @param granularity
         * @param opts
         * @param dygraph
         * @returns {string}
         */
        function axisLocalizerFun (date, granularity, opts, dygraph) {

        var mom=moment(date);
        return mom.format("DD MMM");
        }


        //for some reason Dygraph dropped move and up events from the default interaction model
        //here they are, taken from Dygraph site (MIT License)
        function moveV3(event, g, context) {
            if (context.isPanning) {
                Dygraph.movePan(event, g, context);
            } else if (context.isZooming) {
                Dygraph.moveZoom(event, g, context);
            }
        }

        function upV3(event, g, context) {
            if (context.isPanning) {
                Dygraph.endPan(event, g, context);
            } else if (context.isZooming) {
                Dygraph.endZoom(event, g, context);
            }
        }


        /**
         * Do the actual drawing of the graphs
         */
        function drawSeries() {



            var temp=L10n.locStr('id_text_value_name_temperature')+' [&deg;C]';
            var humi=L10n.locStr('id_text_info_txt_humidity')+" [%]";
            temp+=' / '+humi;

            var start_log=moment();
            var options= {
                labelsKMB: true,
                showLabelsOnHighlight: false,
                highlightCallback: highlightFun,
                colors: chartColors,
                strokeWidth: 2.0,
                interactionModel:{ //remove touch
                    mousedown: Dygraph.defaultInteractionModel.mousedown,
                    mousemove: moveV3,
                    mouseup: upV3,
                    dblclick: Dygraph.defaultInteractionModel.dblclick
                },
                axes: {
                    x: {
                        gridLineWidth: 1,
                        drawGrid: true,
                        axisLabelFormatter: axisLocalizerFun,
                        independentTicks: true
                    },
                    y: {
                        drawGrid: true,
                        independentTicks: true,
                        connectSeparatedPoints: true

                    },
                    y2: {

                        // This is important. It interpolates missing (null) points in the array
                        connectSeparatedPoints: true,
                        drawGrid: true,
                        independentTicks: true,
                        gridLineColor: "#cccccc"


                    }
                },

                ylabel: temp,
                y2label: 'CO2 [ppm]',


                labels: [ 'Date', 'y1','y2','y3','y4','y5','y6'],

                series : {
                    'y1': {
                        strokeWidth: 1.5,
                        axis: 'y'
                    },
                    'y2': {
                        strokeWidth: 1.5,
                        axis: 'y'
                    },
                    'y3': {
                        strokeWidth: 1.5,
                        axis: 'y'
                    },
                    'y4': {
                        strokeWidth: 1.5,
                        axis: 'y'
                    },
                    'y5': {
                        strokeWidth: 1.5,
                        axis: 'y2'
                    },
                    'y6': {
                        strokeWidth: 1.5,
                        axis: 'y'
                    }
                }

            };


            var graph = new Dygraph(
                document.getElementById("chart1"),
                drawbuffer,options
            );

            var end_log=moment();
            console.log(end_log.diff(start_log,"milliseconds"));
        }

        /**
         *
         * @param aBuffer
         * @param aOffset
         * @returns {{}}
         */
        function readOctet(aBuffer,aOffset) {

            var logObj={};
            logObj.variableId=aBuffer[aOffset+0];
            if ((logObj.variableId===0xff) || (aOffset>6*KPageSize)){
                // delete object and result will be null to identify that
                // page has ended.
                logObj=null;
            }
            else {
                // otherwise process data further.
                logObj.mm=aBuffer[aOffset+1];
                logObj.hh=aBuffer[aOffset+2];
                logObj.d=aBuffer[aOffset+3];
                logObj.m=aBuffer[aOffset+4];
                logObj.y=aBuffer[aOffset+5];
                logObj.value=((aBuffer[aOffset+7] << 8) | (aBuffer[aOffset+6])) & 0xffff;
            }
            return logObj;

        }

        /**
         *
         * @param aBuffer
         * @returns {number}
         */
        function calcChecksum(aBuffer) {

            var sum=0;
            for (var i=0;i<aBuffer.length;i++) {
                sum+=aBuffer[i];
            }
            sum&=0xffff;
            return sum;
        }

        /**
         *
         * @returns {Array}
         */
        function getPageStruct() {

            var bufferLength = 3;
            //Cyclone: 0x03 : WEB_UI_COMMAND_LOG_RAW : PAGES : CHECKSUM
            var buffer=[];
            buffer.push(bufferLength);
            buffer.push(VlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW);
            buffer.push(_.random(1,6));

            var sum=calcChecksum(buffer);

            buffer.push(sum);
            return buffer;
        }

        /**
         *
         */
        function parseBuffers() {
            for (var i=0;i<t_bufferSizes.length;i++) {
                t_bufferSizes[i]=0;
            }
            i=0;
//            console.log(JSON.stringify(rawdatabuffer));
            var dataArrays=[[],[],[],[],[],[]];
            while (i<offsetTable.length) {
                var j=0;
                while (j<KPageSize) {
                    var oct=readOctet(rawdatabuffer,offsetTable[i]+j);
                    if (oct==null) {
                        console.log("page change");
                        break;
                    }
                    else {
                        // process octets
                        if ((oct.variableId>=0) && (oct.variableId<6)) {
                            t_bufferSizes[oct.variableId]+=1;
                            dataArrays[oct.variableId].push(oct.hh);
                            dataArrays[oct.variableId].push(oct.mm);
                            dataArrays[oct.variableId].push(oct.d);
                            dataArrays[oct.variableId].push(oct.m);
                            dataArrays[oct.variableId].push(oct.y);
                            dataArrays[oct.variableId].push(oct.value);
                        }
                    }
                    j+=8;
                }
                i++;
            }

            for (i=0;i<numberOfLogs;i++) {
                var buffy=convertToUintBuffer(dataArrays[i]);
                var logObject={};
                logObject.buffer=buffy;
                logObject.records=t_bufferSizes[i];
                logObject.logNum=i;
                binaryLogBuffer[i]=logObject;

            }

        }

        /**
         *
         */
        function createOffsetTable() {
            for (var i=0;i<6;i++) {
                offsetIndex=i*KPageSize;
                offsetTable[i]=offsetIndex;

            }
        }

        /**
         *
         */
        function clearSizeArray() {
            for (var i=0;i<t_bufferSizes.length;i++) {
                t_bufferSizes[i]=0;
            }

        }

        /**
         *
         * @param aBuffer
         * @returns {Uint16Array}
         */
        function convertToUintBuffer(aBuffer) {

            var tmpBuffer = new Uint16Array(aBuffer);
            return tmpBuffer;

        }

        /**
         *
         * @param aBuffer
         * @returns {boolean}
         */
        function verifyCheckSum(aBuffer) {
            var result=false;
            var csum=aBuffer[aBuffer[0]];
            var sum=0;
            for (i=0;i<aBuffer.length-1;i++) {
                sum+=aBuffer[i];
            }
            sum&=0xffff;
            if (sum===csum) {
                result=true;
            }

            return result;

        }



        /**
         *        PUBLIC
         *
         *    ####   #####   ##
         *   ##  ##  ##  ##  ##
         *   ######  #####   ##
         *   ##  ##  ##      ##
         *   ##  ##  ##      ##
         *
         */
        return {
            init: init,
            logNumToName: logNumToName,
            sortGraph: sortGraph,
            storeLog: storeLog,
            storeLog2: storeLog2,
            processLogs: processLogs,
            drawSeries: drawSeries,
            fetchLogs: fetchLogs,
            parseLog: parseLog,
            highlightFun: highlightFun,
            verifyCheckSum: verifyCheckSum

/*            durationChanged: durationChanged*/
        }
    }();


/**
 * Created by janne.hamalainen on 7.3.2014.
*/


/**
 * Production flag.
 * true = production
 * false = debug/development
 * @type {boolean}
 */
// TODO: REMBER TO CHANGE THIS ----------------------------->
var vproduction = true;
// TODO: REMBER TO CHANGE THIS <-----------------------------

/**
 *
 * @type {null}
 */
var requestDataOnce = null;
/**
 *
 * @type {null}
 */
var loadPagesOnce = null;
/**
 *
 * @type {{}}
 */
var vlxOffsetObject = {};
/**
 *
 * @type {Array}
 */
var vlxOffsetKeys = [];

/**
 *
 * @type {Array}
 */
var vlxWeekCalendar = new Array(168);
var Communication = null;

var IoGlobal = IoGlobal || function () {


        var FRequestTimer = null;
        var FEnableUiUpdates = true;


        /**
         *
         */
        function init() {


/*
            var tit = 'Title Title Title Title Title Title Title Title Title ';
            var txt = 'Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message ';
            var btn='OK';



            IoDataHelper.hideNote();
            //IoDataHelper.showErrorNote('generalsettings.networkerrornote');
            var dlg=DialogStack.newDialog('1'+tit,txt,btn);
            var dlg1=DialogStack.newDialog('2'+tit,txt,btn);
            var dlg2=DialogStack.newDialog('3'+tit,txt,btn,function(){alert("Callback!");});

            return;
*/



            IoGlobal.recoverCounter=0;
            var bod=$('body');

            bod.on( "pagecontainershow", uppy );

            // For disabling the console messages
            extendConsole();
            toggleConsoles(!vproduction);

            bod.on('tap ', '.dashboard-base-note-button', hideNote);


            // defined in vlxpbldr.js
            $(document).on("updatetemperaturegraph", UiPageLoader.doGraph);
            L10n.register(listen, 'generalsettings.initialdataloaded');

            preCalculateOffsets();
            // should be 705 words
            vlxBufferSize = (39 + VlxReadConstants.CYC_NUM_OF_GENERAL_INFO + VlxReadConstants.CYC_NUM_OF_GENERAL_TYP_INFO + VlxReadConstants.CYC_NUM_OF_HW_STATES +
            VlxReadConstants.CYC_NUM_OF_SW_STATES + VlxReadConstants.CYC_NUM_OF_TIME_ELEMENTS + VlxReadConstants.CYC_NUM_OF_OUTPUTS + VlxReadConstants.CYC_NUM_OF_INPUTS +
            VlxReadConstants.CYC_NUM_OF_CONFIGS + VlxReadConstants.CYC_NUM_OF_CYC_SETTINGS + VlxReadConstants.CYC_NUM_OF_TYP_SETTINGS + VlxReadConstants.CYC_NUM_OF_SELF_TESTS +
            VlxReadConstants.CYC_NUM_OF_FAULTS + VlxReadConstants.CYC_NUM_OF_SCHEDULED_EVENTS);

            // init helper classes
            IoDataHelper.init();
            IoDataReader.init();
            IoDataWriter.init();
            IoLogScheduler.init();
            IoLogReader.init();
            IoQueue.init();

            loadPagesOnce = _.once(UiPageLoader.loadPages);


            // once object, one for data and one for page loading
            requestDataOnce = _.once(doRequestOnce);
            // find out ip address
            this.Ipaddress = IoDataHelper.checkIP();

            //log(requestDataOnce,"requestDataOnce");
            requestDataOnce();


            // this the fallback if for some reason socket connection has failed
            _.delay(fallback, 40000);

        }



        /**
         *
         */
        function hideNote() {
            IoDataHelper.hideNote();
        }


        /**
         *
         */
        function listen() {
            // start request timer as well
            startRequestTimer();
            loadPagesOnce();
        }


        // ultimate fallback
        function fallback() {


            var ready = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_PAGES_LOADED);
            if (!ready) {
                IoDataHelper.showPermanentNote('generalsettings.networkerrornote');

            }


        }

        /**
         *
         */
        function startRequestTimer() {


            var interval = IoDataHelper.pollingInterval();
            FRequestTimer = setInterval(function () {
                requestData()
            }, interval * 1000);
            //IoQueue.startTimer();
        }

        /**
         * Stop the request timer if needed
         */
        function stopRequestTimer() {
            clearInterval(FRequestTimer);
            FRequestTimer = null;
        }


        /**
         * Fetch data from device for the first time
         */
        function doRequestOnce() {

            fetchDataFromDevice();

            if (vlxWebSocket == null) {
                IoQueue.connectToCyclone();
            }

        }


        /**
         * General data polling function called by timer. Currently 20 seconds
         */
        function requestData() {
            var wizard = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_SHOW_WIZARD);
            if( wizard ) {
                console.log("Polling disabled during wizard");
                return;
            }
            var polling = IoDataHelper.pollingEnabled();
            if (!polling) {
                IoGlobal.recoverCounter++;
                if (IoGlobal.recoverCounter>3) {
                    IoDataHelper.pollingEnabled(true);
                    IoGlobal.recoverCounter=0;
                    IoDataHelper.hideNote();
                    IoDataHelper.showErrorNote('generalsettings.networkerrornote');
                }
            }
            else {
                //((polling != undefined) && (polling == true))
                IoGlobal.recoverCounter = 0;
                // fetch data
                fetchDataFromDevice();
                IoDataHelper.updateUiData(true);

                // create socket if needed
                if (vlxWebSocket == null) {
                    IoQueue.connectToCyclone();
                }
            }

        }





        /**
         * Prepare offset tables
         */
        function preCalculateOffsets() {
            /*vlxOffsetObject.CYC_INDEX_OF_FIRST_ITEM=       0;*/
            vlxOffsetObject.CYC_NUM_OF_GENERAL_INFO = VlxReadConstants.CYC_NUM_OF_GENERAL_INFO;
            vlxOffsetObject.CYC_NUM_OF_GENERAL_TYP_INFO = VlxReadConstants.CYC_NUM_OF_GENERAL_TYP_INFO;
            vlxOffsetObject.CYC_NUM_OF_HW_STATES = VlxReadConstants.CYC_NUM_OF_HW_STATES;
            vlxOffsetObject.CYC_NUM_OF_SW_STATES = VlxReadConstants.CYC_NUM_OF_SW_STATES;
            vlxOffsetObject.CYC_NUM_OF_TIME_ELEMENTS = VlxReadConstants.CYC_NUM_OF_TIME_ELEMENTS;
            vlxOffsetObject.CYC_NUM_OF_OUTPUTS = VlxReadConstants.CYC_NUM_OF_OUTPUTS;
            vlxOffsetObject.CYC_NUM_OF_INPUTS = VlxReadConstants.CYC_NUM_OF_INPUTS;
            vlxOffsetObject.CYC_NUM_OF_CONFIGS = VlxReadConstants.CYC_NUM_OF_CONFIGS;
            vlxOffsetObject.CYC_NUM_OF_CYC_SETTINGS = VlxReadConstants.CYC_NUM_OF_CYC_SETTINGS;
            vlxOffsetObject.CYC_NUM_OF_TYP_SETTINGS = VlxReadConstants.CYC_NUM_OF_TYP_SETTINGS;
            vlxOffsetObject.CYC_NUM_OF_SELF_TESTS = VlxReadConstants.CYC_NUM_OF_SELF_TESTS;
            vlxOffsetObject.CYC_NUM_OF_FAULTS = VlxReadConstants.CYC_NUM_OF_FAULTS;
            vlxOffsetObject.CYC_NUM_OF_SCHEDULED_EVENTS = VlxReadConstants.CYC_NUM_OF_SCHEDULED_EVENTS;
            var sum = 0;
            vlxOffsetKeys = Object.keys(vlxOffsetObject);

            for (var i = 0; i < vlxOffsetKeys.length; i++) {
                sum = sum + vlxOffsetObject[vlxOffsetKeys[i]];
                vlxOffsetObject[vlxOffsetKeys[i]] = sum + 1;
            }


            for (i = 0; i < vlxWeekCalendar.length; i++) {
                vlxWeekCalendar[i] = 0;
            }


        }


        /**
         * Calculate offset for certain modbus parameter
         * Parameters are referenced using the modbus address of the parameter e.g. VlxDevConstants.A_CYC_COMMAND=4627;
         *
         *
         * @param aIndex
         * @returns {number} or -1 if that index was not found
         */
        function calculateOffset(aIndex) {
            var offset = 0;

            if ((aIndex > VlxDevConstants.RANGE_START_g_cyclone_general_info) && (aIndex <= VlxDevConstants.RANGE_END_g_cyclone_general_info)) {
                offset = aIndex+1;
            }

            else if ((aIndex > VlxDevConstants.RANGE_START_g_typhoon_general_info) && (aIndex <= VlxDevConstants.RANGE_END_g_typhoon_general_info)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_typhoon_general_info + vlxOffsetObject.CYC_NUM_OF_GENERAL_INFO;
            }
            else if ((aIndex > VlxDevConstants.RANGE_START_g_cyclone_hw_state) && (aIndex <= VlxDevConstants.RANGE_END_g_cyclone_hw_state)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_cyclone_hw_state + vlxOffsetObject.CYC_NUM_OF_GENERAL_TYP_INFO;
            }
            else if ((aIndex > VlxDevConstants.RANGE_START_g_cyclone_sw_state) && (aIndex <= VlxDevConstants.RANGE_END_g_cyclone_sw_state)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_cyclone_sw_state + vlxOffsetObject.CYC_NUM_OF_HW_STATES;
            }
            else if ((aIndex > VlxDevConstants.RANGE_START_g_cyclone_time) && (aIndex <= VlxDevConstants.RANGE_END_g_cyclone_time)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_cyclone_time + vlxOffsetObject.CYC_NUM_OF_SW_STATES;
            }
            else if ((aIndex > VlxDevConstants.RANGE_START_g_cyclone_output) && (aIndex <= VlxDevConstants.RANGE_END_g_cyclone_output)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_cyclone_output + vlxOffsetObject.CYC_NUM_OF_TIME_ELEMENTS;
            }
            else if ((aIndex > VlxDevConstants.RANGE_START_g_cyclone_input) && (aIndex <= VlxDevConstants.RANGE_END_g_cyclone_input)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_cyclone_input + vlxOffsetObject.CYC_NUM_OF_OUTPUTS;
            }
            else if ((aIndex > VlxDevConstants.RANGE_START_g_cyclone_config) && (aIndex <= VlxDevConstants.RANGE_END_g_cyclone_config)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_cyclone_config + vlxOffsetObject.CYC_NUM_OF_INPUTS;
            }
            else if ((aIndex > VlxDevConstants.RANGE_START_g_cyclone_settings) && (aIndex <= VlxDevConstants.RANGE_END_g_cyclone_settings)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_cyclone_settings + vlxOffsetObject.CYC_NUM_OF_CONFIGS;
            }
            else if ((aIndex > VlxDevConstants.RANGE_START_g_typhoon_settings) && (aIndex <= VlxDevConstants.RANGE_END_g_typhoon_settings)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_typhoon_settings + vlxOffsetObject.CYC_NUM_OF_CYC_SETTINGS;
            }
            else if ((aIndex > VlxDevConstants.RANGE_START_g_self_test) && (aIndex <= VlxDevConstants.RANGE_END_g_self_test)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_self_test + vlxOffsetObject.CYC_NUM_OF_TYP_SETTINGS;
            }
            else if ((aIndex > VlxDevConstants.RANGE_START_g_faults) && (aIndex <= VlxDevConstants.RANGE_END_g_faults)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_faults + vlxOffsetObject.CYC_NUM_OF_SELF_TESTS;
            }
            else if ((aIndex > VlxDevConstants.RANGE_START_g_cyclone_weekly_schedule) && (aIndex <= VlxDevConstants.RANGE_END_g_cyclone_weekly_schedule)) {
                offset = (aIndex) - VlxDevConstants.RANGE_START_g_cyclone_weekly_schedule + vlxOffsetObject.CYC_NUM_OF_FAULTS;
            }
            return offset-1;
        }


        /**
         * General data fetching routine to initiate data fetching
         */
        function fetchDataFromDevice() {
            // request to send tables
            var addy = VlxDevConstants.WS_WEB_UI_COMMAND_READ_TABLES;
            var buf = new VlxDataBuffer();

            var item = IoQueue.createItem();
            item.address = addy;
            item.value = 0;
            buf.appendData(item);

            // here we have to have separated to convert and send
            // as we force it to be read command, not write as by default
            var conv = buf.convertDataToBuffer(addy);
            IoQueue.sendBinaryBuffer(conv, IoQueue.KItemTypeFetch);

        }

        function uppy() {
            "use strict";
            if ($('#chart1').isVisible()) {
                IoLogReader.drawSeries();
            }
        }

        function serviceMode(aBool) {
            toggleConsoles(aBool);
        }



        /**
         *        PUBLIC
         *
         *    ####   #####   ##
         *   ##  ##  ##  ##  ##
         *   ######  #####   ##
         *   ##  ##  ##      ##
         *   ##  ##  ##      ##
         *
         */
        return {

            listen: listen,
            init: init,
            stopRequestTimer: stopRequestTimer,
            startRequestTimer: startRequestTimer,
            calculateOffset: calculateOffset,
            fetchDataFromDevice: fetchDataFromDevice,
            serviceMode: serviceMode

        }

    }();


function extendConsole() {
    "use strict";
    try {
        var disabledConsoles = {};

        console.enable = function (level, enabled) {
            // Prevent errors in browsers without console[level]
            if (window.console === 'undefined' || !window.console || window.console === null) {
                window.console = {};
            }
            if (window.console[level] === 'undefined' || !window.console[level] || window.console[level] == null) {
                window.console[level] = function () {
                };
            }

            if (enabled) {
                if (disabledConsoles[level]) {
                    window.console[level] = disabledConsoles[level];
                }
                console.info("console." + level + "() was enabled.");
            } else {
                disabledConsoles[level] = window.console[level];
                window.console[level] = function () {
                };
                console.info("console." + level + "() was disabled.");
            }
        };
    } catch (exception) {
        console.error("extendConsole() threw an exception.");
        console.debug(exception);
    }
}

/**
 * Disable enable log printing
 * @param enabled
 */
function toggleConsoles(enabled) {
    console.enable("debug", enabled);
    console.enable("log", enabled);
    console.enable("info", enabled);
    console.enable("warn", enabled);
    console.enable("error", enabled);
}

/**
 * Helper function to print time how much it took to run some function
 * @param aFunctionToCall
 * @param aMessage
 */
function log(aFunctionToCall, aMessage) {
    if (!vproduction) {
        if (!_.isUndefined(aFunctionToCall)) {
            var message=":took:";
            var start_log=moment();
            aFunctionToCall();
            var end_log=moment();
            if (!_.isUndefined(aMessage)) {
                message=aMessage+message;
            }
            console.log(message+ end_log.diff(start_log,"milliseconds")+'ms');
        }
    }
}


/**
 * Created by janne.hamalainen on 7.2.2014.
 */


/**
 * API
 * @type {{loadPages, doGraph}}
 */
var UiPageLoader = UiPageLoader || function () {

        /**
         * Main entry point of loading the pages
         */
        function loadPages() {

            IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_PAGES_LOADED, true);
            var showWizard = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_SHOW_WIZARD);
            //    var showWizard=true;


            if (showWizard) {
                loadWizardPages();
            }
            else {
                loadDashboard();
            }

            // Allow listening UI changes after this point
            var enabled = IoDataHelper.readDataModelValue(VlxDevConstants.EXT_LISTENER_ENABLED);
            if (!enabled) {
                IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_LISTENER_ENABLED, true);
            }
            doGraph();


        }

        /**
         *
         */
        function loadDashboard() {

            IoDataWriter.hideWizard();

            // enabled datapolling if not enabled
            IoDataHelper.pollingEnabled(true);

            IoGlobal.dashboard = CreateDashBoard();
            IoGlobal.dashboard.showDashboard({cloud: false});
        }


        /**
         *
         */
        function loadWizardPages() {
            // disable scheduler & fetch for the config write
            // we don't want data to be fetched from the device.
            //IoDataHelper.updateDataModelValue("generalsettings.datapolling.enabled", false);
            IoDataHelper.pollingEnabled(false);
            IoGlobal.dashboard = CreateDashBoard();
            IoGlobal.dashboard.showWizard({onFinished: saveSetupSettings});
        }

        // we need to save these settings setup settings and then load dashboard.
        function saveSetupSettings() {
            /**
             *
             */
            function readyToLaunch() {
                IoDeviceDataReader.stopFetchTimer();
                IoDataWriter.hideWizard();
                IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_LISTENER_ENABLED, true);
                // set profile to home
                var prof = VlxDevConstants.C_CYC_STATE_HOME;
                // we are using aClearMeta = true to fake this event came from the UI and therefore
                // it will be written to the device.
                IoDataHelper.updateDataModelValue(VlxDevConstants.EXT_CYC_ACTIVE_PROFILE, prof, true);

                loadDashboard();

            }

            IoDataWriter.saveInstallationSettings(readyToLaunch);

        }

        /**
         *
         */
        function doGraph() {
            if (binaryLogBuffer[0].buffer==undefined) {
                var p={xval: 0,yval:0};

                IoLogReader.highlightFun(null,0,[p,p,p,p,p,p],'',true);
            }
            IoLogReader.processLogs();
        }


        /**
         *        PUBLIC
         *
         *    ####   #####   ##
         *   ##  ##  ##  ##  ##
         *   ######  #####   ##
         *   ##  ##  ##      ##
         *   ##  ##  ##      ##
         *
         */
        return {

            loadPages: loadPages,
            doGraph: doGraph

        }
    }();

