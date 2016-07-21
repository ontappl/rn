package pl.netczuk.ontaprn;

import android.content.Intent;
import android.os.Bundle;

import com.crashlytics.android.Crashlytics;
import com.facebook.react.ReactActivity;

import io.fabric.sdk.android.Fabric;

public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Fabric.with(this, new Crashlytics());
    }

    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        ((MainApplication) getApplication()).onNewIntent(intent);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ontaprn";
    }
}
